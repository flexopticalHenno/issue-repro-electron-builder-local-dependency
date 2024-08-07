# Steps to reproduce

- checkout first commit after initial commit (with electron-builder 24 dependency)
- `npm ci`
- `npm start` prints hello world
- `npm run build`, then `./dist/win-unpacked/Issue\ Reproduction.exe` will also print hello world
- checkout second commit (including electron-builder 25 dependency)
- `npm ci`
- `npm start` still prints hello world
- `npm run build`, then `./dist/win-unpacked/Issue\ Reproduction.exe` will now show an error that it cannot find `hello-world` module after logging "starting up..."
  - `hello-world` is not included in `app.asar/node_modules` anymore