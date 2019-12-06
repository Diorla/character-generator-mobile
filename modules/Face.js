import React from "react";
import { View, Text } from 'react-native';
import { Card, Divider } from "react-native-paper";
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
      <Card style={{padding: 8, elevation: 4, marginBottom: 20}}>
        <View style={{flexDirection: "row", flexWrap: "wrap"}}>
          <Text>{shape} face</Text>
          <Text>, {beardType} beard</Text>
          <Text> and {moustacheType} Moustache</Text>
        </View>
        {
          chinType=="Normal" ? null:<Text>with {chinType}</Text>
        }
        <Divider style={{backgroundColor: "teal", height: 4, margin: 4}}/> 
        <Text style={{fontWeight: "bold"}}>Face</Text>
      </Card>
    )
  } else {
    return(
      <Card style={{padding: 8, elevation: 4, marginBottom: 20}}>
        <Text>{shape} face</Text>
        {
          chinType=="Normal" ? null:<Text>with {chinType}</Text>
        }
        <Divider style={{backgroundColor: "teal", height: 4, margin: 4}}/> 
        <Text style={{fontWeight: "bold"}}>Face</Text>
      </Card>
    )
  }
}
/*<Card style={{flexDirection: "row", padding: 8, elevation: 4, marginBottom: 20}}>
        <Text>Face Shape: {shape}</Text>
        <Text>Chin: {chinType}</Text>
      </Card>*/
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