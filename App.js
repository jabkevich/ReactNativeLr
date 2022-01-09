import React, {useEffect, useState} from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Provider, useDispatch} from "react-redux";
import store from "./src/redux/store";

import Progress from "./components/progress/Progress/Progress";
import ToDay from "./components/ToDay/ToDay";
import TodoNavigation from "./components/tasks/TodoNavigation/TodoNavigation";
import Themes from "./components/settings/Themes/Themes";
import {loadTasks} from "./src/redux/tasks/tasksActions";
import {loadTodayTasks} from "./src/redux/today/todayActions";


const Tab = createBottomTabNavigator();


const Navigation = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadTasks())
        dispatch(loadTodayTasks())
    }, [])

    return (
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
    )
}

function App() {

    return (
        <Provider store={store}>
            <Navigation/>
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