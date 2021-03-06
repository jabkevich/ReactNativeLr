import React, {useState, useEffect} from "react";
import {Dimensions, FlatList, StyleSheet, View, Text, Button, TextInput, Pressable, Image} from "react-native";

import {useDispatch, useSelector} from "react-redux";;
import TaskItem from "../TaskItem/TaskItem";
import {addTask, changeDescription} from "../../../src/redux/tasks/tasksActions";
import Add from "../../elements/Add";


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
    },
    addendum: {

        borderRadius: 5,
        borderColor: "#F0C53F",
        borderWidth: 1,
        maxHeight: 200,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    descriptionTitle: {
        padding: 20,
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 10
    },
    addendumParagraph: {
        padding: 10,
        width: "100%"
    },
    pencilContainer: {
        height: '100%',
        width: "10%",
        alignItems: "center",
        justifyContent: "center"
    },
    pencil: {
        height: 20,
        width: 20,
    },
});

const Tasks = ({navigation}) => {

    const tasks = useSelector(state => state.tasks.tasks);

    const dispatch = useDispatch();


    const [title, setTitle] = useState("");

    return (
        <View style = {styles.container}>

            <Add addEL={addTask} icon={()=>require("../../../assets/add.png")} />

            {
                tasks.length > 0 &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    keyExtractor={(item, i) => i.toString()}
                    data={tasks}
                    renderItem={({item, index})=> <TaskItem task={item} navigation={navigation} i={index} />}
                />
            }
        </View>
    )
}

export default Tasks;





// Dimensions.get('window').height - 70
