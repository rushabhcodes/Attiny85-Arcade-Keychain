# ATtiny85 Arcade Keychain

An open-source `tscircuit` recreation of a compact ATtiny85 game-console keychain.
The board includes a CR2032 battery holder, slide switch, 0.96-inch OLED display,
two arcade buttons, and a piezo buzzer driven through a dual inverter.

## Design files

- `index.circuit.tsx` — top-level circuit and board layout
- `board-outline.ts` — PCB outline and keychain cutouts
- `imports/` — reusable component definitions
- `assets/` — local CAD assets
- `__snapshots__/` — generated schematic, PCB, and 3D previews

## Development

Install dependencies with Bun, then run:

```sh
bun install
bun run dev
```

Useful commands:

```sh
bun run typecheck
bun run build
bun run snapshot
```

## Credits

The physical design is based on the Armour Grade open-source keychain gaming
console, including its reference schematic and Gerber artwork:

- Original project: [Armour Grade — Open-Source Keychain Gaming Console](https://armourgrade.com/blogs/news/open-source-keychain-gaming-console)

This repository is a `tscircuit` recreation and adaptation of that design. Credit
and rights for the original hardware design remain with its original authors.
