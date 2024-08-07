# Steps to reproduce

- checkout first commit after initial commit (with electron-builder 24 dependency)
- `npm ci`
- `npm start` prints hello world
- `npm run build`, then `./dist/win-unpacked/Issue\ Reproduction.exe` will also print hello world