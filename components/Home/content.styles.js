import { StyleSheet } from "react-native-web";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    padding: 0,
    paddingHorizontal: 40,
    width: '45%',
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
    width: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
    marginTop: 20,

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
  gridCont:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop: 20,
  },
  infoCont:{
      flexDirection:"row",
      justifyContent:"space-between",
  },
  modalText: {
    fontSize: 15,
    marginBottom: 20,
    color: '#ffffff',
  },
  modalAnswer: {
    fontSize: 15,
    marginBottom: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  gridItem: {
    width: '40%',
    height: 100,
    // backgroundColor: '#007bff', 
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  itemText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemNum:{
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  });
  
export default styles;
  