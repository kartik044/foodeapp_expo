import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather';

const Cartscreen = () => {
  return (
    <View className=" flex-1 bg-white items-center justify-between ">
        <View className="flex items-center w-full" >
      <Text className='text-xl font-bold mt-4 '>Your Cart</Text>

       <View className="bg-red-200  mt-6 w-full h-20 px-6  ">
        <View className="my-5 flex flex-row justify-between">
        <Image className="w-10 h-10 object-fit  rounded-full"  source={require('../assets/delivery-man.jpg')} />
        <Text className="mt-3 font-bold text-base" >Delivery in 20 Minutes</Text>
        <Text className="mt-3 font-bold text-red-500 text-base" >Change</Text>
        </View>
        
       </View>

<View className="bg-red-50  mt-10 w-full  justify-between flex flex-col items-center  px-4 py-2">
    <View className="flex flex-row justify-between items-center w-full">
<Image className="w-20 h-20 object-fit  rounded-full"  source={require('../assets/delivery-man.jpg')}/>
<Text className="font-semibold text-base ">Burger king </Text></View>
<View className="flex flex-row justify-between w-full items-center mt-1">
<View className="flex flex-row gap-3">
    <TouchableOpacity  className="bg-red-400 rounded-full p-1" >
    
                <Icon.Minus stroke="white" height={25} width={25} /></TouchableOpacity>
                <Text className="text-slate-500 font-bold text-lg">1</Text>
                <TouchableOpacity className="bg-red-400 rounded-full p-1" >
                <Icon.Plus stroke="white" height={25} width={25} className=""/></TouchableOpacity ></View>
                <View className="bg-red-400 py-1 px-4 rounded-full ml-3  ">
        <Text className="font-bold text-lg text-white ">
        ₹ 1
        </Text>
       </View>
       <TouchableOpacity className="pl-3">
       <Icon.Trash2 stroke="#EA425C"   height={40} width={40} />
       </TouchableOpacity>
     </View>
     </View>
     </View>
     <View className="bg-red-200 w-full mt-2 rounded-t-3xl space-y-3 p-4 ">
        <View className=" flex flex-row justify-between   ">
        <Text className=" text-base font-medium">Subtotal</Text>
        <Text className=" text-base font-medium">   ₹520</Text>
        </View>
        <View className="flex flex-row justify-between ">
        <Text className=" text-base font-medium">Delivery Charge </Text>
        <Text className=" text-base font-medium">   ₹20</Text>

        </View>
        <View className="flex flex-row justify-between mb-4 ">
        <Text className=" text-lg font-bold">Total Price  </Text>
        <Text className=" text-lg font-bold">   ₹540</Text>
        </View>
        <TouchableOpacity>
        <View className="w-full bg-red-400 items-center py-3 rounded-3xl mb-1">
            <Text className=" text-xl font-bold text-white">Place Order</Text>
        </View>
        </TouchableOpacity>
     </View>
     </View>
  )
}

export default Cartscreen