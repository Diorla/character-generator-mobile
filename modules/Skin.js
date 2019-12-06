import React from "react";
import { View, Text } from 'react-native';
import { Card, Divider } from "react-native-paper";

import oddCalculator from './../services/oddCalculator';

import {
  darkSkin,
  darkSkinOdds,
  brownSkin,
  brownSkinOdds,
  tanSkin,
  tanSkinOdds,
  whiteSkin,
  whiteSkinOdds
} from "./../data/skin";


const Skin = (props)=> {
  const { isBlack, isWhite, isTanned, isBrown } = props;
  const skinColour = determineSkinColour({isBlack, isWhite, isTanned, isBrown});
  return (
    <Card style={{flexDirection: "row", padding: 8, elevation: 4, marginBottom: 20}}>
      <Text>{skinColour}</Text>
      <Divider style={{backgroundColor: "teal", height: 4, margin: 4}}/> 
      <Text>Complexion</Text>
    </Card>
  )
}


const determineSkinColour=(obj)=>{
  const allArray = [];
  const allArrayOdds = [];

  if(obj.isBlack) {
    allArray.push(...darkSkin);
    allArrayOdds.push(...darkSkinOdds)
  }
  if(obj.isBrown) {
    allArray.push(...brownSkin);
    allArrayOdds.push(...brownSkinOdds)
  }
  if(obj.isTanned) {
    allArray.push(...tanSkin);
    allArrayOdds.push(...tanSkinOdds)
  }
  if(obj.isWhite) {
    allArray.push(...whiteSkin);
    allArrayOdds.push(...whiteSkinOdds)
  }
  
  return oddCalculator(allArray, allArrayOdds)
}

export default Skin