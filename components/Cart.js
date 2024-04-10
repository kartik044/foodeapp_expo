import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItem = useSelector(store=>store.cart.cartItems)
  const TotalPrice= useSelector(store=>store.cart.Totalprice)
  console.log(cartItem)
    const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Cartscreen")}>
    <View className="bg-red-300 rounded-full flex flex-row justify-between py-4 px-3 border-red-600 shadow-sm  ">
       <View className="bg-red-400 py-1 px-4 rounded-full ml-2 ">
        <Text className="font-bold text-lg text-white ">
        {cartItem.length}
        </Text>
       </View>
       <Text className="text-white font-bold text-lg">View Cart </Text>
       <View className="bg-red-400 py-1 px-4 rounded-full ml-2 ">
        <Text className="font-bold text-lg text-white ">
        ₹ {TotalPrice}
        </Text>
        
       </View>
    </View>
    </TouchableOpacity>
  )
}

export default Cart