---
format: 1080x1920
duration: 22s
message: "One natural-language sentence becomes two coffee tasks, then Yeema brews them in sequence."
arc: greeting -> sentence -> parsing -> order -> cups -> serial brew -> feedback
audience: exhibition procurement and business visitors
mode: collaborative
version: 1
status: built
---

# Ch.2 - One sentence, two cups

Static keyframe review uses `storyboard.htm`. The six cells are moments within one continuous chat scene, not six cuts.

## Frame 1 - The sentence starts here

- status: built
- src: storyboard.htm
- duration: 3.4s
- poster: 2.8s
- scene: greeting, keyboard, and the complete natural-language sentence

`Hi, Alex` and `What would you like today?` stay visible while Alex types: `A double espresso for here, and a latte to go.` The keyboard is intentionally visible so the sentence itself carries the complexity.

## Frame 2 - Yeema reads the order

- status: built
- src: storyboard.htm
- duration: 3.6s
- poster: 4.8s
- scene: sent sentence, parsing label, and two structured drink chips

The black user bubble is followed by `Yeema is reading your order`, then the understanding pill `Two drinks - double espresso for here, latte to go` and the `Double Espresso` / `Caffe Latte` chips.

## Frame 3 - The order is checkable

- status: built
- src: storyboard.htm
- duration: 2s
- poster: 8.1s
- scene: two-row order card with espresso and takeaway cup marks

The card reads `YOUR ORDER`, keeps `For here` and `To go` explicit, and ends with `Brew both ->`. It turns natural language into a compact confirmation surface.

## Frame 4 - Cups before action

- status: built
- src: storyboard.htm
- duration: 1.8s
- poster: 11.1s
- scene: safety confirmation before brewing

`Place both cups under the spout` and `Once they're set, start brewing.` lead into the orange `Cups are in place` action.

## Frame 5 - Two rows, one machine sequence

- status: built
- src: storyboard.htm
- duration: 6.6s
- poster: 15.7s
- scene: espresso completes first, latte starts automatically in the same card

The brew card keeps `Double Espresso` and `Caffe Latte` in one surface. The second row begins after the first row completes. The latte row exposes `Steaming milk - venturi` as its only color accent.

## Frame 6 - Done and ready for feedback

- status: built
- src: storyboard.htm
- duration: 4.6s
- poster: 20.8s
- scene: two green checks, feedback chips, and a quiet completed state

The card ends with `Done`, `Too sour`, `Too bitter`, `Too strong`, `Too weak`, `Just right`, and `Later`. No feedback choice is forced.

## Static review handoff

- Review page: `storyboard.htm`
- Expected review URL after local serving: `http://localhost:PORT/storyboard.htm`
- Animation and SFX are intentionally not started until the static board is approved.
