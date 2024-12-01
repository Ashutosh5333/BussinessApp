import { View, Text, Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function CategoryItem({category,key,onCategoryPress}) {

  return (
    <TouchableOpacity onPress={() =>onCategoryPress(category)}>
    <View style={{ 
         padding:10,
         backgroundColor:Colors.ICON_BG,
         borderRadius:99,
         marginRight:15
     }}>
    <Image
      source={{ uri: category.icon }}
      style={{ width: 40, height: 40,
        
        marginRight: 15, margin:"auto", alignItems:"center" }}
    />
    
  </View>
  <Text style={{ fontSize: 12,
     fontWeight: "outfit-medium",
        textAlign:"center",
        marginTop:10
     }}>{category.name}</Text>

  </TouchableOpacity>
  )
}