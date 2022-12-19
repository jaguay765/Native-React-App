import { ScrollView, StyleSheet, TabBarIOSItem, Text, View } from 'react-native';
import React from 'react'
import CarouselCards from './CarouselCards'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native'

export default function App() {
  return(
    <NavigationContainer>
      <Mytabs/>
    </NavigationContainer>
  )
}

function Mytabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Cart" component={HomeScreen} />
    </Tab.Navigator>
  )
}

const Tab = createBottomTabNavigator();


const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={{width: '100%', height:150, backgroundColor: '#FF0000', alignItems: 'center',
      justifyContent: 'center', fontfamily: "Audiowide"}}>
      <Text style={styles.headertext}>Carbase</Text>
      </View>
      <View>
      <CarouselCards></CarouselCards>
      </View>
      <View style={{width: '100%', height:80, backgroundColor: '#000080', alignItems: 'center',
      justifyContent: 'center', fontfamily: "Audiowide"}}>
      <Text style={styles.headertext2}>Click to shop</Text>
      </View>
      <View style={{width: '100%', height:'100%', backgroundColor: '#000080', alignItems: 'center',
      justifyContent: 'center', fontfamily: "Audiowide"}}></View>
    </ScrollView>
  );
}

const Menu = () => {
  return (
    <ScrollView>
      <View style={{width: '100%', height:150, backgroundColor: '#FF0000', alignItems: 'center',
      justifyContent: 'center', fontfamily: "Audiowide"}}>
      <Text style={styles.headertext}>Carbase</Text>
      </View>
      <View style={{width: '100%', height:80, backgroundColor: '#000080', alignItems: 'center',
      justifyContent: 'center', fontfamily: "Audiowide"}}>
      </View>
      <View style={{width: '100%', height:'200%', backgroundColor: '#000080', alignItems: 'center',
      justifyContent: 'center', fontfamily: "Audiowide"}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'#FFFFFF',
    backgroundColor: '#000080',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    color:'#FFFFFF',
    backgroundColor: '#000080',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container3: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },

  headertext: {
    color: '#FFFFFF',
    fontSize: 80,
    fontfamily: "Audiowide",
    fontWeight: "200"
  },
  headertext2: {
    color: '#FFFFFF',
    fontSize: 40,
    fontfamily: "Audiowide",
    fontWeight: "100"
  },
});
