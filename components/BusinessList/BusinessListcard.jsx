import { View, Text, Image } from 'react-native'
import React from 'react'




export default function BusinessListcard({ business }) {


  return (
    <View
      style={{
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "#fff"
      }}>

      <Image
        source={{ uri: business.imageUrl }}
        style={{
          width: 130,
          height: 120,
          borderRadius: 15
        }}
      />

    </View>
  )
}