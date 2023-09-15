import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import TextProps from './TextProps';

import MyTextComp from './MyTextComp';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class HomePage extends Component {

  state = {

    myState: 'Trang thai 1'

  }

  updateText = () => {
    if (this.state.myState == 'Trang thai 1') {
      this.setState({ myState: 'Trang thai 2' })
    } else {
      this.setState({ myState: 'Trang thai 1' })
    }

  }


  render() {

    return (
      <SafeAreaView>
        <View style={styles.container} >
          <Text style={styles.heading}>Tieu de</Text>
          <Text style={styles.text}>Doan van ban</Text>
          <Text style={styles.subTitle}>{this.state.myState}</Text>



          <Button
            onPress={this.updateText}
            title="Click me!"
            color="#841584"
          />

          <MyTextComp noidungText='Code bai 3' />

          <MyTextComp noidungText='Code bai 4' />

          <View style={styles.horizontalView}>

            <View style={[styles.redbox , styles.blackbox]} />
            <View style={styles.bluebox} />
            <View style={styles.blackbox} />
          </View>


          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    );
  }

}


const styles = StyleSheet.create({
  horizontalView: {
    flexDirection: 'row',
    marginTop: 20
  },
  container: {
    padding: 10,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redbox: {
    flex: 1,
    height: 100,
    backgroundColor: 'red'
  },
  bluebox: {
    flex: 2,
    height: 100,
    backgroundColor: 'blue'
  },
  blackbox: {
    flex: 1,
    height: 100,
    backgroundColor: 'black'
  },
  heading: {
    color: '#ffffff',
    fontSize: 60
  },
  text: {
    fontSize: 40
  },
  subTitle: {
    fontSize: 30,
    color: '#dd0000'
  }
});


export default HomePage;

