import React from 'react';
import { StyleSheet, Text, View, Picker, Button, ScrollView } from 'react-native';
import { Appbar, Divider, Surface } from 'react-native-paper';
import { InputCheckbox, Hair, Face, Eyes, Skin, HWeight } from './modules';
import { AdMobBanner } from 'expo-ads-admob';

//

class App extends React.Component{
  state={
    gender: "male",
    isBlack: true,
    isWhite: true,
    isTanned: true,
    isBrown: true,
    age: 19,
    colour: "",
    refresh: Date.now(),
  }
  
  refresh=()=>{
    this.setState({
      refresh: Date.now()
    })
  }
  render() {
    return(
      <Surface style={{height: "100%", elevation: 4}}>
        <View style={{backgroundColor: "teal", height: 30}}/>
        <Appbar style={{backgroundColor: "teal", justifyContent: "space-around"}}>
          <Text style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 18
          }}>Character Generator</Text>
        </Appbar>
        <ScrollView>
          <View style={{flexDirection: "row", backgroundColor: "#ade"}}>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: "bold"}}>Gender</Text>
              <Picker
                style={{alignSelf: "flex-start"}}
                selectedValue={this.state.gender}
                style={{ height: 50, width: "100%" }}
                onValueChange={(value) => this.setState({ gender: value })}>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>
            <View style={{flex: 1, backgroundColor: "#ade"}}>
              <Text style={{fontWeight: "bold"}}>Age </Text>
              <Picker
                style={{alignSelf: "flex-start"}}
                selectedValue={this.state.age}
                style={{ height: 50, width: "100%" }}
                onValueChange={(value) => this.setState({ age: value })}>
                <Picker.Item label="13 years or younger" value={13} />
                <Picker.Item label="14 years" value={14} />
                <Picker.Item label="15 years" value={15} />
                <Picker.Item label="16 years" value={16} />
                <Picker.Item label="17 years" value={17} />
                <Picker.Item label="18 years" value={18} />
                <Picker.Item label="19 years or older" value={19} />
              </Picker>
            </View>
          </View>
          <Divider style={{backgroundColor: "teal"}} />
          <View style={{flex: 1, backgroundColor: "#ade"}}>
            <Text style={{fontWeight: "bold"}}>Colour range</Text>
            <View style={{flexDirection: "row", alignItems: "center", 
              justifyContent: "space-between", height: 60}}>
              <InputCheckbox label="Black" isActive={this.state.isBlack} onPress={()=>{
                this.setState({
                  isBlack: !this.state.isBlack
                })
              }}/>
              <InputCheckbox label="Brown" isActive={this.state.isBrown} onPress={()=>{
                this.setState({
                  isBrown: !this.state.isBrown
                })
              }}/>
              <InputCheckbox label="Tanned" isActive={this.state.isTanned} onPress={()=>{
                this.setState({
                  isTanned: !this.state.isTanned
                })
              }}/>
              <InputCheckbox label="White" isActive={this.state.isWhite} onPress={()=>{
                this.setState({
                  isWhite: !this.state.isWhite
                })
              }}/>
            </View>
          </View>
          <Divider style={{height: 2, backgroundColor: "teal"}}/>
          <View style={{height: 10}}/>
          <View style={{height: 10}}/>
          <Skin
            isBrown={this.state.isBrown}
            isBlack={this.state.isBlack}
            isTanned={this.state.isTanned}
            isWhite={this.state.isWhite}/>
          <Hair gender={this.state.gender} colour="black"/>
          <Face gender={this.state.gender} age={this.state.age}/>
          <Eyes/> 
          <HWeight gender={this.state.gender} age={this.state.age}/>
        </ScrollView>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-8409252119990664/3600351357"
          servePersonalizedAds
          testDeviceID="EMULATOR"
          onDidFailToReceiveAdWithError={(err)=>console.log(err)} />
        <Button mode="contained" title="Refresh" 
          style={{position: "fixed", bottom: 0}} onPress={this.refresh}/>
      </Surface>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;