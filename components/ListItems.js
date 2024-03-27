import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { windowWith } from '../utils/Diamensions'

export default function ListItems({
  photo, 
  title, 
  subTitle,
  isFree,
  Price
}) {
  return (
    <View style={{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:20,
    }}>
      <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
        <Image source={photo} 
        style={{width:55,height:55,borderRadius:10,marginRight:8}}
        />
        <View style={{width:windowWith-220}}>
          <Text style={{
            fontSize:14,
            color:'#333'
          }} >{subTitle}</Text>
          <Text 
          numberOfLines={1}
          style={{
            fontSize:14,
            color:'#333',
            textTransform:'uppercase'
          }}>{title}</Text>
        </View>
      </View>

      <TouchableOpacity style={{
        backgroundColor:'#0aada8',
        width:100,
        borderRadius:10,
        padding:10,
        alignItems:'center'
      }}>
        <Text style={{
          color:'#fff',
          fontSize:14,
          alignItems:'center',
        }}>
          {isFree == 'Yes' && 'Play'}
          {isFree == 'No' && Price}
        </Text>
      </TouchableOpacity>
    </View>
  )
}