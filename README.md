# Solar checks widget for installer websites

Installers paste one line where the tools should appear:

```html
<script src="https://kingsly-the-dog.github.io/solar-embed/embed.js" data-client="CLIENT_ID" async></script>
```

- `embed.js` adds a frame that loads `tools-embed/?c=CLIENT_ID` and resizes it to fit.
- `tools-embed/index.html` checks the client's row in the "Solar Tools – Client On/Off Switch" Google Sheet. Status `ON` shows the 3 checks in their name and colours. Anything else shows a polite "not available" note.
- Switch a client on or off in the sheet. No code change needed.
