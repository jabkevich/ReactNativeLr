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


import {addTask, completePoint, completeTask, removeTask} from "../../../src/redux/tasks/tasksActions";
import {useDispatch} from "react-redux";

const TaskPoint = ({task, point, navigation}) => {


    const dispatch = useDispatch();
    return (
        <View
            style={styles.item}>
                <Text
                    ellipsizeMode='tail'
                    numberOfLines={1}
                    style={styles.text}>
                    {point.title}
                </Text>
            <TouchableOpacity
                style={[styles.mark, point.complete?styles.markCompleted:null]}
                onPress={()=>{dispatch(completePoint(task, point.id))}}
            />
        </View >
    )
}


export default TaskPoint;


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
    },
    mark: {
        borderColor: "grey",
        borderWidth: 1,
        width: 20,
        height: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 2,
    },
    markCompleted: {
        borderColor: "#abe233",
        backgroundColor: "#abe233"
    },
});
