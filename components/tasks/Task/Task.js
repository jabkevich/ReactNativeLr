import React, {useState, useEffect} from "react";
import {
    Dimensions,
    FlatList,
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    Image,
    Keyboard,
    Pressable,
    TouchableWithoutFeedback,
    ScrollView, TouchableOpacity
} from "react-native";

import {useDispatch, useSelector} from "react-redux";

;
import TaskItem from "../TaskItem/TaskItem";
import TaskPoint from "../TaskPoint/TaskPoint";

import {
    addPoint,
    addTask,
    changeDescription,
    completeTask,
    setDescription
} from "../../../src/redux/tasks/tasksActions";
import Add from "../../elements/Add";


const styles = StyleSheet.create({
    container: {

        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        // paddingVertical: 20,
        // backgroundColor: "#1faee9"
    },
    list: {
        // flex: 1
        width: "100%",
        height: "100%",
        flex: 1,
    },
    title: {
        padding: 20,
        fontWeight: "bold",
        fontSize: 20
    },
    description: {
        marginBottom: 20
    },
    descriptionTitle: {
        padding: 20,
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 10
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
    inputField:{
        borderRadius: 5,
        borderColor: "#F0C53F",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    input: {
        maxHeight: 200,
        width: "90%",
        padding: 10,

    },

});

const Tasks = ({navigation, route}) => {

    const {index} = route.params

    const dispatch = useDispatch();

    const tasks = useSelector(state => state.tasks.tasks);
    const [task, setTask] = useState(tasks[index])
    const [description, setDescription] = useState(task.description)


    useEffect(()=>{
        setTask(tasks[index])
        setDescription(tasks[index].description)
    }, [tasks])

    if(!task){
        return <></>
    }

    return (
        <ScrollView>
        <TouchableWithoutFeedback
            // onPress={Keyboard.dismiss}
            accessible={false}
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    {task.title}
                </Text>
                <View style={styles.description}>
                    <Text style={styles.descriptionTitle}>
                        Описание
                    </Text>

                    <View style={styles.inputField}>

                        <TextInput
                            style={styles.input}
                            value={description}
                            onChangeText={text => setDescription(text)}
                            multiline={true}
                            numberOfLines={3}
                        />
                        <Pressable
                            style={styles.pencilContainer}
                            onPress={() => {
                                dispatch(changeDescription(task.id, description))
                            }}
                        >
                            <Image
                                style={styles.pencil}
                                source={require('../../../assets/pencil.png')}
                            />
                        </Pressable>
                    </View>
                </View>
                <Add addEL={(title)=>{return addPoint(title, task.id)}} icon={()=>require("../../../assets/add.png")} />



                {task.points.map((point, i) => (
                        <TaskPoint key={i} point={point} navigation={navigation} taskId={task.id}/>
                    ))}

                    {/*keyExtractor={(item, i) => i.toString()}*/}
                    {/*data={task.points}*/}
                    {/*renderItem={({item}) => <TaskPoint point={item} navigation={navigation}/>}*/}
            </View>
        </TouchableWithoutFeedback>
        </ScrollView>
    )
}

export default Tasks;
