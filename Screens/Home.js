import React, { useState } from 'react'
import {
  View, StyleSheet, Text, Image, ScrollView, TextInput, FlatList, SafeAreaView,
  Keyboard,
  TouchableOpacity,
  Animated,
  Dimensions,
  AsyncStorage
} from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import Item from '../components/Item';
const listItems = ['Development', 'Business', 'IT & Software', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'LifeStyle', 'Photography', 'Health & Fitness', 'Teacher Training', 'Music']
const listItems2 = [{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "Office Productivity", Description: "Office Productivity" },
{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "Photography", Description: "LifeStyle" },
{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "Marketing", Description: "LifeStyle" },
{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "Design", Description: "LifeStyle" },
{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "Personal Development", Description: "LifeStyle" },
{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "Development", Description: "LifeStyle" },
{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "Health & Fitness", Description: "LifeStyle" },
{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "LifeStyle", Description: "LifeStyle" },
{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "LifeStyle", Description: "LifeStyle" },
{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "LifeStyle", Description: "LifeStyle" },
{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "LifeStyle", Description: "LifeStyle" },
{ image: "https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1-768x513.jpg", Titre: "LifeStyle", Description: "LifeStyle" }
]
const { width, heigth } = Dimensions.get('window')
const Home = () => {
  const[onRefreshAction,setonRefreshAction]=useState(false);
  const scrollX = new Animated.Value(0)
  let position = Animated.divide(scrollX, width)
  function renderHeader() {
    return (
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon
            name="sign-in"
            color='white'
            size={30}
            style={{
              height: 50,
              width: 50,
              marginTop: 20,
              left:20,
              alignSelf: "flex-end"
            }}
          />
        </TouchableOpacity>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          width: "100%"
        }}>

          <View style={{ width: "50%" }}>
            <Text style={{
              fontSize: 28,
              color: "#FFF",
              fontWeight: "bold"
            }}>Hi Uishopy</Text>
          </View>
         
        </View>
        <LinearGradient
          colors={["rgba(37,53,117,0.4)", "transparent"]}
          style={{
            right: 20,
            width: "120%",
            height: 100,
            marginTop: 20
          }}
        >


        </LinearGradient>

      </View>


    )
  }








  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <View style={{
        backgroundColor: "#FFF",
        paddingVertical: 8,
        left: -20,
        width: "90%",
        paddingHorizontal: 20,
        marginHorizontal: 40,
        borderRadius: 15,
        top: -30,
        flexDirection: "row",
        alignItems: "center"
      }}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="black"
          style={{
            fontWeight: "bold",
            fontSize: 18,
            height: 40,
            width: 300
          }}
        />
        <TouchableOpacity >
          <Icon
            name="search"
            size={30}
            color='black'
            onPress={() => console.log("ss")}
          />
        </TouchableOpacity>

      </View>
      <View style={{
        top: -20,
        width: "100%",

      }}>
        <FlatList
        data={listItems2}
          keyExtractor={(item, index) => 'key' + index}
          horizontal={false}
          pagingEnabled
          scrollEnabled
          refreshing={onRefreshAction}
          onRefresh={()=>{setonRefreshAction(true)}}
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <Item item={item} />
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }]
          )}
        />
        </View>
       

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  header: {
    height: 170,
    width: "100%",
    backgroundColor: '#253575',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20
  }
})

export default Home
