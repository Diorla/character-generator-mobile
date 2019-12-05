import React from "react";
import { View, Text } from 'react-native';
import { Card } from "react-native-paper";

import oddCalculator from './../services/oddCalculator';
import {
  eyeColour,
  eyeColourOdds,
  eyeShape,
  eyeShapeOdds,
  eyeElevation,
  eyeElevationOdds,
  eyeDistance,
  eyeDistanceOdds
} from "./../data/eyes";

/*
const Eyes = (props)=> {
  const { colour, shape, elevation, distance } = eyeFeatures();
  return (
    <View>
      <Text>Eyes</Text>
      <Text>Colour: {colour}</Text>
      <Text>Shape: {shape}</Text>
      <Text>Elevation/Size: {elevation}</Text>
      <Text>Distance: {distance}</Text>
    </View>
  )
}*/

const Eyes = (props)=> {
  const { colour, shape, elevation, distance } = eyeFeatures();
  let de = elevation=="Normal" && distance=="Normal";
  let e = elevation=="Normal";
  let d = distance=="Normal";
  console.log()
  if(de) {
    return (
      <Card style={{flexDirection: "row", padding: 8}}>
        <Text>{colour} and {shape} <Text style={{fontWeight: "bold"}}>Eyes</Text></Text>
      </Card>
    )
  } else if(d) {
    return (
      <Card style={{flexDirection: "row", padding: 8}}>
        <Text>{colour}, {shape} and {elevation} <Text style={{fontWeight: "bold"}}>Eyes</Text></Text>
      </Card>
    )
  } else if(e) {
    return (
      <Card style={{flexDirection: "row", padding: 8}}>
        <Text>{colour}, {shape} and {distance} <Text style={{fontWeight: "bold"}}>Eyes</Text></Text>
      </Card>
    )
  } else {
    return (
      <Card style={{flexDirection: "row", padding: 8}}>
        <Text>{colour}, {shape}, {elevation} and {distance} <Text style={{fontWeight: "bold"}}>Eyes</Text></Text>
      </Card>
    )
  }
}

const eyeFeatures=()=>{
  let colour=oddCalculator(eyeColour, eyeColourOdds);
  let shape=oddCalculator(eyeShape, eyeShapeOdds);
  let elevation=oddCalculator(eyeElevation, eyeElevationOdds);
  let distance=oddCalculator(eyeDistance, eyeDistanceOdds);
  return {
    colour, shape, elevation, distance
  }
}

export default Eyes;