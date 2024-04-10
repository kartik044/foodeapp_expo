import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import { StatusBar } from 'expo-status-bar';
import RestaurantCard from '../components/RestaurantCard';
import { CATEGORY_API } from '../components/constants';
import Cart from '../components/Cart';
const Homescreen = () => {
  const [searchtext, setSearchText] = useState('');
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const jsonData = await data.json();

      // console.log('Fetched data:', jsonData);

      const restaurantData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      // for the category fetch
      const categoryData = jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];

      // console.log('Restaurant Data:', restaurantData);
      // console.log('Category Data:', categoryData.info.imageId);

      setListofRestaurant(restaurantData);
      setCategory(categoryData);
      setFilterRestaurant(restaurantData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const searchclick = () => {
    const filterData = listofRestaurant.filter((res) => res.info?.name.toLowerCase().includes(searchtext.toLowerCase()));
    setFilterRestaurant(filterData);
  };

  return (
    <SafeAreaView className="px-4 flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="border-top border-gray-500 rounded-2xl border-2 mt-2 flex-row">
        <Icon.Search height={25} width={25} stroke="gray" className="ml-1 my-auto" />
        <TextInput
          style={{
            marginHorizontal: 6,
            paddingVertical: 2,
            marginVertical: 6,
          }}
          placeholder="search food here"
        />
      </View>
      <View className="mt-4    ">
        <Text className="my-2 font-bold text-lg text-gray-600">Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-2 ">
          {category && category.map && category.map((item) => (
            <View key={item?.id} className="">
              <Image
                className=" rounded-full"
                style={{ height: 100, width: 100 }}
                source={{ uri: CATEGORY_API + item?.imageId }}
              />
              {/* <Text className="font-semibold text-base text-gray-600">{item?.action?.text}</Text> */}
            </View>
          ))}
        </ScrollView>
      </View>
      <View>
        <Text className=" font-bold text-lg text-gray-600 mt-6">Available Restaurant</Text>
      </View>
      <View className="flex-1 mt-2">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterRestaurant}
          renderItem={({ item }) => <RestaurantCard data={item.info} />}
          keyExtractor={(item) => item?.info?.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
        
      </View>
      
    </SafeAreaView>
  );
};

export default Homescreen;
