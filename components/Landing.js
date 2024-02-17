import React, {useState, useEffect} from "react";
import {ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";


SplashScreen.preventAutoHideAsync();
const Landing = ({navigation}) => {

  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins_Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins_Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins_SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

    return (
      
      <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground source={require('../img/ellipse.png')} resizeMode="cover" style={styles.image} className=" h-2/3">
        <Text style={{fontFamily: 'Poppins_Bold'}} className="text-center text-2xl mb-8 text-[#45B3CB]">Farewell Stunting</Text>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../img/doctor.png')} style={styles.doctorImage} />
          <Text style={{fontFamily: 'Poppins'}} className="mt-20 text-xl">Your Best Medical Assistant</Text>
          <Text style={{fontFamily: 'Poppins_Regular'}} className="text-center w-2/3 mt-2 mb-6">Lakukan pencegahan Stunting dengan pemeriksaan Rutin</Text>
        </View>
  
        <View style={styles.buttonContainer} className="flex flex-row justify-evenly">
          <TouchableOpacity style={{ backgroundColor: '#45B3CB', padding: 13, borderRadius: 4 }} onPress={()=>
            navigation.navigate('Form')}>
            <Text style={{ color: '#fff', fontFamily: "Poppins_SemiBold" }}>Ibu Hamil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#45B3CB', padding: 13, borderRadius: 4 }} className="px-6">
            <Text style={{ color: '#fff', fontFamily: "Poppins_SemiBold" }}>Anak</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  roundedButton: {
    borderRadius: 100,
  },
});


export default Landing;
