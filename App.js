import React, {useEffect, useState} from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Provider} from "react-redux";
import store from "./src/redux/store";

import Progress from "./components/progress/Progress/Progress";
import ToDay from "./components/ToDay/ToDay";
import TodoNavigation from "./components/tasks/TodoNavigation/TodoNavigation";
import Themes from "./components/settings/Themes/Themes";

function HomeScreen({ navigation, route }) {

    const { alo, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{alo}</Text>
            <Button
                title="Go to Detailфвs"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}


function Test({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>test</Text>
        </View>
    );
}

function DetailsScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detailsadad Screen</Text>
            <Button
                title="Go t"
                onPress={() => navigation.navigate('Test')}
            />
        </View>
    );
}



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Todo({navigation}) {
    return (

            <Stack.Navigator initialRouteName="Task">
                <Stack.Screen
                    name="Task"
                    component={DetailsScreen}
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen
                    name="Test"
                    component={Test}
                    options={{
                        headerShown:false
                    }}
                />
            </Stack.Navigator>

    );
}




function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Progress">
                    <Tab.Screen
                        name="Progress"
                        component={Progress}/>
                    <Tab.Screen
                        name="To day"
                        component={ToDay}/>

                    <Tab.Screen
                        name="Tasks"
                        component={TodoNavigation}
                    />
                    <Tab.Screen
                        name="Themes"
                        component={Themes}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;


const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between"
    },
    navBarBottom: {
        width: "100%",
        height: "50px",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})


// options={{
//     title: "News Detail",
//     headerShown:false
// }}


/*
* progress
* ToDay => List<Todo>
* TodoNavigation => List<Todo> -> Details
* Settings
* */