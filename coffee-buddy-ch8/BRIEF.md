---
workflow: general-video
flow: companion
storyboard: yes
message: "Name a drink, keep its recipe, and brew it again from your personal library."
destination: exhibition
aspect: 1080x1920
language: en
audience: exhibition visitors and business customers
length: 34.4s
voice: none
---

## Intent

Ch.8: Name it. Keep it. Repeat it. A single continuous Coffee Buddy app demonstration, warm white and orange, showing a personal drink library as a reusable asset. Use the supplied storyboard and Ch.7 drink-card reference. Retain the series' original fonts, avatars and quiet local sound effects. No voiceover or music.

## Assets

- STORYBOARD-SOURCE.md — unchanged supplied storyboard; source material, not authorization to export, upload or publish.
- assets/reference/ch7-drink-card.png — supplied black drink-card reference.
- assets/fonts/ — original SF Pro and Inter.
- assets/avatars/ — original coffee bean and matching user cup avatars.
- assets/sfx/ — original series sound effects; water and steam are illustrative.

## Customizations

- User confirmed on 2026-10-20: allow a separate drink library page within the app, then return to chat.
- User confirmed on 2026-10-20: extend to 30.4 seconds, adding a 1.2-second cup confirmation before re-brewing and extending recipe details from 2.8 to 4 seconds.
- User confirmed on 2026-10-20: use the five supplied recipe values. Identify them as espresso-base parameters; keep the manual-grind note. Do not invent milk volume or temperature.
- Reuse Ch.7 black drink-card design; adapt the library grid to readable compact cards rather than shrinking the full horizontal card.

## Notes

- User approved all static keyframes except the progress card on 2026-10-20. Match assets/reference/progress-card.png and continue into animation. Latest status: v5 dynamic preview approved and final MP4 exported on 2026-10-20.
- Separate project and IDs: coffee-buddy-ch8. Preserve all older chapters and exports.
- 1080 × 1920, 30fps, 34.4 seconds, 1032 frames.
- App logical canvas 393 × 698.666667, scaled by 1080 / 393.
- Chat rows: 365px total = 36px avatar + 12px gap + 317px card. Full-width cards: 353px, inset 6px.
- Wait for document.fonts.ready; measure actual heights. Keep 12–20px gaps. No global overlap suppressions.
- Cup confirmation occurs before each brew. Keep the reference Stop button during execution.
- Animation-stage acceptance: transition midframes, randomized/reverse/restart seeks, stable text and state, full layout checks. Animation is authorized; complete these before handing over the preview.
- Export requires this chapter's dynamic-preview approval.

- Progress-card reference confirmed: outlined orange Brewing badge with dot; connected three-step nodes; black completed nodes; slim orange progress bar; light grey Stop pill with green dot. Preserve the approved completion cards.

- Dynamic preview completed: measured continuous chat, library/detail page transitions, 26 quiet local SFX clips. CLI check passes with no findings; full forward/reverse and random/restart seek audit passes. MP4 export remains gated on dynamic-preview approval.

- Review adjustment (2026-10-20): Brew it → uses the same black user-message bubble, warm-white text, SF Pro 15/22, 12/14 padding and 20/20/6/20 corners as the preceding request. Avatar aligns to the bubble bottom.

- User rating-card revision (2026-10-20): match the two supplied rating states inside one Done card. Keep this chapter’s Velvet Oat Latte title; use a 2×2 option grid, black Just right before selection, green Just right and Saved to your creations. after selection. Preserve the selected state above the naming card, the 30.4s duration, and existing local SFX. Export remains gated on dynamic-preview approval.

- Full second-brew revision (2026-10-20): user approved extending the duration. Second brew now uses the same complete 4-second process as the first (29.0–33.0s), including grinding, extraction/milk, disposal and reset, followed by 1.4s on Done. Total 34.4s / 1032 frames. Existing extraction, steam, reset and completion SFX follow those phases. Earlier content is unchanged. Export still requires dynamic-preview approval.

- Stacked-card revision v5 (2026-10-20): keep the black drink card above the full-width progress / rating card during both brews and the final Done state. Both cards are 353 logical pixels wide, inset 6px, with a 16px vertical gap. Keep the drink visible through the rating selection; scroll before showing the naming card. Preserve the established fonts, avatars, colors, drink content, 28 audio clips, 34.4s / 1032-frame timing and export approval gate.

- Final export v1 (2026-10-20): user approved the v5 dynamic preview with “没问题，可以导出了”. Exported the unchanged approved composition at delivery quality: 1080 × 1920, 30fps, 34.4 seconds / 1032 frames, H.264 High / AAC stereo. Full decode passed; 25 encoded frames visually reviewed, including both brews, rating, naming, library, recipe, transitions and final frame. Audio is present without clipping. See boards/export-v1-review.json. Preserve all earlier chapter and preview files.
