import { StyleSheet } from "react-native";


const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        padding: 20,
        
    },
    imageContainer: {
        borderRadius: 75, // Circular border for image
        overflow: 'hidden',
        marginBottom: 10,
        elevation: 5, // Shadow effect on Android
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
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
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
         // White background inside the container
    borderColor: 'rgba(144, 238, 144, 1)', // Light green border color (matching Ghibli's peaceful tones)
    borderWidth: 2,
    shadowColor: 'rgba(144, 238, 144, 0.8)', // Light green glow effect
    shadowOffset: { width: 0, height: 0 }, // Center the shadow for an even glow
    shadowOpacity: 0.9, // Intensity of the glow
    shadowRadius: 20, // The spread of the glow (for iOS)
    elevation: 15, // Glow effect for Android// White background for contrast
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        width: '100%', // Full width for description container
        elevation: 5, // Shadow effect for depth
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
    },
    socialLinks: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginBottom: 20,
        
    },
    button: {
        backgroundColor: '#61dafb', // React-like color
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        alignItems: 'center'
        
    },
    buttonText: {
        fontSize: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
})
export default lightStyles;