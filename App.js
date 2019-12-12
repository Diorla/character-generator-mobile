import React from 'react';
import { StyleSheet, Text, View, Picker, ScrollView } from 'react-native';
import { Appbar, Divider, FAB, Card } from 'react-native-paper';
import { InputCheckbox, Row } from './modules';

import calculateHW from './xyz/data/calculateHeightWeight';
import buttockSize from './xyz/data/buttock';
import { shoulderSize, breastSize } from './xyz/data/chest';
import getDimple from './xyz/data/dimple';
import { getEarSize, getEarShape } from './xyz/data/ear';
import { getEyeBrowShape, getEyeBrowSize } from './xyz/data/eyeBrow';
import getEyeColour from './xyz/data/eyeColour';
import { getEyeDistance, getEyeElevation } from './xyz/data/eyeDistElev';

import getEyeShape from './xyz/data/eyeShape';
import getFaceShape from './xyz/data/faceShape';
import { dimpledChin, getDoubleChin, getFreckles } from './xyz/data/features';

import getForehead from './xyz/data/forehead';
import getSkinColour from './xyz/data/skinColour';
import getHairColour from './xyz/data/hairColour';

import getHairSize from './xyz/data/hairSize';
import getHairType from './xyz/data/hairType';
import gethHipSize from './xyz/data/hipSize';
import {
  getLimbLength,
  getLimbThickness,
  getHandFeetSize,
} from './xyz/data/limbs';

import getLip from './xyz/data/lipType';
import getNeck from './xyz/data/neck';
import { getNoseSize, getNoseShape } from './xyz/data/nose';
import getStomach from './xyz/data/stomach';
import { getBeardType, hasMoustache } from './xyz/data/facialHair';

class App extends React.Component {
  state = {
    age: 19,
    gender: 'Male',
    isDark: true,
    isTan: true,
    isMedium: true,
    isFair: true,
    modalVisible: false,
  };

  componentDidMount() {
    this.generateData();
  }

  reset = () => {
    this.setState({
      moustache: 'Normal',
      beard: 'Normal',
      shoulder: 'Normal',
      breast: 'Normal',
    });
  };
  generateData = () => {
    const { age, gender, isDark, isTan, isMedium, isFair } = this.state;
    this.reset();
    const { height, weight, weightType, heightType } = calculateHW(age, gender);
    const buttock = buttockSize(weightType);
    const shoulder = shoulderSize(gender, weightType);

    const hasDimple = getDimple();
    const earSize = getEarSize();
    const earShape = getEarShape();
    const eyeBrowShape = getEyeBrowShape();
    const eyeBrowSize = getEyeBrowSize();
    const eyeColour = getEyeColour();
    const eyeDistance = getEyeDistance();
    const eyeElevation = getEyeElevation();
    const eyeShape = getEyeShape();
    const faceShape = getFaceShape();
    const chin = dimpledChin();
    const doubleChin = getDoubleChin(weightType);
    const forehead = getForehead();
    const skinColour = getSkinColour({
      isFair,
      isDark,
      isMedium,
      isTan,
    });
    const hairColour = getHairColour(skinColour);
    const freckles = getFreckles(hairColour);
    const hairSize = getHairSize(gender);
    const hairType = getHairType(skinColour);
    const hipSize = gethHipSize(gender);
    const limbLength = getLimbLength(heightType);
    const limbThickness = getLimbThickness(limbLength);
    const handFeetSize = getHandFeetSize();
    const lip = getLip();
    const neck = getNeck();
    const noseSize = getNoseSize();
    const noseShape = getNoseShape(skinColour);
    const stomach = getStomach(weightType);

    Promise.resolve(() => true)
      .then(() => {
        this.setState({
          buttock,
          shoulder,
          hasDimple,
          earSize,
          earShape,
          eyeBrowShape,
          eyeBrowSize,
          eyeColour,
          eyeDistance,
          eyeElevation,
          eyeShape,
          faceShape,
          chin,
          doubleChin,
          forehead,
          skinColour,
          freckles,
          hairSize,
          hairType,
          hipSize,
          limbThickness,
          weightType,
          handFeetSize,
          lip,
          neck,
          noseSize,
          heightType,
          noseShape,
          stomach,
          height,
          weight,
          hairColour,
          limbLength,
        });
      })
      .then(() => {
        if (gender === 'Male') this.generateMaleData(age);
        else this.generateFemaleData(weightType);
      });
  };

