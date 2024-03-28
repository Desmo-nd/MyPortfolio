import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './content.styles'
import { COLORS } from '../../constants';
import DownloadCv from './DownloadCV';

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
          Hi, I'm a Fullstack Developer with More Than Two Years Of 
          Experience In Designing And Building Responsive Web Apps 
          And Android Apps.
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
            <Text style={styles.modalText}>PERSONAL INFO</Text>

            {/* Add more content as needed */}
            <Pressable onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Content;