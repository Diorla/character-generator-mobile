import React from "react";
import { Text, View } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import {
  maleHairSize,
  maleHairSizeOdds,
  femaleHairSize,
  femaleHairSizeOdds,
  hairColour,
  hairColourOdds,
  blackMaleHairStyle,
  blackMaleHairStyleOdds,
  whiteMaleHairStyle,
  whiteMaleHairStyleOdds,
  whiteFemaleHairStyle,
  whiteFemaleHairStyleOdds,
  blackFemaleHairStyle,
  blackFemaleHairStyleOdds,
  hairTypes,
  hairTypesOdds,
} from "./../data/hair";
import oddCalculator from './../services/oddCalculator';

const Hair =(props)=>{
  const { gender, colour } = props;
  const { size, hcolour, style, type } = determineHair(gender, colour);
  return (
    <View>
      <Card style={{flexDirection: "row", padding: 8, elevation: 4, marginBottom: 20}}>
        <Text>{hcolour}, {size} and {type}</Text>
        <Divider style={{backgroundColor: "teal", height: 4, margin: 4}}/> 
        <Text style={{fontWeight: "bold"}}>Hair</Text>
      </Card>
      {
        style=="Normal" ? null:
        <Card style={{flexDirection: "row", padding: 8, elevation: 4, marginBottom: 20}}>
          <Text>{style}</Text>
          <Divider style={{backgroundColor: "teal", height: 4, margin: 4}}/> 
          <Text style={{fontWeight: "bold"}}>Hairstyle</Text>
        </Card>
      }
    </View>  
  )
}

const determineHair=(gender, colour)=> {
  let size, hcolour, style, type;
  hcolour = oddCalculator(hairColour, hairColourOdds);
  type= oddCalculator(hairTypes, hairTypesOdds);
  if(gender=="male") {
    size=oddCalculator(maleHairSize, maleHairSizeOdds);
    if(colour=="black") {
      style=oddCalculator(blackMaleHairStyle, blackMaleHairStyleOdds)
    } else {
      style=oddCalculator(whiteMaleHairStyle, whiteMaleHairStyleOdds)
    }
  } else {
    size=oddCalculator(femaleHairSize, femaleHairSizeOdds);
    if(colour=="black") {
      style= oddCalculator(blackFemaleHairStyle, blackFemaleHairStyleOdds)
    } else {
      style= oddCalculator(whiteFemaleHairStyle, whiteFemaleHairStyleOdds);
    }
  }
  return {
    size, hcolour, style, type
  }
}

export default Hair;