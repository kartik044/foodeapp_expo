import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather"
import ItemList from './ItemList'
const CategoryDetail = ({category}) => {
    const [showItems, setShowItems] = useState(false)
    // const {params}= useRoute()
    // let category=params
    // console.log(category.card?.card?.title)
    const handleclick=()=>{
        setShowItems(!showItems)
    }
  return (
    
    <View className="   my-2 bg-white  ">
      <TouchableOpacity onPress={handleclick}>
      <View className="   bg-white-2 justify-between flex flex-row i  px-4 py-2  ">
      
        
            <Text className="text-lg font-semibold text-slate-600 "> {category.card?.card?.title} ({category.card?.card?.itemCards.length}) </Text>
            <Icon.ChevronDown  className="pl-3"stroke="black" height={20} width={20}/>
            
            </View></TouchableOpacity>
       { showItems && <ItemList item={category.card?.card?.itemCards}/>}  
    
       </View>
    
  )
}

export default CategoryDetail