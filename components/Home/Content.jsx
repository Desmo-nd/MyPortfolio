import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './content.styles'
import { COLORS } from '../../constants';
import DownloadCv from './DownloadCV';
import { ScrollView } from 'react-native-web';

const Content = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>I'm Desmond Murangiri</Text>
        <Text style={styles.title}>I'm a Software Engineer</Text>

        <Text style={styles.subhead}>
            I am a software engineer with a passion for technology and 
            innovation. I am constantly seeking opportunities to advance 
            my skills and build a solid foundation for my career in the 
            technology sector.
        </Text>
        <TouchableOpacity onPress={openModal} style={styles.button}>
          <Text style={styles.buttonText}>MORE ABOUT ME</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <ScrollView>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>ABOUT<Text style={{color:COLORS.primary}}>ME</Text></Text>
              <Text style={styles.modalSubHeader}>PERSONAL INFO</Text>
              <View style={styles.infoCont}>
                  <View style={styles.left}>
                      <Text style={styles.modalText}>First Name: <Text style={styles.modalAnswer}>Desmond</Text></Text>
                      <Text style={styles.modalText}>Age: <Text style={styles.modalAnswer}>23</Text></Text>
                      <Text style={styles.modalText}>Phone: <Text style={styles.modalAnswer}>+254 740 524 75</Text></Text>
                      <Text style={styles.modalText}>GitHub: <Text style={styles.modalAnswer}>Desmo-nd</Text></Text>

                  </View>
                  <View style={styles.right}>
                      <Text style={styles.modalText}>Last Name: <Text style={styles.modalAnswer}>Mwirigi</Text></Text>
                      <Text style={styles.modalText}>Country: <Text style={styles.modalAnswer}>Kenya</Text></Text>
                      <Text style={styles.modalText}>Email: <Text style={styles.modalAnswer}>mwirgdesmon@gmail.com</Text></Text>
                      <Text style={styles.modalText}>LinkedIn: <Text style={styles.modalAnswer}>DesmondMwirigi</Text></Text>

                  </View>
                  
              </View>
              <DownloadCv/>
              <View style={styles.grid}>
                      <View style={styles.gridItem}>
                          <Text style={styles.itemNum}>2+</Text>
                          <Text style={styles.itemText}>Years of Experience</Text>
                      </View>
                      <View style={styles.gridItem}>
                          <Text style={styles.itemNum}>15+</Text>
                          <Text style={styles.itemText}>Completed Projects</Text>
                      </View>
                      <View style={styles.gridItem}>
                          <Text style={styles.itemNum}>7</Text>
                          <Text style={styles.itemText}>Happy Customers</Text>
                      </View>
                      <View style={styles.gridItem}>
                          <Text style={styles.itemNum}>1</Text>
                          <Text style={styles.itemText}>Awards</Text>
                      </View>
                  </View>

              <Pressable onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};
export default Content;