import { View, Text, ScrollView,Image,TouchableOpacity     } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { CDN_URL } from './constants'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({data}) => {
  // console.log( props.data.name)
  const { name, cuisines, locality, avgRating, costForTwo,cloudinaryImageId } = data;
  const navigation= useNavigation()
  return (
    <TouchableOpacity    onPress={() => navigation.navigate("Restaurant",{...data})}>
    <ScrollView className=" w-[45vw]  min-h-[30vh]  my-4 rounded-b-xl ">
       <View className="   shadow-sm shadow-slate-200  flex justify-center items-center  b">
        <View className="  self-center  w-full ">
            <Image className=" rounded-t-md  h-36    "  source={{ uri: CDN_URL + cloudinaryImageId }}/>
        </View>
        <View className=" flex  h-40  p-5 bg-zinc-100    ">
            <Text className=" text-lg font-bold text-gray-600 pl-1 overflow-hidden truncate"> {name}   </Text>
            <View className="flex-row justify-between mx-1 ">
          <View className="flex-row gap-1">
          <Icon.MapPin height={15} width={15} />
          <Text className="text-xs font-semibold text-gray-500"> {locality}  </Text>
          </View>
          <View className="flex-row gap-1">
          <Icon.Star stroke="gray" height={15} width={15}/>
          <Text>{avgRating}</Text>
          </View>
        </View>
        <View className="mt-2 pl-1">
            <Text className="text-gray-600 font-semibold overflow-hidden truncate pb-2">{cuisines.join(",")}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
    </TouchableOpacity   >
  )
}

export default RestaurantCard