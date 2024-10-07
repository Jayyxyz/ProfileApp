import { StyleSheet } from "react-native";


const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        padding: 10,
        
    },
    imageContainer: {
        borderRadius: 75, 
        overflow: 'hidden',
        marginBottom: 10,
        elevation: 5, 
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
        borderColor: '#9DC183',
        
    },
    
    descriptionContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
         
    borderColor: 'rgba(144, 238, 144, 1)', 
    borderWidth: 2,
    shadowColor: 'rgba(144, 238, 144, 0.8)', 
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.9, 
    shadowRadius: 20, 
    elevation: 15, 
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        width: '100%', 
        elevation: 10, 
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
    toggleContainer: {
        alignSelf: 'flex-end'
        
    },

    linkedin: {backgroundColor:'#9DC183'},
    github: {backgroundColor: '#F5F5DC'},
    twitter: {backgroundColor: '#A9C9D1'},
    instagram: {backgroundColor: '#F4A460'},
    facebook: {backgroundColor: '#87CEEB'}
})
export default lightStyles;