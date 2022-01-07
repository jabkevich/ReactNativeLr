import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


import Tasks from "../Tasks/Tasks";
import Task from "../Task/Task";

const Stack = createNativeStackNavigator();

function TodoNavigation({navigation}) {
    return (
        <Stack.Navigator initialRouteName="Tasks">
            <Stack.Screen
                name="Tasks"
                component={Tasks}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="Task"
                component={Task}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>

    );
}


export default TodoNavigation;