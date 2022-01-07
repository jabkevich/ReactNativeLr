import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Vibration} from 'react-native'





export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity
            style={styles.todo}

            onLongPress={()=> {
                console.log(onRemove)
                Vibration.vibrate()
                onRemove(todo.id)
            }}
        >
        <Text>
            {todo.title}
        </Text>
    </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
    }
})