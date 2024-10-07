import { StyleSheet } from "react-native";




const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent', // Dark background
        justifyContent: 'flex-start',
        padding: 10,
    },
    imageContainer: {
        borderRadius: 75,
        overflow: 'hidden',
        marginBottom: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
    },
    image: {
        borderRadius: 100,
        width: 150,
        height: 150,
        marginBottom: 5,
        borderWidth: 2,
        borderColor: '#61dafb',
    },
    descriptionContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker background for description
        borderRadius: 10,
        borderColor: '#61DAFB', // Border color
        borderWidth: 2, // Make the border visible
    
        // Adding shadow for glowing effect
        shadowColor: '#61DAFB', // Glow color
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10, // For Android
    
        padding: 15,
        marginBottom: 20,
        width: '100%',
      
    },
    socialLinks: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#61dafb',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    toggleContainer: {
        alignSelf: 'flex-end'
    },
    linkedin: {backgroundColor:'#4CBB85'},
    github: {backgroundColor: '#4D4D4D'},
    twitter: {backgroundColor: '#A2D6E9'},
    instagram: {backgroundColor: '#BF5A7A'},
    facebook: {backgroundColor: '#4B8FBF'}
});

export default darkStyles
