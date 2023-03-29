import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import Map from '../components/Map';
import {createStackNavigator} from "@react-navigation/stack";
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';


const MapScreen = () => {
    const Stack =createStackNavigator();

    return (
        <View>
          <View style={tw`h-1/2`}>
            <Map/>
          </View>


          <View style={tw`h-1/2`}>
            <Stack.Navigator>
                <Stack.Screen
                    name ="NavigateCard"
                    component ={NavigateCard}
                    options={{
                        headerShown:false,
                    }}
                    />
            </Stack.Navigator>
          </View>
        </View>
      );
        

};

export default MapScreen

const styles = StyleSheet.create({})

