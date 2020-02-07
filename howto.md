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

# Occupation
> It will be based on two things, education level and social status

- Underclass will always be unemployed.

```js
const getJob=(education, socialStatus)=>{
  let qualifiedJobs, possibleJobs=[];
  // determine minimal educational requirement e.g. someone with secondary school
  // be be qualified to be a police and not a doctor but a degree holder qualifies
  // for both doctor and police.
  // Note, it will be ordered in a way that the gaussian will come into play.
  if(education=="Preschool")  qualifiedJobs = [...preschoolJobs]
  else if(education=="Secondary")  qualifiedJobs = [...preschoolJobs, ...secondaryJobs]
  else if(education=="Degree")  qualifiedJobs = [...preschoolJobs, ...degreeJobs, ...secondaryJobs]
  else if(education=="Master")  qualifiedJobs = [...preschoolJobs, ...masterJobs, ...degreeJobs, ...secondaryJobs]
  else qualifiedJobs = [...allOfThem, ...job1, ...job2, ...job3] //etc
  qualifiedJobs.push("unemployed") //regardless of your qualification, you can be jobless
  // Now filter based on socialStatus
  for(let job of qualifiedJobs) {
    if(jobs[socialStatus].includes(job)) possibleJobs.push(job)
  }
  // Use gaussian
  return oddCalculator(possibleJobs, true);
}
```

# Locations

## Nationality
> Will be determined totally at random, based on population

## Place of birth
> Will be one of the cities or town in the nationality

## Hometown
> High chance it will be where the character is born, like 70%

```js
const generateHometown=(placeOfBirth, nationality)=> {
  if(oddCalculator([true, false], [70, 30])) return placeOfBirth
  else {
    // Same country, different city or town
    if(oddCalculator([true, false], [70, 30])) return getCity(nationality)
    else return getCity(getCountry())
  }
}
```

# Activities
> Hobbies refers to things done regularly like singing, playing chess or coding. Favourite activities will refer to stuff that is done once in a while like camping. Hobbies may affect favourite activities or clash e.g. playing football might be an hobby, going to watch a football match every weekend is an activity.

- Folly or unhealthy habits
  - These includes stuff like smoking, gossiping, drinking, likes fatty food, leads sedentary life etc
  - gambling, social media, tv, wasting time online.
  - Severity will also vary e.g. alcholic or not, chain smoker, smokes when stressed, now and then.

- Favourite place as a kid e.g. park, library, cinema (will depend on hobby)

# Appearance
- Resting face: refers to how the person always look e.g. enthusiastic, bored, angry etc.
  - So in htmlGenerator, it will go like this: Kehinde always looks _bored_
- Physical
  - Port bellied
- Hair
  - Hairstyles, types of moustaches, 

# Habit
- Eye contact: shifty, evasive, direct

# Save
> I don't know yet whether morality and truthfulness don't have to affect each other e.g. a decadent but candid person.

1. **Morality**
   1. Ethical
   2. Honest
   3. Decent
   4. Dishonest
   5. Decadent
   6. Depraved
   7. Evil
1. **Truthfulness**:
   1. Blunt
   2. Candid
   3. Truthful/open
   4. Selectively truthful
   5. Oblique
   6. Fibber
   7. Compulsive liar
   8. Deceptive
   9. Devious