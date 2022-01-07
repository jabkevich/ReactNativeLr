import React, {useState, useEffect} from "react";
import {
    TouchableOpacity,
    Dimensions,
    FlatList,
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    Image,
    Vibration
} from "react-native";


import {addTask, removeTask} from "../../../src/redux/tasks/tasksActions";
import {useDispatch} from "react-redux";

const TaskItem = ({task, navigation}) => {


    const dispatch = useDispatch();
    return (
        <View
            style={styles.item}>
            <TouchableOpacity
                activeOpacity = {0.7}
                onPress={()=>{navigation.navigate('Task', { task: task})}
                }
            >
                <Text
                    ellipsizeMode='tail' numberOfLines={1}
                    style={styles.text}>
                    {task.title}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onLongPress={()=> {
                    dispatch(removeTask(task.id))
                    console.log("onRemove")
                    Vibration.vibrate()
                    console.log("remove")
                }}
            >
            <Image
                style={styles.trash}
                source={require('../../../assets/trash.png')}
                />
            </TouchableOpacity>
        </View >
    )
}


export default TaskItem;


const styles = StyleSheet.create({
    item: {
        // backgroundColor: "#7fc7ff",
        borderWidth: 1,
        borderColor: "#ff7816",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        marginBottom: 5,
    },
    text: {
        color: "#ff7816",
        fontWeight: "bold",
        padding: 20,
        maxWidth: 250,

    },
    trash: {
        margin: 20,
        height: 20,
        width: 20
    }
});
