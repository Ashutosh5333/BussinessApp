import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {businessList} from "../../constants/Constdata"
import { Colors } from '@/constants/Colors'
import PopularBussinessCard from "../../components/HomeScreens/PopularBussinessCard"

export default function PopularBussiness() {
//  console.log("===businessList===",businessList)


  return (
    <View>
      <View style={{
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
      }}>
        <Text style={{
          paddingLeft: 20,
          fontSize: 20,
          fontFamily: "outfit-bold",
          display: "flex",
          justifyContent: "space-between"
        }}>PopularBussiness

        </Text>
        <Text style={{
          color: Colors.PRIMARY,
          fontFamily: "outfit-medium"
        }}>View All</Text>
      </View>

        <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index}) =>(
          <PopularBussinessCard
            business={item}
          />
           )}
        />

    </View>
  )
}