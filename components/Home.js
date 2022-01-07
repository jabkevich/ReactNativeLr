import {Dimensions, FlatList, StyleSheet, View, Text, Button, TextInput} from "react-native";
import {Todo} from "./Todo";
import React, {useState} from "react";


import {increment} from "../src/redux/counter/counterActions";
import {useDispatch, useSelector} from "react-redux";

const Home = ({navigation}) => {


    const counter = useSelector(state => state.counter.counter);

    const [todos, setTodos] = useState([]);

    const dispatch = useDispatch();

    React.useEffect(()=> {
        setter()
    }, [])


    const setter = () =>{
        console.log('ad')
        setTodos(prev => {
            return [
                ...prev,
                {id: "3", title: "фвф"},
                {id: "4", title: "sf"}
            ]
        })
    }

    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            title: title
        }

        setTodos(prev => {
            return [
                ...prev,
                newTodo
            ]
        })
    }


    const removeTodo = (id) => {
        setTodos(prev => prev.filter(todo=> todo.id !== id))
    }
    const [value, setValue] = useState('')

    const pressHandler = () => {
        dispatch(increment());
        if(value.trim()){
            console.log(value)
            addTodo(value)
            setValue("")
        }
    }
    return (
        <View>
            <View style={styles.container}>
                {/*<AddTodo onSubmit={addTodo}/>*/}
                <View style={styles.wrapper}>
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={text  => setValue(text)}
                        autoCorrect={false}
                    />
                    <Button  title={'Добавить'} onPress={()=>{
                        pressHandler()
                    }} />
                    <Text>
                        {counter}
                    </Text>
                </View>
                <Button
                    title="Go to Detailфвs"
                    onPress={() => navigation.navigate('Details')}
                />
                {
                    todos.length > 0 &&
                    <FlatList
                        keyExtractor={(item, i) => i.toString()}
                        data={todos}
                        renderItem={({item})=> <Todo todo={item} onRemove={removeTodo}/>}
                    />
                }
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height - 70,
        // backgroundColor: '#000',
        // alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,

    },
    text: {
        color: "white",
        fontSize: 26
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",

    },
    input: {
        width: "70%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#3949ab",
    },
});



