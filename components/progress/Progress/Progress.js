import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {useSelector} from "react-redux";


const Progress = ({navigation}) => {
    const percentageOfCompletedTasks = useSelector(state => state.tasks.percentageOfCompletedTasks);
    const percentageOfCompletedTasksToday = useSelector(state => state.today.percentageOfCompletedTasksToday);




    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <Text style={styles.typeOfProgress}>
                    Процент выполненных задач
                </Text>
                <View style={styles.progressTasks}>
                    <View style={[styles.progressLine, {width: `${percentageOfCompletedTasks}%`}]}/>
                </View>
            </View>

            <View style={styles.progressContainer}>
                <Text style={styles.typeOfProgress}>
                    Процент выполненных задач на сегодня
                </Text>
                <View style={styles.progressTasks}>
                    <View style={[styles.progressLine, {width: `${percentageOfCompletedTasksToday}%`}]}/>
                </View>
            </View>
        </View>
    )
}

export default Progress;



const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "100%",
        width: "100%",
        paddingHorizontal: 30,
        paddingVertical: 20,
        // backgroundColor: "#1faee9"
    },
    progressTasks: {
        width: "100%",
        borderWidth: 1,
        borderColor: "green",
        height: 50,
        borderRadius: 5,
        padding: 2
    },
    progressLine: {
        height: "100%",
        backgroundColor: "green",
        borderRadius: 5,
    },
    progressContainer: {
        marginBottom: 20
    },
    typeOfProgress: {
        fontSize: 20,
        marginBottom: 20
    }
});
