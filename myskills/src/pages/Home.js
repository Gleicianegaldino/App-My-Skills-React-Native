import React from 'react';

import {  View, 
          Text, 
          StyleSheet, 
          TextInput, 
          Platform,
          TouchableOpacity 
        } from 'react-native';


export function Home() {

  return(
   
      <view style = { styles.container }>
        <text style = { styles.title }>Welcome, Gleiciane</text>

        <TextInput 
            style = { styles.input }
            placeholder = 'New Skill'
            placeholderTextColor = '555'

        />

        <TouchableOpacity style = { styles.button } activeOpacity={.7}>
            <text style={ styles.buttonText }>Add</text>
        </TouchableOpacity>

        <Text style = {[ styles.title, { marginTop: 50 }]}>
          My Skills
        </Text>


      </view>
    
  )
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30

  },
  
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },

  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  }

});