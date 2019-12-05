import React from "react";
import { View, Text } from 'react-native';
import { Card } from "react-native-paper";
import {
  faceShape,
  faceShapeOdds,
  chin,
  chinOdds,
  moustache,
  moustacheOdds,
  beard,
  beardOdds
} from "./../data/face";
import oddCalculator from './../services/oddCalculator';

const Face=(props)=>{
  const { gender, age } = props;
  const {shape, chinType, moustacheType, beardType} = determineFace(gender, age);
  if(gender=="male" && age > 17) {
    return(
      <Card style={{flexDirection: "row", padding: 8}}>
        <Text>Face Shape: {shape}</Text>
        <Text>Chin: {chinType}</Text>
        <Text>Beard: {beardType}</Text>
        <Text>Moustache: {moustacheType}</Text>
      </Card>
    )
  } else {
    return(
      <Card style={{flexDirection: "row", padding: 8}}>
        <Text>Face Shape: {shape}</Text>
        <Text>Chin: {chinType}</Text>
      </Card>
    )
  }
}

const determineFace=(gender, age)=>{
  let shape, chinType, moustacheType, beardType;
  shape=oddCalculator(faceShape, faceShapeOdds);
  chinType= oddCalculator(chin, chinOdds);
  if(gender=="male" && age > 17) {
    moustacheType= oddCalculator(moustache, moustacheOdds);
    beardType= oddCalculator(beard, beardOdds);
  }
  return {
    shape, chinType, moustacheType, beardType
  }
}

export default Face;