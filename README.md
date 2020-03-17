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
