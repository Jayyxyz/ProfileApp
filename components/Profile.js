import React, { useState, useEffect } from 'react';
import {  Text, Image, View, TouchableOpacity, Switch, ImageBackground} from 'react-native';
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
    }, console.log('Fonts loaded successfully!'));
    


    // Choose styles based on dark mode state
    const styles = isDarkMode ? darkStyles : lightStyles;
    const Fontstyles = isDarkMode ? darkFont : lightFonts;

    if (!fontsLoaded) {
        return <AppLoading />; // Show loading screen until fonts are loaded
    }

    return(
        

       <ImageBackground source={isDarkMode ? require('../assets/Dark.jpg') : require('../assets/Light.jpg')} // Replace with your images
       style={styles.container}
       resizeMode="cover">
       <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image source={require('../assets/founder.jpg')} style={styles.image}/>
        </View>
        <Text style={[Fontstyles.name, {fontFamily: 'Lobster-Regular'}]}>Jayrold Llarenas</Text>
        
        <View style={styles.descriptionContainer}>
          
        <Text style={[Fontstyles.bio, {fontFamily: 'Lobster-Regular', fontSize: 20}]}>------- Software Developer ------</Text>
        
        <Text style={[Fontstyles.bio, {marginTop: -10},  {fontFamily: 'Lobster-Regular'}]}>Javascript | React JS | Python | Java</Text>
        <Text style={Fontstyles.description}> A passionate software developer and tech enthusiast.
        Currently, I’m a third-year IT student from the Philippines</Text>

        </View>
        <View style={styles.socialLinks}>
        <TouchableOpacity style={[styles.button, { backgroundColor: socialMediaColors.linkedin }]}>
                        <Icon name="linkedin" size={30} backcolor="#ffffff" />
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: socialMediaColors.github }]}>
                        <Icon name="github" size={30} color="#ffffff" />
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: socialMediaColors.twitter }]}>
                        <Icon name="twitter" size={30} color="#ffffff" />
                       
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: socialMediaColors.instagram }]}>
                        <Icon name="instagram" size={30} color="#ffffff" />
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: socialMediaColors.facebook }]}>
                        <Icon name="facebook" size={30} color="#ffffff" />
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.toggleContainer}>
                <Text style={Fontstyles.bio}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleDarkMode}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
                />
            </View>
       </View>
       </ImageBackground>

    )
    
    
}
const socialMediaColors = {
    linkedin: '#0077B5',
    github: '#333333',
    twitter: '#1DA1F2',
    instagram: '#E1306C',
    facebook: '#4267B2'
};