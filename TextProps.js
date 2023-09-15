
import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"

const TextProps = (props) => {

    return (<View>
        <Text style={StyleSheet.create({

            fontSize: 50

        })} onPress={props.updateState}>
            {props.myState}
        </Text>
    </View>);
}

export default TextProps