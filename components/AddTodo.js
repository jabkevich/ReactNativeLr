import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'


export const AddTodo = ({onSubmit}) => {


    const [value, setValue] = useState('')

    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value)
            setValue("")
        }
    }

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input} onChangeText={text  => setValue(text)}
                autoCorrect={false}
            />
            <Button  title={'Добавить'} onPress={()=>{
                pressHandler()
            }} />
        </View>
    )
}


const styles = StyleSheet.create({
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

})