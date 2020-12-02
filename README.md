# Parcel seed

> A very simple seed to start a modern Single Page App development in no time
> 
## how to use

First use:
- npm install
- npm start

Next use:
- npm start

Before final deploy:
- npm run build
- profit?

## ESlint

To fully enjoy ESlint, please
- install the official VSCode "ESlint" extension
- add this to your VSCode settings:
```json
  //...
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  //...
```

## JQuery and Bootsrap for quick POCs 

If needed, you can uncomment `bootstrap` + `jquery` imports in
- script.js
- style.scss
  
If you don't need them at all, you can remove thoses comments. Then in `package.json`:
  - remove deps
    - popper.js
    - bootstrap
    - jquery