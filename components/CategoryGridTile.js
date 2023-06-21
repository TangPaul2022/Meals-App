import { Pressable, StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const CategoryGridTile = ({title, color, onPressCat}) => {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]} >
      <Pressable 
        android_ripple={{color: '#fff'}} 
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPressCat}
      >
        <View style={styles.innerContainer} >
            <Text style={styles.title} >{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        //marginTop: 10,
        height: 150,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
      flex: 1
    },
    buttonPressed: {
      opacity: 0.5,
    },
    innerContainer: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      textAlign: 'center'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 15
    },
});