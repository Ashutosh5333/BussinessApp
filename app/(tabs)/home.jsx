import { View, Text, ScrollView } from 'react-native';
import Header from "../../components/HomeScreens/Header"
import Slider from "../../components/HomeScreens/Slider"
import Category from "../../components/HomeScreens/Category"
import PopularBussiness from "../../components/HomeScreens/PopularBussiness"

export default function home() {

  return (
    <ScrollView >
      {/*==== Header  === */}

      <Header />

      {/*===== Slider====== */}

      <Slider />

      {/* ==== Category ====*/}

      <Category />

      {/*==== Popular Business List ==== */}

      <PopularBussiness />
      <View style={{height:100}}>

      </View>
    </ScrollView>
  );
}
