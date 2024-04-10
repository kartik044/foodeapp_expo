import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { CDN_URL } from '../components/constants'
import * as Icon from "react-native-feather"
import RestaurantCategory from '../components/RestaurantCategory'
import Cart from '../components/Cart'

const RestaurantScreen = () => {
  const {params}= useRoute()
  let data=params
 
  // console.log(data)
  return (<View>
    <ScrollView>
      <StatusBar barStyle="dark-content"/>
      <View>
        <View className="">
        <Image className="w-full h-80  "  source={{ uri: CDN_URL + data.cloudinaryImageId }}/>
        </View>
        <View className="bg-white -mt-12 pt-8 rounded-t-3xl pb-4 ">
       <Text className="text-slate-700 font-extrabold text-2xl text-center">{data.name}</Text>
       <Text className="text-slate-600 font-semibold text-lg text-center">{data.cuisines.join(", ")}</Text>
       <View className="flex flex-row justify-center my-1 ">
       <Icon.Star stroke="green" height={15} width={15}/>
        <Text className="text-slate-500 font-semibold">{data.avgRating}</Text>
        <Text className="ml-4 text-slate-500 font-semibold ">{data.totalRatingsString} ratings</Text>

       </View >
       <View className="flex flex-row justify-center my-1 bg-slate-100 p-1 mx-10 rounded-full border-slate-400">
        <Icon.Watch stroke="green" height={15} width={15}/>
       <Text className="text-slate-500 font-semibold"> {data.sla.slaString}</Text>
       <Text className="mx-3 text-slate-500 font-semibold">|   {data.sla.lastMileTravelString}   |</Text>
       <Text className="text-slate-500 font-semibold">{data.areaName}</Text>
       </View>

       
      
        </View>
        <View className="mt-4 ">
        <RestaurantCategory {...data}/>
        </View>
        
      </View>
     
    </ScrollView> 
     <View className="px-3 -mt-20">
     <Cart/>
     </View>
     </View>
  )
}

export default RestaurantScreen