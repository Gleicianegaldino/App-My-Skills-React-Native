import React, { useState } from 'react';

import {  View, 
          Text, 
          StyleSheet, 
          TextInput, 
          Platform, 
        } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


export function Home() {

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);


  function handleAddNewSkill(){
      setMySkills(oldState => [...oldState, newSkill]);

  }

  return(
   
      <view style = { styles.container }>
          <text style = { styles.title }>Welcome, Gleiciane</text>

            <TextInput 
                style = { styles.input }
                placeholder = 'New Skill'
                placeholderTextColor = '555'
                onChangeText={setNewSkill}
            />

            <Button onPress = {handleAddNewSkill} />


            <Text style = {[ styles.title, { marginVertical: 50}]}>
              My Skills
            </Text>

            {
              mySkills.map( skill => (
              
                <SkillCard skill = { skill } />
            ))
            }
          

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


});