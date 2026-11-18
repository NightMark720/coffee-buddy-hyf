---
workflow: general-video
flow: companion
storyboard: yes
mode: collaborative
status: preview-review
destination: exhibition vertical screen
aspect: 1080x1920
length: 24s
language: English
audience: exhibition visitors
narration: no
---

# Ch.7: Invented on the spot

Message: Coffee Buddy turns context, available ingredients and a remembered taste profile into a named, repeatable creation.

## Confirmed Inputs

- The supplied Ch.7 storyboard is the content and timing source.
- This chapter uses an independent project folder and output file. Ch.1 is not edited.
- Inherit the series UI and avatar rules: assistant bean on the left; matching user cup on the right and top profile.
- The supplied target is 1080x1920, 24 seconds, 30 fps, English UI, sound effects and no voiceover.

## Implementation State

UI, fonts, avatars and sound assets were copied from Ch.1. Old renders, preview stills, delivery notes and project history were not copied. Project identity is coffee-buddy-ch7. The configured output is coffee-buddy-ch7-demo.mp4.

index.html and animation.js now implement Ch.7. The 24-second Studio preview includes keyboard input, invention drops and spark, the named recipe, ingredient-to-cup motion, explicit cup confirmation, espresso execution, feedback and saving. Sound effects are placed on the timeline; there is no narration or music. The MP4 export remains pending review of this assembled preview.

## Approved Decisions

- The user approved tonic below espresso. The implemented recipe description is: Bright espresso over tonic, finished with orange. Cold at 5°C.
- The user approved the confirmation note: Espresso only. Add tonic and orange yourself. Make it → and Cup is in place remain explicit actions.
- The prompt contains 69 characters, not 48. Keep the 2.6-second fast typing action and hold the sent message for reading; 48 light key sounds may be paced independently.
- The user approved the key-frame previews and authorized the full animation. Review the assembled Studio preview before exporting the MP4.

Exact source content is preserved in STORYBOARD-SOURCE.md. Approved adjustments and implementation status are recorded separately in STORYBOARD.md.

## Verification and Review

- Studio: http://localhost:3017/#project/coffee-buddy-ch7; persistent preview verified with HTTP 200.
- Final composition check: passed, with zero errors, warnings or info findings. Report: .hyperframes/ch7-check.json.
- Input, recipe, cup formation and docking, confirmation, espresso execution, saving and final hold were reviewed in snapshots and Studio. Cup trajectory was also checked with the keyframes diagnostic.
- Ch.1 was preserved; the prior comparison checked 200 files without changes. This chapter uses its own source folder, preview identity and configured output coffee-buddy-ch7-demo.mp4.
- Project CLI pin was updated from 0.8.152 to 0.8.155 and the composition passed checks on 0.8.155.
- Preview approval and the subsequent MP4 encode/stream verification remain outstanding. Machine sounds use illustrative stock textures rather than Yeema recordings.
