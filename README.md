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

## FontAwesome and Taiwind for quick POCs 

`@fortawesome/fontawesome-free` and `tailwindcss` are in the seed

  
If you don't need it at all, 
- in`package.json`, remove deps
    - tailwindcss
    - @fortawesome/fontawesome-free
- in `./styles.scss`