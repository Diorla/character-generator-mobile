import React from "react";
import { View, Text } from 'react-native';
import { Card, Divider } from "react-native-paper";

const format=(arr)=> {
  let index = 0;
  for (let i of arr) {
    if(index < arr.length-2) {
        arr[index] = i+", ";
    } else if(index == arr.length-2) {
        arr[index] = i + " and ";
    }
  index++
  }
  return arr;
}

const Row = (props)=> {
  const next = format(props.children.filter((n=> n!="Normal"&& n!=" ")))
  if(!props.children) return null
  if(props.noFormat) {
    return (
      <Card style={{flexDirection: "row", padding: 8, elevation: 2, margin: 12, backgroundColor: "#EBEDEF"}}>
        <Text>{props.children}</Text>
        <Divider style={{backgroundColor: "teal", height: 4, margin: 4}}/> 
        <Text>{props.title}</Text>
      </Card>
    )
  } else {
    return (
      <Card style={{flexDirection: "row", padding: 8, elevation: 2, margin: 12, backgroundColor: "#EBEDEF"}}>
        <Text>{next}</Text>
        <Divider style={{backgroundColor: "teal", height: 4, margin: 4}}/> 
        <Text>{props.title}</Text>
      </Card>
    )
  }
}

export default Row;