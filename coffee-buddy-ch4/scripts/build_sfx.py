"""Freeze chapter-specific arrangements from approved local series SFX."""
import array
import hashlib
import json
import math
import shutil
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT.parent / 'coffee-buddy-ch7/assets/sfx'
OUT = ROOT / 'assets/sfx'
SR = 48000
OUT.mkdir(parents=True, exist_ok=True)


def load(path):
    with wave.open(str(path)) as w:
        assert (w.getframerate(), w.getnchannels(), w.getsampwidth()) == (SR, 2, 2)
        a = array.array('h', w.readframes(w.getnframes()))
    return [x / 32768 for x in a]


def write(name, data):
    assert max(abs(x) for x in data) < 1, name
    pcm = array.array('h', (round(x * 32767) for x in data))
    with wave.open(str(OUT / name), 'wb') as w:
        w.setparams((2, 2, SR, 0, 'NONE', 'not compressed'))
        w.writeframes(pcm.tobytes())


def overlay(dst, src, at, gain=1):
    offset = round(at * SR) * 2
    for i, v in enumerate(src):
        if 0 <= offset + i < len(dst):
            dst[offset + i] += v * gain


def note(frequency, duration=.32):
    data = []
    for i in range(round(duration * SR)):
        t = i / SR
        env = min(t / .009, 1) * math.exp(-t * 11) * min((duration - t) / .04, 1)
        v = .34 * env * (math.sin(2 * math.pi * frequency * t)
                         + .19 * math.sin(2 * math.pi * frequency * 2 * t))
        data.extend((v, v))
    return data


REUSE = ['swipe.wav', 'pop.wav', 'key.wav', 'drop-low.wav', 'drop-mid.wav',
         'drop-high.wav', 'complete.wav', 'extraction-demo.wav', 'steam-demo.wav']
sources = json.loads((SOURCE / 'sources.json').read_text())
records = []
for name in REUSE:
    shutil.copy2(SOURCE / name, OUT / name)
    original = next(x for x in sources if x['asset'] == 'assets/sfx/' + name)
    records.append({**original, 'adoption': 'Exact local series asset, copied without altering the previous chapter.'})

typing = [0.0] * (round(2.4 * SR) * 2)
key = load(OUT / 'key.wav')
tap_times = []
for i in range(40):
    at = .25 + i * .047 + ((i * 7) % 5) * .003
    tap_times.append(round(at, 4))
    overlay(typing, key, at, .30 + .045 * (i % 4))
write('typing-ch4.wav', typing)
summary = [0.0] * (round(.8 * SR) * 2)
for i in range(14):
    overlay(summary, key, .015 + i * .049, .24 + .025 * (i % 3))
write('summary-typing.wav', summary)

attention = [0.0] * (round(.64 * SR) * 2)
overlay(attention, note(294, .32), 0, .8)
overlay(attention, note(349, .34), .28, .7)
write('attention.wav', attention)
for i, hz in enumerate([440, 523.25, 659.25, 783.99], 1):
    write(f'row-{i}.wav', note(hz, .30))
write('brew-complete.wav', note(880, .42))

# Illustrative stock rinse arrangement. Not a recording of the product.
rinse = [0.0] * (4 * SR * 2)
water = load(OUT / 'extraction-demo.wav')
steam = load(OUT / 'steam-demo.wav')
for at, gain in [(0, .42), (1.30, .34), (2.60, .30)]:
    overlay(rinse, water, at, gain)
for i, at in enumerate([.35, 1.10, 1.90, 2.70, 3.35]):
    overlay(rinse, steam, at, .075 + .012 * (i % 2))
for i in range(4 * SR):
    env = min(i / (SR * .12), 1) * min((4 * SR - 1 - i) / (SR * .32), 1)
    rinse[2 * i] *= env
    rinse[2 * i + 1] *= env
write('rinse-illustrative.wav', rinse)

derived = {
    'typing-ch4.wav': '40 quiet keyboard taps arranged over 2.4 seconds from key.wav; timed independently of the 52 input characters.',
    'summary-typing.wav': '14 taps over 0.8 seconds from key.wav.',
    'attention.wav': 'Original locally synthesized restrained two-note UI cue (294/349 Hz); not an alarm.',
    'rinse-illustrative.wav': '4-second illustrative stock arrangement of Pouring water in a glass + Kettle boiling. Never an actual Yeema recording.',
    'brew-complete.wav': 'Original locally synthesized short completion UI note (880 Hz).',
    **{f'row-{i}.wav': f'Original locally synthesized UI note at {hz} Hz.'
       for i, hz in enumerate([440, 523.25, 659.25, 783.99], 1)}
}
for name, description in derived.items():
    records.append({'asset': 'assets/sfx/' + name, 'provenance': description,
                    'license': 'Inherits the recorded source license for stock arrangements; original UI synthesis for tonal marks.'})
for r in records:
    r['sha256'] = hashlib.sha256((ROOT / r['asset']).read_bytes()).hexdigest()
(OUT / 'sources.json').write_text(json.dumps(records, indent=2) + '\n')
(OUT / 'tap-times.json').write_text(json.dumps(tap_times) + '\n')
(OUT / 'CREDITS.md').write_text('''# Ch.4 SFX provenance

Interface key, swipe, send and completion assets are exact local copies from the established series (HyperFrames bundled Pixabay SFX). Drop, pouring and boiling textures inherit the Mixkit Sound Effects Free License. Source URLs, original excerpt positions, processing and SHA256 are in sources.json.

The 40-tap keyboard arrangement is independent of the 52 input characters. The two-note attention mark, four ascending fleet notes and short brewing completion note are original local UI synthesis.

rinse-illustrative.wav is a restrained 4-second arrangement of licensed stock water and boiling textures. It is illustrative sound design, NOT a Yeema One or exhibition machine recording. No voiceover or music. Original chapter files were not edited.
''')
print('Frozen', len(records), 'SFX assets; 40 keyboard taps; illustrative rinse identified.')
