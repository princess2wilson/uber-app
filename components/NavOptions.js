import React from 'react'
import { Text, View, SafeAreaView, Image, Touchable } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames'

const data =[
    {
        id:"123",
        title: "Get a ride",
        image:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1596627972/assets/e7/e861a8-30ec-4d57-8045-7186f6c5ec35/original/comfort.png",
        screen:'MapScreen',
    },

    {
        id : "456",
        title:"Order food",
        image: "https://p7.hiclipart.com/preview/174/981/108/uber-eats-food-delivery-logo-others.jpg",
        screen: "EatScreen", //Change in the future..

    },
];



const NavOptions = () => {
    return (
    <FlatList
        data ={data}
        horizontal
        keyExtractor ={(item) => item.id}
        renderItem ={({item}) =>(
         <TouchableOpacity
         style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
         >
             <View>
                <Image 
                style={{width:130,height:130,resizeMode:"contain"}}
                source={{uri:item.image}}
                />
                <Text>{item.title}</Text>
                </View>
         </TouchableOpacity>
 
        )}
        
        
        />
     );

};

export default NavOptions;


