# Responsive UI — brusanganw
Live app: https://brusanganw-cmd.github.io/Responsive_UI-brusanganw/
A small responsive UI demo project built with plain HTML, CSS and JavaScript. It demonstrates client-side state, storage, validation and search utilities for a simple interactive page.

## Features

- Responsive layout using CSS in `styles/main.css`
- Client-side app logic in `scripts/app.js`
- Search utilities in `scripts/search.js`
- State management in `scripts/state.js`
- Local persistence in `scripts/storage.js`
- UI rendering helpers in `scripts/ui.js`
- Input validators in `scripts/validators.js`
- Example data in `seed.json`
- Quick test page at `tests.html`

## File structure

- `index.html` — main demo page
- `tests.html` — auxiliary test page
- `seed.json` — sample data used by the demo
- `styles/` — CSS files (main.css)
- `scripts/` — JavaScript modules:
	- `app.js`
	- `search.js`
	- `state.js`
	- `storage.js`
	- `ui.js`
	- `validators.js`

## Getting started

1. Open `index.html` in your browser (double-click or serve with a static server).
2. The app reads `seed.json` and uses in-browser storage when available.

Optional: run a simple static server (Node.js) from the project root:

```bash
# using npm's http-server (install globally first)
http-server -c-1

# or with Python 3
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Development notes

- Keep each module focused: `state.js` for in-memory state, `storage.js` for persistence, and `ui.js` for DOM updates.
- Use `validators.js` to centralize input checks before updating state.
- `search.js` contains search/filter logic; reuse it for other views.

## Contributing

Feel free to open issues or submit pull requests. For quick tasks:

- Add new UI pieces in `index.html` and implement rendering in `ui.js`.
- Add data properties to `seed.json` and adapt `state.js` and `storage.js` as needed.

## License

This repository has no license specified. Add a `LICENSE` file if you intend to release it publicly.

