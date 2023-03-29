import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GOOGLE_MAPS_APIKEY } from '../keys';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const NavigateCard = () => {
      return (
        <SafeAreaView style ={tw`bg-white flex-1`}> 
            <Text style ={tw`text-center py-5 text-xl`}>Good Morning, Princess</Text>
            <View style ={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                    styles = {toInputBoxStyles}
                    enabledPoweredByContainer ={false}
                    placeholder = 'Where to?'
                    debounce ={400}
                    nearbyPlacesAPI ="GooglePlacesSearch"
                    query ={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    />
                </View>
            </View>
        </SafeAreaView>
      );
        

};

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:20,
        flex:0,
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        fontSize:18,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    },
})
