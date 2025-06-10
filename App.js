import { StatusBar } from "react-native-web"
import { StyleSheet, Text, View } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icon/Ionicons';

function HomeScreen(){
    return (
        <View style={styles.container}>
            <Text>Home Screenn </Text>
        </View>
    )
}

function NewScreen(){
    return (
        <View style={styles.container}>
            <Text>New Screen </Text>
        </View>
    )
}

function SettingsScreen(){
    return (
        <View style={styles.container}>
            <Text>Settings Screen </Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route})=>({
                    tabBarIcon: ({ focused, color, size }) =>{
                        let iconName;

                        if (route.name == 'Home') {
                            iconName = focused? 'home': 'home-outline'
                        } else if (route.name === 'New '){
                            iconName = focused? 'car': 'car-outline'
                        } else if (route.name === 'Settings') {
                            iconName = focused? 'settings' : 'settings-outline'
                        }

                        return <Icon name={iconName} size={size} color={color}/>
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray'
                }}
                >

            <Tab.Screen name= "Home" component ={HomeScreen}/>
            <Tab.Screen name= "New" component ={NewScreen}/>
            <Tab.Screen name= "Home" component ={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        felx: 1,
        backgroundColor : '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})