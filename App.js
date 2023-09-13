import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
      <View style={styles.container} >
        <Text style={styles.heading}>Tieu de</Text>
        <Text style={styles.text}>Doan van ban</Text>
        <Text style={styles.subTitle}>{this.state.myState}</Text>

        <Button
          onPress={this.updateText}
          title="Click me!"
          color="#841584"
        />

        <StatusBar style="auto" />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
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

