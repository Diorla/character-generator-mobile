# Introduction
> These are how I'll generate some of my data

# Inject superceding odds

```js
const supercedingOdds = (main, others, positive, negative) => {
  const opponent = oddCalculator(others);
  return oddCalculator([main, opponent], [positive, negative])
}

//e.g. There will be a 90% chance the city is Igbeti
supercedingOdds("Igbeti", cities, 90, 10)
```


# Health
- It will be based on age, education, income status, bad habits/folly
- It may also be influenced by occupation
- Comorbidity too e.g. HTN & DM


# Appearance
- Physical
  - Port bellied
- Hair
  - Hairstyles, types of moustaches, 

# Mannerisms
## Likes
> These are the types of thing someone may like. Not, if it's an activity, it becomes an hobby.
- Food e.g. pizza
- Music e.g. Rock and roll, blues
- Movies, all movies, certain genre
- Sport: this means following e.g. watching football
