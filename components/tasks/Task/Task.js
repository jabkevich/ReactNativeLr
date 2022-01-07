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
    ScrollView
} from "react-native";

import {useDispatch, useSelector} from "react-redux";

;
import TaskItem from "../TaskItem/TaskItem";
import TaskPoint from "../TaskPoint/TaskPoint";

import {changeDescription, setDescription} from "../../../src/redux/tasks/tasksActions";


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
    descriptionParagraph: {
        padding: 10,
        borderRadius: 5,
        borderColor: "#F0C53F",
        borderWidth: 1,
        paddingRight: 40,
        paddingBottom: 15,
        maxHeight: 200,
    },
    pencil: {
        position: "absolute",
        right: 10,
        top: 10,
        height: 20,
        width: 20,
    },
    pencilContainer: {
        position: "absolute",
        right: 10,
        top: 0,
        height: 20,
        width: 20,
    }
});

const Tasks = ({navigation, route}) => {

    const {task} = route.params

    const dispatch = useDispatch();


    const [description, setDescription] = useState(task.description)

    return (
        <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {task.title}
                </Text>
                <View style={styles.description}>
                    <Text style={styles.descriptionTitle}>
                        Описание
                    </Text>

                    <View>
                        <TextInput
                            style={styles.descriptionParagraph}
                            value={description}
                            onChangeText={text => setDescription(text)}
                            multiline={true}
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

                    {task.points.map((point, i) => (
                        <TaskPoint key={i} point={point} navigation={navigation}/>
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
