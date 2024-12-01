import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from "expo-router";
import {businessList} from "../../constants/Constdata"
import BusinessListcard from '../../components/BusinessList/BusinessListcard';

export default function BusinesListsbyCatgory() {
    const [Filterdata,setfilterdata]=useState([])
    const navigation = useNavigation();
    const { category } = useLocalSearchParams()
    
    //    console.log("===category",category)
    // console.log("==businessList==",businessList)

    // console.log("====Filterdata====",Filterdata)

    useEffect(() => {
        const fildata = businessList.filter((el)=> el.category==category)
        //  console.log("fildart",fildata)
         setfilterdata(fildata)
        navigation.setOptions({
            //  headerShown:false
            headerTitle: category
        })
    }, [])



    return (
        <View>
            <Text> bussiness by category</Text>

            <FlatList
             data={Filterdata}

             renderItem={({item,index})=>(
             <BusinessListcard business={item} />
             )}

            />
        </View>
    )
}