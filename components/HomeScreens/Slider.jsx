import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
// import {db} from "../../configs/FirebaseConfig"
// import { getDocs,collection,query } from 'firebase/firestore'
// import firestore from '@react-native-firebase/firestore';
import {data} from "../../constants/Constdata"

export default function Slider() {

    //  console.log("===data===",data)

 
  return (
    <View>
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:20,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:5,
        paddingTop:5,
        paddingBottom:5
      }}>#Special for you</Text>

     
<FlatList
  data={data}
   horizontal={true}
   showsHorizontalScrollIndicator={false}
    style={{
      paddingLeft:20
    }}
  keyExtractor={(item, index) => index.toString()} // Add a unique key for each item
  renderItem={({ item }) => (
    <Image
      source={{ uri: item.imageUrl }}
      style={{
        width: 300,
        height: 160,
        borderRadius:15,
        marginRight:15
      }}
    />
  )}
/>

    </View>
  )
}

   //   useEffect(() =>{
    //     // getSliderList()
    //   },[])
    // const getSliderList = async() =>{
    //      const qdata = query(collection(db,'Slider'))
    //      const querySnapshot = await getDocs(q)
    //      querySnapshot.forEach((doc) =>{
    //         console.log("==data==",doc.data())
    //      })
    // }

    // const getSliderList = async () => {
    //     try {
    //       // Fetch the "Slider" collection
    //       const querySnapshot = await firestore().collection('Slider').get();
    
    //       // Log the data
    //       querySnapshot.forEach(doc => {
    //         console.log('==data==', doc.id, doc.data());
    //       });
    //     } catch (error) {
    //       console.error('Error fetching slider data:', error);
    //     }
    //   };
