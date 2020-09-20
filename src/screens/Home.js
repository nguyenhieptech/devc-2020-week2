import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts'

const Home = (props) => {
  const [popularSelected, setPopularSelected] = useState(true);

  const onTabPressed = () => {
    setPopularSelected(!popularSelected);
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: "100%",
        backgroundColor: "#044244"
      }}>

      <View style={{
        height: 260,
        width: "100%",
        paddingHorizontal: 35
      }}>

        <View style={{
          flexDirection: "row",
          width: "100%",
          paddingTop: 40,
          alignItems: "center"
        }}>

          <View style={{
            width:"50%"
          }}>
            <Image source={require('../images/Untitled.png')}
              style={{
                width: 20,
                height: 20
              }}/> 
          </View>

          <View style={{
            width: "50%",
            alignItems: "flex-end",
          }}>
            <Icon name="dots-two-vertical"
              size={22}
              color="#d2d2d2"
              style={{
                marginRight: -7,
                marginTop: 7
              }}/>
          </View>

        </View>

      <Text style={{
        fontFamily: "Bold",
        fontSize: 25,
        color: "#FFF",
        paddingVertical: 25
      }}>Find Hiep's Photos</Text>

      {/* BEGIN Search Bar */}
      <View style={{
        flexDirection: "row",
        borderColor: "#9ca1a2",
        borderRadius: 20,
        borderWidth: 0.2,
        paddingVertical: 5,
        alignItems: "center"
      }}>
        <TextInput
          placeholder="search for superstar Hiep's photos..."
          style={{
            paddingHorizontal: 20,
            fontFamily: "Medium",
            fontSize: 11,
            width: "90%",
            color: "#9ca1a2"
          }}/>
        <Icon
          name="magnifying-glass"
          size={15}
          color="#9ca1a2"/>
      </View>
      {/* END Search Bar */}
      </View>

      <View style={{
        backgroundColor: "#FFF",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: 1000,
        paddingHorizontal: 35
      }}>
        <View style={{
          flexDirection: "row",
          paddingTop: 20
        }}>
          <TouchableOpacity
            onPress={onTabPressed}
            style={{
              borderBottomColor: popularSelected ? "#044244" : "#FFF",
              borderBottomWidth: 4,
              paddingVertical: 6
            }}
          >
            <Text style={{
              fontFamily: "Bold",
              color: popularSelected ? "#044244" : "#9ca1a2"
            }}>MOST POPULAR</Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={onTabPressed}
            style={{
              borderBottomColor: popularSelected ? "#FFF" : "#044244",
              borderBottomWidth: 4,
              paddingVertical: 6,
              marginLeft: 30
            }}
          >
            <Text style={{
              fontFamily: "Bold",
              color: popularSelected ? "#9ca1a2" : "#044244"
            }}>RECENT</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection:"row"
        }}>
          <Posts
            onPress={() => props.navigation.navigate('Detail')}
            name="Hiep Nguyen"
            profile={require('../images/guitar-va-nui.jpg')}
            photo={require('../images/nhom.jpg')}
            minute='4'
          />

          <View style={{
            height: 160,
            backgroundColor: "#3c636c",
            width: 20,
            marginLeft: 20,
            marginTop: 120,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20
          }}>

          </View>

        </View>


        <View style={{
          flexDirection:"row"
        }}>
          <View style={{
            height: 160,
            backgroundColor: "#3c636c",
            width: 20,
            marginLeft: -40,
            marginRight: 20,
            marginTop: 120,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20
          }}/>

          <Posts
            onPress={() => props.navigation.navigate('Detail')}
            name="Hiep Nguyen"
            profile={require('../images/guitar-va-nui.jpg')}
            photo={require('../images/goc-nghieng.jpg')}
            minute='6'
          />
        </View>

        <View style={{
          flexDirection: "row"
        }}>
          <Posts
            onPress={() => props.navigation.navigate('Detail')}
            name="Hiep Nguyen"
            profile={require('../images/guitar-va-nui.jpg')}
            photo={require('../images/keyboard.jpg')}
            minute='8'
          />

          <View style={{
            height: 160,
            backgroundColor: "#3c636c",
            width: 20,
            marginLeft: 20,
            marginTop: 120,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20
          }}/>
        </View>

      </View>

    </ScrollView>
  )
}

export default Home;