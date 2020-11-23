import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image, ScrollView, TextInput, FlatList,
    Keyboard 
} from 'react-native';
import {Overlay } from 'react-native-elements';
import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Constants from 'expo-constants';
import { Avatar, Accessory, Card, ListItem } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getEtudiantById} from '../Service/EtudiantService';
const users = [
    {
        name: 'brynn brynn',
        icon: "user"
    },
    {
        name: 'test@test.com',
        icon: "envelope"
    },
    {
        name: '25772626',
        icon: "phone"
    }
]


class Profile extends Component {
   // state = {};
  //    const [visible, setVisible] = useState(false);
constructor(props)
{
    super(props)
    this.state={
        e:{
            nom:'',
            num_tel:'',
            email:''
        },
        visible: false
    }
getEtudiantById("5fbacccf0e9e0f3a956217b1").then((response)=>
{
    console.log( response.data);
    this.setState({e: response.data});
})
console.log(this.state.e);
}



    keyExtractor = (item, index) => index.toString();
    edit(){
         this.setState({visible: true})
       // alert("test");
    }
    renderItem = ({ item }) => (
        <Card containerStyle={{ padding: 0 }} >
            {
                <ListItem>
                    <Icon name={item.icon} style={{fontSize:30}}/>
                    <ListItem.Content>
                        <ListItem.Title style={{fontSize:20,fontWeight:"bold"}}>{item.name}</ListItem.Title>
                    </ListItem.Content>
                         <Icon name="edit" style={{fontSize:20}} onPress={() => {this.edit()}}/>
                </ListItem> 
            }
        </Card>



    )


    render() {


        return (

            <View style={styles.container}>
 
                <View style={styles.header}>
                </View>
                <View style={{
                 
                    backgroundColor: 'white',
                    height: 250,
                    padding: 20
                }}>
                

<View style={{
                    flexDirection: 'row',
               
                }}>
                    <Avatar
                        size="xlarge"
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        title="CR"
                        onPress={() => console.log("Works!")}
                    >

                    </Avatar>


                </View>

                
<View style={{margin:20}}>
                  <Button style={{width:50}}
  icon={
    <Icon
      name="cog"
      size={15}
      color="white"
    />
  }
/>


                </View>


                </View>
                



                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={users}
                    renderItem={this.renderItem}
                />




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
        height: 50,
        backgroundColor: '#253575',
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    btn: {
       margin: 400
    }
})

export default Profile