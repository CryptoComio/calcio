# calcio

Web lineup manager optimized for touch devices.

## Features
- Responsive field with drag & drop via Pointer Events.
- Editable role labels and color legend.
- `exportToHTML()` generates a standalone HTML including field, roster and role legend.

## Touch/Drag integration
Tokens are made draggable in `renderField()` by calling `enableDrag()`, which listens to `pointerdown`, `pointermove` and `pointerup` events. On mobile, hold and drag a token; snap and anti-collision can be toggled from the toolbar.

Use the **Ruoli** button to rename roles; names persist in `localStorage` and are included in exports.
