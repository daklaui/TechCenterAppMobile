import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, ScrollView,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import COLORS from '../../consts/colors';
const { width, height } = Dimensions.get('window')
const DetaileFormation = ({navigation, route}) => {
  const plant = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}>
          <ScrollView>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} color='white' />
        <Icon name="shopping-cart" size={28} color='white'/>
      </View>
      <View style={style.imageContainer}>
        <Image source=
        {{uri:"https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg"}} 
        style={{ 
            width: width - 10,
            height: height / 3,
            borderRadius: 10
        }} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={style.line} />
        
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{"plant.name"}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: "white",
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              ${"15"}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10,height:250}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {"plant.about"}
          </Text>
     
            

            <View style={style.buyBtn}>
              <Text
                style={{color:"white", fontSize: 18, fontWeight: 'bold'}}>
                register
              </Text>
            </View>
         
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 40,
    height:70,
    flexDirection: 'row',
    backgroundColor: '#253575',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: "#ecf0f1",
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: "#ecf0f1",
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: "100%",
    height: 50,
    top:130,
    backgroundColor:"#253575",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,

    
  },
  priceTag: {
    backgroundColor: "#253575",
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetaileFormation;