import fetchHeight from "./height";
import fetchWeight from "./weight";
import calculateWeight from './calculateWeight';

const maleHeight = {
  13: 156,
  14: 167,
  15: 170,
  16: 173,
  17: 175,
  18: 176,
  19: 177
}

const femaleHeight = {
  13: 157,
  14: 159,
  15: 160,
  16: 163,
  17: 163,
  18: 163,
  19: 163,
}

const medium=(n)=>{
  const top = n+3;
  const bottom = n-3;
  const diff = top-bottom;
  const rdiff = (Math.random()*diff).toFixed(2);
  return Number(rdiff)+bottom;
}

const tall=(n)=>{
  const top = n+10;
  const bottom=n+4;
  const diff = top-bottom;
  const rdiff = (Math.random()*diff).toFixed(2);
  return Number(rdiff)+bottom;
}

const xTall=(n)=>{
  const top = n+17;
  const bottom=n+11;
  const diff = top-bottom;
  const rdiff = (Math.random()*diff).toFixed(2);
  return Number(rdiff)+bottom;
}

const xxTall=(n)=>{
  const top = n+27;
  const bottom=n+18;
  const diff = top-bottom;
  const rdiff = (Math.random()*diff).toFixed(2);
  return Number(rdiff)+bottom;
}

const short=(n)=>{
  const bottom = n-10;
  const top=n-4;
  const diff = top-bottom;
  const rdiff = (Math.random()*diff).toFixed(2);
  return Number(rdiff)+bottom;
}

const xShort=(n)=>{
  const bottom = n-17;
  const top=n-11;
  const diff = top-bottom;
  const rdiff = (Math.random()*diff).toFixed(2);
  return Number(rdiff)+bottom;
}

const xxShort=(n)=>{
  const bottom = n-27;
  const top=n-18;
  const diff = top-bottom;
  const rdiff = (Math.random()*diff).toFixed(2);
  return Number(rdiff)+bottom;
}

const calculateHW=(age=19, gender="Male")=> {
  const heightType = fetchHeight(); //english
  if(gender==="Male") return getHeight(age, heightType, maleHeight)
  else return getHeight(age, heightType, femaleHeight);
}

const getHeight = (age, heightType, heightObj)=> {
  const baseHeight = heightObj[age]; //number
  const weightType = fetchWeight(); //english
  let height; //number
  if(heightType=="Extremely tall") height=xxTall(baseHeight);
  else if(heightType=="Tall") height=xTall(baseHeight);
  else if(heightType=="Slightly tall") height=tall(baseHeight);
  else if(heightType=="Average") height=medium(baseHeight);
  else if(heightType=="Slighly short") height=short(baseHeight);
  else if(heightType=="Short") height=xShort(baseHeight);
  else  height=xxShort(baseHeight);
  const weight = calculateWeight(weightType, height); //number
  return {
    weightType, //English
    heightType,
    weight, // number
    height
  }
}

export default calculateHW;