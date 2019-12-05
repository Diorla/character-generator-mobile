import React from "react";
import { Text } from 'react-native';
import { Card } from 'react-native-paper';
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
    <Card style={{flexDirection: "row", padding: 8}}>
      <Text>Hair colour: {hcolour}</Text>
      <Text>Hair size: {size}</Text>
      <Text>Hairstyle: {style}</Text>
      <Text>Hair type: {type}</Text>
    </Card>  
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