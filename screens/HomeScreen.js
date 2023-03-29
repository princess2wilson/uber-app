import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//import {GOOGLE_MAPS_APIKEY} from "@env" 
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from '../slices/navSlice';
import { GOOGLE_MAPS_APIKEY } from '../keys';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100, 
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/619/cached.offlinehbpl.hbpl.co.uk/news/OMC/Uberlogo-20180925091408171.jpg",
                    }}
                />

                <GooglePlacesAutocomplete
                placeholder='Where From?'
                styles = {{
                    container:{
                        flex:0,
                    },
                    textInput :{
                        fontSize:18,
                    },
                }}
                onPress = {(data,details = null) =>{
                    //push data to redux store
                    dispatch(
                        setOrigin({
                        location:details.geometry.location,
                        description:data.description,
                    }));
                    dispatch(setDestination(null)); 
                }}
                fetchDetails={true}
                returnKeyType ={"search"}
                enablePoweredByContainer = {false}
                minLenght ={2} 
                
                query ={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en",
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce = {400}
                />

                <NavOptions />
            </View>
        </SafeAreaView>
    );

};

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue'
    }
})

