import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Image, ScrollView, TextInput, FlatList,
  Keyboard
} from 'react-native';
import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Constants from 'expo-constants';
import {listeFormations,listeFormationsBySearchMot} from '../Service/FormationService';
import Icon from 'react-native-vector-icons/Ionicons'

const listItems = ['Development', 'Business', 'IT & Software', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'LifeStyle', 'Photography', 'Health & Fitness', 'Teacher Training', 'Music']


class Home extends Component {


constructor(props)
{
  super(props);
this.state= {
  searchBarFocused: false,
 value:'',
 listeDesFormations:[{}]
}

listeFormations().then((response) => {
          this.setState({listeDesFormations: response.data});
      });

console.log(this.state.listeDesFormations);
}







  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false })
  }
  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)


  }

onChangeText(text)
{
if(text=="")
{
listeFormations().then((response) => {
          this.setState({listeDesFormations: response.data});
      });
}
else
{
listeFormationsBySearchMot(text).then((response) => {
          this.setState({listeDesFormations: response.data});
      });
}


}

  render() {


    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{
            height: 45,
            backgroundColor: 'white',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center', borderRadius: 10
          }}>
            <Icon name="ios-search" style={{ fontSize: 24, padding: 5 }}></Icon>
            <TextInput placeholder="Search" style={{
              fontSize: 20,
              marginLeft: 5
            }} 
            
               onChangeText={text => this.onChangeText(text)}
             />
          </View>

        </View>
        <View>
          <FlatList
            horizontal={true}
            style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.3)' : 'white' }}
            data={listItems}
            renderItem={({ item }) =>
              <Text style={{
                padding: 10,
                fontSize: 14,
                backgroundColor: '#253575',
                borderRadius: 50,
                color: 'white',
                margin: 10
              }}>{item}</Text>}

            keyExtractor={(item, index) => index.toString()}
          />
        </View>


        <ScrollView style={{ backgroundColor: 'white' }}>
          <FlatList
      
            style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.3)' : 'white' }}
            data={this.state.listeDesFormations}
            renderItem={({ item }) =>

<View style={{flex:1,flexDirection:'row'}}>
    <Image source={{uri:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}} style={{width:100,height:100}}/>
    <View style={{flex:1,justifyContent:'center'}}>
     <Text>
     {item.titre}
     </Text>
    </View>
    </View>


            }

            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>

    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  header: {
    height: 100,
    backgroundColor: '#253575',
    justifyContent: 'center',
    paddingHorizontal: 5
  }
})

export default Home