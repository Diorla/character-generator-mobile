# Author
- Ade Adeola

# Contact
[Github]()


# Attribution
> Icons used by this apps are sourced from

Attribution is made [Double-J Design](http://www.doublejdesign.co.uk) for icons sourced from [here](http://www.iconarchive.com/show/origami-colored-pencil-icons-by-double-j-design.4.html)

TODO: Consolidate data and modules into one
# How to
- I will move everything into `./modules`
- And I will create subfolders based on components like `./character`, `./perception` etc
  - So that I could group related files together
  - And eliminate `./data`
- `index.js` will be the source of export and main function
  - other js files would contain data and sub functions

```
./character
  ./face
    index.js
    face.js
  ./build
    index.js
    build.js
    chest.js
    weight.js
    height.js
```

TODO: Place "Name, gender, age" at the top of the app
TODO: Correct an erro: Mannerism->Likes->Help->spelling error
TODO: Combine annoying[] and boring[] into likes[]
```js
const trimmedAnnoying = annoying.remove(annoyingThings);
const boringStuff = borring.remove(boringThings)

const likes = [...trimmedAnnoying, ...boringStuff]

const like = oddCalculator(likes);
```
TODO: Rewrite annoying and boring
- I will have three array
  - boring[]
  - annoying[]
  - both[]: something that falls into the two category
- Now I will use a function that merge and select from them
```js
const annoyingList = [...both, ...annoying];
fetchAnnoy(annoyingList) //annoying1 annoying2
const boringList = [...both, ...boring]
// Fetch boring list from it too.
```