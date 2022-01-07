import React, {useState, useEffect} from "react";
import {Dimensions, FlatList, StyleSheet, View, Text, Button, TextInput} from "react-native";

import {useDispatch, useSelector} from "react-redux";;
import TaskItem from "../TaskItem/TaskItem";


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
        // backgroundColor: "#1faee9"
    },
    list: {
        height: "100%",


    }
});

const Tasks = ({navigation}) => {

    const tasks = useSelector(state => state.tasks.tasks);

    return (
        <View style = {styles.container}>
            {
                tasks.length > 0 &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    keyExtractor={(item, i) => i.toString()}
                    data={tasks}
                    renderItem={({item})=> <TaskItem task={item} navigation={navigation} />}
                />
            }
        </View>
    )
}

export default Tasks;





// Dimensions.get('window').height - 70
