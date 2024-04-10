import { View, Text,Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { CDN_URL } from './constants'
import * as Icon from 'react-native-feather';
import { useDispatch } from 'react-redux';
import{calculateTotalPrice, addItem} from "../utils/cartslice"

const ItemList = ({item}) => {
    const [add,setAdd]=useState(false)
    console.log(item?.card?.info)
    const dispatch=useDispatch()
    const handleadd=(item)=>{
       dispatch(addItem(item.card.info))
       dispatch(calculateTotalPrice())
        setAdd(true)
    
      //  toast.success("Added to cart")
    }
    const Adding=()=>{
        setAdd(true)
    }
  return (
    <View>
      <View>
        {item.map((item)=>(
        <View className="bg-white my-1 py-1 px-4   "
        key={item?.card?.info?.id}  > 
        <Text className="text-slate-600 text-xl  font-semibold">{item?.card?.info?.name}</Text>
        <Text  className="text-slate-600 text-xl  font-semibold">₹ {item?.card?.info?.price ?  item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100 }</Text>

        <View className="flex flex-row  mt-2">
        <View className="w-1/2 pr-2">
        <Text className="text-xs text-justify font-medium text-slate-400 ">{item?.card?.info?.description}</Text>
        </View>
        <View className="w-1/2 pr-0">
        <Image src={CDN_URL+item?.card?.info?.imageId} alt=""  className='w-[100%]  h-32 rounded-lg'/> 
        <View className="w-full flex items-center justify-center -mt-5 mb-2">
        
             <View className="bg-red-200 px-8 py-2.5 rounded-lg border-2 border-red-300 ">  
            {add?( <View className="flex flex-row  gap-2 px-1">
                <TouchableOpacity >
                <Icon.Plus stroke="#EA425C" height={25} width={25} /></TouchableOpacity>
                <Text className="text-white font-bold text-lg">1</Text>
                <TouchableOpacity >
                <Icon.Minus stroke="#EA425C" height={25} width={25} className=""/></TouchableOpacity >
            </View>): (<TouchableOpacity onPress={()=>handleadd(item)}><Text className="text-white font-bold text-base" >ADD</Text></TouchableOpacity>)}</View>
           
            </View>
            
        </View>
        </View>
        </View>))}
        
      </View>
    </View>
  )
}

export default ItemList