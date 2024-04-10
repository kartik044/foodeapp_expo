import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useRoute } from '@react-navigation/native'
import { MENU_API } from './constants'
import ItemList from './ItemList'
import CategoryDetail from './CategoryDetail'

const RestaurantCategory = () => {
    const {params}= useRoute()
  let data=params
//   console.log(data.id)
  const[menuDetails,setMenuDetails]=useState()

   
  
  useEffect (()=>{
    Menudata()
  },[])
   
 const Menudata = async ()=>{
   try {
     const Menuinfo = await fetch(MENU_API+data.id)
      const json=  await Menuinfo.json()
     
      console.log(json)
      setMenuDetails(json.data)
      
   } catch (error) {console.error('Error fetching menu data:', error);
     
   }
      
 }
//   if (menuDetails.length===0)return <Shiimer/>
 // const {name,costForTwoMessage,cuisines} = menuDetails?.cards[0]?.card?.card?.info
 // const {itemCards}= menuDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
 // console.log(menuDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
const categories= menuDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
//  console.log(categories);
  return (
    <ScrollView className="mb-4">
        
            <FlatList
              
            data={categories}
            renderItem={({ item }) => ( <CategoryDetail  category={item}/>)}
          keyExtractor={item=>item?.card?.card?.itemCards[0]?.card?.info?.id}/>
    
     
    </ScrollView>
  )
}

export default RestaurantCategory