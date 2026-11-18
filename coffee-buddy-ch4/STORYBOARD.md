---
format: 1080x1920
message: "One conversation coordinates a fleet and keeps each machine's state visible."
arc: proactive report → instruction → understanding → fleet → execution → summary
audience: exhibition procurement and business visitors
mode: collaborative
version: 1
status: exported
---

# Ch.4 — One app, one fleet

22 seconds at 30 fps; 660 frames. One continuous Agent conversation. English copy, SFX only. The six review cells are key moments within a single scene, not six cuts.

## Approved adjustment

User reply: “按建议，保留待除垢提醒（推荐）”. At the end Lobby-2 stays orange, Needs care, with Descale · 02:00. Lobby-1 turns green after deep cleaning; Lobby-3 turns green after brewing. The header remains 4 online throughout: connectivity is distinct from care status. All other app copy and timing remain sourced from STORYBOARD-SOURCE.md.

## Layout decisions

Reuse the Figma chat base, card tokens and series avatars. Extend the existing single-machine status card into four rows; Page 1 contains no four-machine fleet card. Older messages scroll above the viewport as the list enters, preserving one conversation. Final review contains the full fleet and summary above the fixed composer. Summary wraps for legibility while remaining one message.

## Current deliverable

index.html is the complete 22-second seekable animation with 15 sound-effect clips. The animated Studio review is http://localhost:3034/#project/coffee-buddy-ch4. storyboard.htm remains the approved static six-keyframe sheet; its .htm extension keeps the review page outside HyperFrames' composition discovery.

## Timeline and audio plan

| Time | App state | Sound cue |
|---|---|---|
| 0–1.2 | Hi, Alex / What would you like today? | quiet opening |
| 1.2–3.4 | proactive descaling card | low two-note cue at 1.6 |
| 3.4–5.8 | keyboard instruction | whoosh + 40 quiet taps |
| 5.8–6.4 | sent black bubble | send bloop |
| 6.4–7.6 | Yeema is planning maintenance + three drops | three drop marks |
| 7.6–9.4 | understanding pill | soft settle |
| 9.4–12 | fleet rows land | four rising notes |
| 12–16 | Lobby-1 cleaning; Lobby-2 appointment appears | rinse and bubbles |
| 16–18 | Lobby-1 Ready; Lobby-3 Done; Lobby-2 Needs care | completion cues at 16.0 / 16.4 |
| 18–20 | summary types | quiet keys |
| 20–22 | full fleet + summary hold | brief highlight, then still |

## Verification

Animated review URL: http://localhost:3034/#project/coffee-buddy-ch4. Strict checks passed with zero lint/runtime errors or warnings, zero layout issues across 16 samples, and 83/83 text contrast checks passed. Report: .hyperframes/artifacts/checks/beba3a03-aa14-4f45-af3b-21db725aa4cd.json. No additional motion-assertion sidecar was configured. Nine full-frame keyframes were visually inspected; the final summary and four-row card fit above the anchored composer.

Actual Studio checks verified forward/reverse seeking, empty-text resets and continuous playback through the final hold. Lobby-2 retains Needs care and Descale · 02:00. Audio analysis verified 15 clips, 48 kHz stereo, a −20.89 dBFS summed sample peak, no clipped samples and matching source hashes. The rinse is illustrative stock audio; no listening assessment is claimed.

Local assets load, the source copy is byte-identical, and Ch.1 (170 baseline files) and Ch.7 (214 baseline files) remain unchanged. Reports and screenshots are in .hyperframes/review/. HyperFrames 0.8.157 is pinned and verified.

## Still open

- Keyframes and animation authorization approved on 2026-10-14.
- Animation, audio placement, composition checks and the running Studio preview are complete.
- Final animated-preview approval was received on 2026-10-15. The independent `coffee-buddy-ch4-demo.mp4` export is complete and file-validated: H.264 video 1080 × 1920 at 30 fps, AAC stereo audio at 48 kHz, 22.0 seconds; ffmpeg decode completed without errors. SHA-256: b98ea28ec0a76f3cbe5107f7cca3d1f8a3436022e2bb9deb9f5fad00ce46eda5.

## Frame 1 — A machine speaks first

- status: animated
- src: index.html
- duration: 3.4s
- poster: 2.7s
- scene: greeting and proactive exception card

Hi, Alex. What would you like today? The exception card enters with Lobby-2 needs descaling, Water hardness has reached the cleaning threshold. Its sole action is View machine. Orange attention styling is restrained, not an alarm. Planning rules: waterfall-entry (restrained UI settle adaptation), sine-wave-loop.

## Frame 2 — One instruction, two schedules

- status: animated
- src: index.html
- duration: 2.4s
- poster: 5.5s
- scene: exception remains visible while the user types

Descale Lobby-2 at 2 AM, and deep clean Lobby-1 now. The full instruction is readable in an expanded composer above the keyboard, then becomes the right-hand black chat bubble. Planning rules: anchored-layout-expand, discrete-text-sequence (smooth slice).

## Frame 3 — Check the understanding

- status: animated
- src: index.html
- duration: 3.6s
- poster: 8.5s
- scene: sent instruction and maintenance understanding

After three drops and Yeema is planning maintenance, the pill reads Deep cleaning Lobby-1 now · Descaling Lobby-2 at 02:00. Keep both times visible. Planning rules: waterfall-entry (restrained UI settle adaptation).

## Frame 4 — Four machines, one view

- status: animated
- src: index.html
- duration: 2.6s
- poster: 11.7s
- scene: full fleet card with initial states

Your machines / 4 online. Lobby-1 Ready, Lobby-2 Needs care, Lobby-3 Brewing · 62%, Pantry Ready. Four rows settle with a 0.25s offset. The older chat scrolls above; the understanding pill and full list remain readable. Planning rules: waterfall-entry (restrained UI settle adaptation), svg-path-draw.

## Frame 5 — Now and later

- status: animated
- src: index.html
- duration: 4s
- poster: 14.6s
- scene: cleaning ring and scheduled care chip

Lobby-1 Deep cleaning: liquid rises inside its ring with small bubbles. Lobby-2 retains Needs care and adds Descale · 02:00. Lobby-3 continues brewing. Other rows do not pulse for decoration. Planning rules: svg-icon-enrichment, sine-wave-loop.

## Frame 6 — Outcomes stay distinct

- status: animated
- src: index.html
- duration: 6s
- poster: 21.2s
- scene: final fleet and assistant summary

Lobby-1 Ready, Lobby-2 Needs care / Descale · 02:00, Lobby-3 Done, Pantry Ready. Summary: Done — Lobby-1 deep cleaned. Lobby-2 descales at 2 AM. One brief highlight, then a still hold through 22s. No all-green claim. Planning rule: registry shimmer-sweep (one restrained pass).
