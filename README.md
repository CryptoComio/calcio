# calcio

Web lineup manager optimized for touch devices.

## Features
- Responsive field with drag & drop via Pointer Events.
- Editable role tags and labels with a unified color legend.
- `exportToHTML()` generates a standalone HTML including field, roster and role legend, rendering formation and player list immediately.
- Tokens show each player's full name in a pill above the circle on a single line and the role label inside the token, with role-colored rings and status badges for captains, cards and absences.
- Import/export formations as JSON to merge or replace lineups across devices without a backend.

## Backend storage
Run a small Node/Express server to share formations between devices.

```bash
npm install
npm start
```

The frontend will load and save lineup data via `GET/POST /api/state`, keeping player edits and role labels synchronized for all clients.

## Touch/Drag integration
Tokens are made draggable in `renderField()` by calling `enableDrag()`, which listens to `pointerdown`, `pointermove` and `pointerup` events. On mobile, hold and drag a token; snap and anti-collision can be toggled from the toolbar.

Use the **Ruoli** button or tap a role badge to rename roles; names persist in `localStorage` and are included in exports.
