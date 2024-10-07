import { StyleSheet } from "react-native";




const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent', // Dark background
        justifyContent: 'flex-start',
        padding: 20,
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
        backgroundColor: '#333333', // Darker background for description
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        width: '100%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
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
        backgroundColor: '#61dafb',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    toggleContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});

export default darkStyles
