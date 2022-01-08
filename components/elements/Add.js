import React, {useState, useEffect} from "react";
import {Dimensions, FlatList, StyleSheet, View, Text, Button, TextInput, Pressable, Image} from "react-native";

import {useDispatch, useSelector} from "react-redux";;


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

const Add = ({addEL, icon}) => {


    const dispatch = useDispatch();


    const [title, setTitle] = useState("");

    return (
        <View style={styles.addendum}>
            <TextInput
                style={styles.addendumParagraph}
                value={title}
                onChangeText={text => setTitle(text)}
                multiline={true}
            />
            <Pressable
                style={styles.pencilContainer}
                onPress={() => {
                    if(title !== "")
                        dispatch(addEL(title))
                }}
            >
                <Image
                    style={styles.pencil}
                    source={icon()}
                />
            </Pressable>
        </View>
    )
}

export default Add;