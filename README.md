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

# Help
## Trait
- Morality: The tendency to do the right thing
- Truthfulness: The tendency to tell the speak their mind or say what they consider to be right.
- Sociability: What the character does when they find themselve in an unfamiliar crowd
- Approachability: Their behaviour towards strangers or in first meetings.
- Zeal: How far the character will go in order to achieve his/her dream
- Pride: How does the character handle their ego and their achievements.
- Risk taking: How far beyond their comfort zone will the character go, or perhaps the question is, does the character even have a comfort zone or it's limitless.
- Naiveté: Does the character has a childish innocent or gullibity or it's has been eroded over time due to stark reality
- Optimism: If given a canvas and a paint, how will they paint the future?
- Problem solving method: Approach to solving problems.
- Intelligence: 

//TODO: Set preferences
In the settings, you can limit certain information like the 
- countries: name of a country(e.g. Nigeria), continent(e.g Africa), region(e.g. ECOWAS, Latino, G-7, OECD)
- Perhaps, we could create a "checkbox" dropdown for selecting the list of countries you want
- Skin colour: You may select at least 1 of the 4 categories. You may also select all
- Age: You may want to limit the age range
- Deactivate country odds for both origin and migration, so China has the same odds as The Bahamas


//TODO: Add contributors to the drawer menu
- For now, it would just be me and my github link
- I could probably add my attributions too
- And to bulk it up, perhaps creator of tools like react, react-native, expo etc


//TODO: Expand on input help
- It would be sensitive to content of the inputs based on a "dictionary"
```js
const colour = {
  red: "The colour of blood",
  green: "The colour of leaves and life",
  blue: "The colour of the sky and the ocean"
}

const help = props.dictionary[props.value] || props.help

<Input label="Primary colours" dictionary={colour} value={this.state.colour} onChangeValue={(colour)=>this.setState({colour})}>
```
- This would work best on picker, because of the limited options I can bake into it
- But, since my randomly generated data are also limited, whenever a value is randomly generated for inputs, it could describe it. Expecially all those one word type e.g. "Lisping"
