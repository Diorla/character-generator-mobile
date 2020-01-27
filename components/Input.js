import React from "react";

const Input = (props)=> {

  return (
    <TextInput
      label={props.label}
      value={props.value}
      onChangeText={props.onChangeText}
      style={{width: "100%"}}
      {...props}
    />
  )
}

/*
<TextInput
  label='Age'
  value={this.state.age}
  onChangeText={age => this.setState({ age })}
  style={{width: "100%"}}
  type="number"
/>
*/