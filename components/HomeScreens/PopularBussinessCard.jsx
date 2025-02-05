import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function PopularBussinessCard({ business }) {
    return (
        <View>
            <View style={{
                marginLeft: 20,
                padding: 20,
                backgroundColor: "#fff",
                borderRadius: 15
            }}>

                <Image source={{ uri: business?.imageUrl }}
                    style={{
                        width: 200,
                        height: 130,
                        borderRadius: 15,
                        padding: 10
                    }}
                />
                <View style={{ marginTop: 6 ,gap:5}}>
                    <Text style={{
                        fontFamily: "öutfit-bold",
                        fontSize: 17,
                    }}>
                        {business.name}
                    </Text>
                    <Text style={{
                        fontFamily: "öutfit",
                        fontSize: 13,
                        color: Colors.Gray
                    }}>
                        {business.address}
                    </Text>
                    
                    <View style={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }}>                   

                    <View style={{display:"flex",
                        flexDirection:"row",
                        gap:5
                        }}>
                        <Image
                         source={require("./../../assets/images/star.png")}
                          style={{width:15,
                            height:15
                          }}
                        />
                        <Text style={{fontFamily:"outfit"}}>4.5</Text>
                    </View>
                     
                     {/* <View> */}
                        <Text style={{fontFamily:'outfit',
                            backgroundColor:Colors.PRIMARY,
                            color:"#fff",
                            padding:3,
                            fontSize:12,
                            borderRadius:5
                        }}>
                            {business.category}
                        </Text>
                     {/* </View> */}
                    </View>

                </View>
            </View>



        </View>
    )
}