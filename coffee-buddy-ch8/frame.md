---
background: "#fcfbf9"
card: "#f5f3ee"
line: "#e7e3da"
ink: "#171715"
muted: "#6f706a"
accent: "#ff7e2e"
green: "#2c7555"
body_font: SF Pro
heading_font: Inter
---

# Ch.8 design truth

The concept is a familiar cup becoming a personal recipe: Midnight Cloud first appears as a recommended oat latte, then receives its name, enters the library, and exposes reusable espresso-base data.

The original app is the entire visual world. Use a deliberately flat warm-white field, fixed status bar, top cup avatar, original chat avatars and bottom input. Library and detail views keep the app shell and use back navigation instead of the chat input. No phone frame, promotional typography, photographic machine, invented benefits, background decoration or voiceover.

Ch.7 drink cards: nearly black, 20px corners, warm-white Inter title, restrained warm-grey description, thin outlined chips, a softly contrasting circular illustration field. Retain its original flat vector style; show a latte rather than the tonic illustration. The library uses three compact cards plus a dashed empty slot. The newly saved card has an orange Just saved badge. Do not add weather or temperature values absent from this chapter.

The detail hero and five rows are the focal point. Use original SF Pro with tabular numbers, clear labels and right-aligned wrapping values. Mark the data Espresso base and add Grind is set manually on the machine. No unprovided milk parameters.

Sizes are logical pixels and scale by 2.748091603: statusbar top 23; profile 48×48 at top 60/right 18; chat top 128, bottom 108, left/right 14; row 365; assistant card 317; avatar 36; gap 12; full-width card 353. Greeting 32/40, titles 20/25, body 14/20, labels 12/18. Library tiles may use 16/20 titles and compact labels because they are app UI, not title slides.

All principal layout uses flex/grid and real measured heights. Input transcription wraps within its text column and uses the same 44px microphone/waveform slot. Feedback exits before naming enters. Saved status exits before final replies if sharing space. Static sheets must show readable complete buttons and parameters.
