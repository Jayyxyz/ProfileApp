import React, { useState, useEffect } from 'react';
import {  Text, Image, View, TouchableOpacity, Switch,  ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import lightStyles from './styles/Profile_styles';
import darkStyles from './styles/dark'
import lightFonts from './textFonts/fonts';
import darkFont from './textFonts/darkFonts';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'; 


export default function Profile(){
    // State to manage dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);
   

    // Toggle dark mode
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const loadFonts = async () => {
        await Font.loadAsync({
            'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'), // Update with your font
        });
    };
    useEffect(() => {
        loadFonts().then(() => setFontsLoaded(true)); // Load fonts and set loaded state
    },);
    


    // Choose styles based on dark mode state
    const styles = isDarkMode ? darkStyles : lightStyles;
    const Fontstyles = isDarkMode ? darkFont : lightFonts;

    if (!fontsLoaded) {
        return <AppLoading />; // Show loading screen until fonts are loaded
    }

    return(
        

       <ImageBackground source={isDarkMode ? require('../assets/night.jpg') : require('../assets/Light.jpg')} // Replace with your images
       style={styles.container}
       resizeMode="cover">
        <View style={styles.toggleContainer}>
                
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleDarkMode}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
                />
            </View>
       <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image source={require('../assets/Pic.png')} style={styles.image}/>
        </View>
        <Text style={[Fontstyles.name, {fontFamily: 'Lobster-Regular'}]}>Jayrold Llarenas</Text>
        
        <View style={styles.descriptionContainer}>
          
        <Text style={[Fontstyles.bio, {fontFamily: 'Lobster-Regular', fontSize: 20}]}>Software Developer</Text>
        
        <Text style={[Fontstyles.bio, {marginTop: -10,fontFamily: 'Lobster-Regular'}]}>Javascript | React JS | Python | Java</Text>
        

        </View>
        <View style={styles.socialLinks}>
        <TouchableOpacity style={[styles.button, styles.linkedin]}>
                        <Icon name="linkedin" size={25} color="#ffffff" />
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.github]}>
                        <Icon name="github" size={25} color="black" />
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.twitter]}>
                        <Icon name="twitter" size={25} color="#ffffff" />
                       
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.instagram]}>
                        <Icon name="instagram" size={25} color="#ffffff" />
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.facebook]}>
                        <Icon name="facebook" size={25} color="#ffffff" />
                        
                    </TouchableOpacity>
                </View>
                
       </View>
       </ImageBackground>

    )
    
    
}
const socialMediaColors = {
    linkedin: '#9DC183',
    github: '#F5F5DC',
    twitter: '#A9C9D1',
    instagram: '#F4A460',
    facebook: '#87CEEB'
};