  generateMaleData = age => {
    let beard = 'Normal';
    let moustache = 'Normal';
    if (age >= 17) {
      beard = getBeardType();
      moustache = hasMoustache();
      this.setState({
        beard,
        moustache,
      });
    }
  };

  generateFemaleData = weightType => {
    const breast = breastSize(weightType);
    this.setState({
      breast,
    });
  };
  render() {
    return (
      <View style={{ height: '100%' }}>
        <View style={{ backgroundColor: 'teal', height: 30 }} />
        <Appbar
          style={{ backgroundColor: 'teal', justifyContent: 'space-around' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Character Generator
          </Text>
        </Appbar>

        <View style={{ flexDirection: 'row', backgroundColor: '#A9DFBF' }}>
          <View style={{ flex: 1 }}>
            <Text>Gender</Text>
            <Picker
              selectedValue={this.state.gender}
              onValueChange={value => this.setState({ gender: value })}>
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Age </Text>
            <Picker
              selectedValue={this.state.age}
              onValueChange={value => this.setState({ age: value })}>
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
        <Divider style={{ backgroundColor: 'white' }} />
        <View style={{ backgroundColor: '#A9DFBF' }}>
          <Text>Colour range</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <InputCheckbox
              label="Dark"
              isActive={this.state.isDark}
              onPress={() => {
                this.setState({
                  isDark: !this.state.isDark,
                });
              }}
            />
            <InputCheckbox
              label="Tan"
              isActive={this.state.isTan}
              onPress={() => {
                this.setState({
                  isTan: !this.state.isTan,
                });
              }}
            />
            <InputCheckbox
              label="Medium"
              isActive={this.state.isMedium}
              onPress={() => {
                this.setState({
                  isMedium: !this.state.isMedium,
                });
              }}
            />
            <InputCheckbox
              label="Fair"
              isActive={this.state.isFair}
              onPress={() => {
                this.setState({
                  isFair: !this.state.isFair,
                });
              }}
            />
          </View>
        </View>
        <Divider />
        <View>
          <ScrollView style={{ marginBottom: 215, marginTop: 10 }}>
            <Row title="Body">
              {this.state.heightType}
              {this.state.weightType}
              {this.state.shoulder}
              {this.state.breast}
              {this.state.hipSize}
              {this.state.buttock}
              {this.state.neck}
              {this.state.stomach}
              {this.state.doubleChin}
              {this.state.limbLength}
              {this.state.limbThickness}
              {this.state.handFeetSize}
            </Row>
            <Row title="Weight" noFormat>
              {this.state.weight} kg.
            </Row>
            <Row title="Height" noFormat>
              {this.state.height} cm.
            </Row>
            <Row title="Eyes">
              {this.state.eyeColour} {this.state.eyeShape}
              {this.state.eyeDistance} {this.state.eyeElevation}
            </Row>
            <Card
              style={{
                flexDirection: 'row',
                padding: 8,
                elevation: 4,
                marginBottom: 20,
                backgroundColor: '#EBEDEF',
              }}>
              <Text>{this.state.skinColour}</Text>
              <Divider
                style={{ backgroundColor: 'teal', height: 4, margin: 4 }}
              />
              <Text>Complexion</Text>
            </Card>
            <Row title="Hair">
              {this.state.hairSize}
              {this.state.hairColour}
              {this.state.hairType}
            </Row>
            <Row title="Ear">
              {this.state.earSize}
              {this.state.earShape}
            </Row>
            <Row title="Nose">
              {this.state.noseSize}
              {this.state.noseShape}
            </Row>
            <Row title="Face">
              {this.state.forehead}
              {this.state.beard}
              {this.state.moustache}
              {this.state.freckles}
              {this.state.hasDimple}
              {this.state.eyeBrowSize}
              {this.state.eyeBrowShape}
              {this.state.faceShape}
              {this.state.chin}
              {this.state.lip}
            </Row>
          </ScrollView>
        </View>
        <FAB
          style={styles.fab}
          medium
          icon="refresh"
          onPress={this.generateData}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 15,
    bottom: 10,
    color: 'white',
    backgroundColor: '#E74C3C',
  },
});
export default App;
