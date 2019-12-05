```js
const normalHeight=(n)=>{
  const top = n+3;
  const bottom = n-3;
  return [bottom, top];
}

const slightlyTall=(n)=>{
  const top = n+10;
  const bottom=n+4;
  return [bottom, top];
}

const veryTall=(n)=>{
  const top = n+17;
  const bottom=n+11;
  return [bottom, top];
}

const xtremelyTall=(n)=>n+18


const slightlyShort=(n)=>{
  const bottom = n-10;
  const top=n-4;
  return [bottom, top];
}

const veryShort=(n)=>{
  const bottom = n-17;
  const top=n-11;
  return [bottom, top];
}

const xtremelyShort=(n)=>n-18
```

```js
// Generate odd

const hairColour = ["black", "brown", "blonde", "red", "others"];
const hairOdds = [34.1, 47.7, 15.7, 2.3, 0.2];

const oddMaker=(arr, odds)=>{
    let total = 0;
    let totalOdds = odds.map(n=>Number((total+=n).toFixed(2)));
    let target = Math.floor(Math.random()*100);
    for(let i = 0; i < arr.length; i++) {
        if(totalOdds[i] > target) return arr[i]
    }
}

oddMaker(hairColour, hairOdds);
```

[ 34.1, 81.8, 97.5, 99.8, 100 ]

```js
// Calculate BMI


const weightGetter=(range, height)=>{
  const bmi = {
    obese: [40.1],
    overweight: [33.1, 40],
    big: [26.1, 33],
    normal: [17.1, 26],
    thin: [13.1, 17],
    veryThin: [7.1, 13],
    anorexic: [7]
  }
  return bmi[range].map(item=>item*(height/100)**2)
}
 
weightGetter("normal", 172)
// [ 50.58864, 76.91839999999999 ]
```

