import React, {useState, useEffect} from "react";
import {TouchableWithoutFeedback, Dimensions, FlatList, StyleSheet, View, Text, Button, TextInput} from "react-native";
import {useSelector} from "react-redux";
import TaskPoint from "../tasks/TaskPoint/TaskPoint";
import TaskToday from "./TaskToday";
import Add from "../elements/Add";
import {addTask} from "../../src/redux/tasks/tasksActions";
import {addTodayTask} from "../../src/redux/today/todayActions";


const ToDay = ({navigation}) => {
    const todayTasks = useSelector(state => state.today.todayTasks);


    return (
        <TouchableWithoutFeedback
            // onPress={Keyboard.dismiss}
            accessible={false}
        >
            <View style={styles.container}>
                <Add addEL={addTodayTask}  icon={()=>require("../../assets/add.png")} />

                <View>
                    {todayTasks.map((task, i) => (
                        <TaskToday key={i} task={task} navigation={navigation}/>
                    ))}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ToDay;



const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        flexDirection: "column",
        height: "100%",
        width: "100%",
        paddingHorizontal: 30,
        // paddingVertical: 20,
        // backgroundColor: "#1faee9"
    },
})