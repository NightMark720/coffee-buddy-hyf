---
workflow: general-video
flow: companion
storyboard: yes
mode: collaborative
status: exported
message: "One natural-language instruction schedules maintenance across a fleet, while each machine reports its own state."
destination: exhibition vertical screen
aspect: 1080x1920
length: 22s
language: English
audience: exhibition procurement and business visitors
narration: no
---

# Ch.4 — One app, one fleet

## Intent

Continue the Coffee Buddy series in one continuous app conversation. Machines proactively report care needs. A single instruction starts Lobby-1 deep cleaning and schedules Lobby-2 descaling at 02:00. The four-machine list makes concurrent states visible.

## Assets

- STORYBOARD-SOURCE.md — unchanged copy of the supplied Ch.4 storyboard.
- Figma Page 1 — Home Ready (537:1071), talk/texting (537:1074), task status card (537:3337), machine status/workbench (715:4937).
- assets/fonts/ — the series' local SF Pro and Inter fonts.
- assets/avatars/ — the approved assistant bean and user cup avatars from Ch.7.
- assets/figma/ — the series' exact status bar and microphone assets.

## Customizations

- Independent folder and project identity: coffee-buddy-ch4. Independent future export: coffee-buddy-ch4-demo.mp4.
- User approved: keep Lobby-2 orange with Needs care and Descale · 02:00 at the end. Lobby-1 becomes green after cleaning; Lobby-3 becomes green after brewing. Four online refers to connectivity, not completed maintenance.
- 1080 × 1920, 22 seconds, 30 fps. English app copy, sound effects, no voiceover or music.
- Left assistant avatar is a coffee bean; right user and top profile use the same coffee cup.

## Notes

The original Ch.1 and Ch.7 projects are preserved. index.html now contains the complete seekable 22-second animation and 15 sound-effect clips. The supplied timeline is the content source; its all-green ending is superseded by the approved state correction. Page 1 has no matching fleet list; the new four-row card extends the existing Figma card tokens and machine status vocabulary. It is a demonstration of interaction, not evidence of connected physical machines.

The input has 52 characters; keyboard tap count is a sound-design cue, not a character count. The rinse sound is an illustrative licensed stock texture, not a recording of the physical machine. Source credits and hashes are recorded in assets/sfx/. HyperFrames usage returned unknown (no_subscription_login); do not infer available quota. The project CLI pin was upgraded from 0.8.156 to 0.8.157 and verified.

## Current completion criteria

1. Preserve the source storyboard byte-for-byte and isolate all Ch.4 files and outputs.
2. Deliver the approved six moments as one continuous 22-second, 1080 × 1920, 30 fps animation.
3. Preserve exact app copy except the approved final state correction.
4. Reuse Figma/series typography, card tokens and avatars; clearly record the new fleet extension.
5. Pass strict composition, runtime, layout and contrast checks; verify random/reverse seeking, replay, sound placement and local asset provenance.
6. Keep the approved static review and source intact, confirm both previous projects are unchanged, and hand over the animated Studio preview for final review before MP4 export.

## Review handoff

- Static review v1: storyboard.htm; http://localhost:8764/storyboard.htm.
- All six keyframes built and inspected. Source copy and series-preservation checks passed.
- User approved all six keyframes on 2026-10-14: “没问题，可以开始了”. Layout remains locked; animation and SFX are complete.
- Animated review: http://localhost:3034/#project/coffee-buddy-ch4. The managed preview server is running and returns HTTP 200.
- Strict checks passed: no lint/runtime errors or warnings, no layout issues at 16 sampled times, and 83/83 contrast checks passed. Report: .hyperframes/artifacts/checks/beba3a03-aa14-4f45-af3b-21db725aa4cd.json. No additional motion-assertion sidecar was configured.
- Studio verification passed forward/reverse seeks, empty-text resets, and continuous playback through the final hold. Active typing and rinse clips played without media errors. Audio analysis confirms 15 clips, 48 kHz stereo, no clipped samples and matching source hashes; this is measured validation, not a listening assessment.
- Ch.1's 170 baseline files, Ch.7's 214 baseline files and the supplied storyboard copy remain unchanged. Reports and keyframe images are in .hyperframes/review/.
- Final animated-preview approval was received on 2026-10-15. Exported `coffee-buddy-ch4-demo.mp4` in this independent folder. File validation: H.264 video 1080 × 1920 at 30 fps, AAC stereo audio at 48 kHz, 22.0 seconds; ffmpeg decode completed without errors. SHA-256: b98ea28ec0a76f3cbe5107f7cca3d1f8a3436022e2bb9deb9f5fad00ce46eda5.
