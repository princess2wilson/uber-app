import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
const HomeScreen = () => {

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

