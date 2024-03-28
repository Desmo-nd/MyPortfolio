import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    content: {
      padding: 0,
      paddingHorizontal: 40,
      width: '55%',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    subhead: {
      fontSize: 16,
      color: '#ffffff',
    },
    button: {
      backgroundColor: '#EF5A56',
      color: '#ffffff',
      textAlign: 'center',
      textDecorationLine: 'none',
      textTransform: 'uppercase',
      marginTop: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
      width: 200,
    },
    buttonText: {
      color: '#ffffff',
      textAlign: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    modalContent: {
      width: '60%',
      height: '60%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 20,
      borderRadius: 10,
    //   alignItems: 'center',
      elevation: 5,

    },
    modalHeader: {
        fontSize: 24,
        marginBottom: 20,
        color: '#ffffff',
        fontFamily:"bold",
        textAlign: 'center',
    },
    modalSubHeader:{
        fontSize: 20,
        marginBottom: 20,
        color: '#ffffff',
        fontFamily:"semibold"
    },
    infoCont:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
      color: '#ffffff',
    },
    modalAnswer: {
      fontSize: 18,
      marginBottom: 20,
      color: '#ffffff',
      fontWeight: 'bold',
    },
    closeButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#007bff',
      borderRadius: 5,
    },
    closeButtonText: {
      color: '#ffffff',
      fontSize: 16,
    },
  });
  
export default styles;
  