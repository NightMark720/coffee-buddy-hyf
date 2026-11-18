# Ch.4 design truth

Concept: the conversation becomes a live four-machine control surface without leaving the app.

## Source and geometry

Figma file: an1HkDGtEQctMpe3MwNcsb, Page 1. Design context read for 537:1071 (Home Ready), 537:1074 (talk/texting), 537:3337 (task status), 715:4937 (machine status). Exact series microphone and statusbar are copied locally. User-requested bean/cup avatars override Figma's placeholder circles.

The render canvas is 1080 × 1920. The series uses a 393 × 698.666667 app surface scaled uniformly by 1080/393, adapting vertical whitespace from the 393 × 852 Figma screen. No device bezel. All chapter content stays inside the chat viewport. Top avatar, iOS status and composer remain anchored.

## Tokens

| Role | Value | Source |
|---|---|---|
| Canvas | #fcfbf9 | Figma Agent Talk Base |
| Card | #f5f3ee | Figma task and machine cards |
| Border | #e7e3da | Figma cards/composer |
| Text | #171715 | Figma primary text |
| Secondary | #6f706a | Figma machine status/body |
| Accent/action | #ff7e2e | Figma microphone and actions |
| Care text | #9a6700 | Figma needs-water status; readable small orange-family text |
| Completed | #2f7d5b | series machine/complete state |
| Display/card title | Inter, 32/40 and 20/24, 600 | Figma display and card title |
| Chat/body | SF Pro, 15/22 | series English adaptation |
| Row/status/chip | SF Pro, 17/22, 13/18, 11/16 | machine-card hierarchy adapted for fleet |
| Card radius | 20px | Figma task and machine cards |
| Composer | 365px wide, radius 26px, 44px mic | Figma talk/texting |
| Chat avatars | 36px; top profile 48px | Figma sizes; approved series art |

## Hierarchy and extension

Focal: one 353px-wide fleet card with four independent rows. Its header separates connectivity (4 online) from row-level care/execution states. Existing card surfaces, border and title styles are retained. New elements are status rings, row separators and a small Descale · 02:00 appointment chip. No invented location labels, controls or extra claims.

Ready = green ring and dot. Needs care = orange ring and dot. Brewing = orange arc. Deep cleaning = orange ring with a clipped liquid fill and small bubbles. Done = green check. Appointment remains subordinate to Needs care; it does not replace that warning.

Edge anchors: fixed statusbar, matching cup profile, composer and home indicator. Supporting detail: exact instruction and maintenance understanding pill. Background: warm white, no added decoration.

## Planned motion/audio

One continuous vertical chat scroll. Restrained settle entrances and 0.25-second row staggering. The ring provides the action: liquid and bubbles during cleaning, arc progress during brewing. One brief final highlight, then a still hold. No camera cuts or flying objects.

SFX only: attention cue, keyboard, send, three drops, four ascending row notes, rinse/bubbles, completion, summary typing. Audio implementation follows keyframe approval. No voiceover or music.
