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


import {addTask, completeTask, removeTask} from "../../../src/redux/tasks/tasksActions";
import {useDispatch} from "react-redux";

const TaskItem = ({task, navigation, i}) => {


    const dispatch = useDispatch();
    return (
        <View
            style={styles.item}
        >
            <View style={styles.leftSide}>
                <TouchableOpacity
                    style={[styles.mark, task.complete?styles.markCompleted:null]}
                    onPress={()=>{dispatch(completeTask(task.id))}}
                />

                <TouchableOpacity
                    activeOpacity = {0.7}
                    onPress={()=>{navigation.navigate('Task', { index: i})}}
                >
                    <Text
                        ellipsizeMode='tail' numberOfLines={1}
                        style={styles.text}>
                        {task.title}
                    </Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity
                onLongPress={()=> {
                    dispatch(removeTask(task.id))
                    Vibration.vibrate()
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
    leftSide: {
        flexDirection: "row",
        alignItems: "center"
    },
    mark: {
        borderColor: "grey",
        borderWidth: 1,
        width: 20,
        height: 20,
        marginLeft: 20,
        borderRadius: 2,
    },
    markCompleted: {
        borderColor: "#abe233",
      backgroundColor: "#abe233"
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
