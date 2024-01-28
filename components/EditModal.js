import { useState } from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { editData } from '../services';

export default function EditModal({
  isVisible,
  onClose,
  data,
  index,
  trigger,
}) {
  const [date, setDate] = useState(new Date(data.date));
  const [milestone, setMilestone] = useState(data.milestone);
  const [note, setNote] = useState(data.note);

  const edit = async () => {
    await editData(
      {
        date,
        milestone,
        note,
      },
      index
    );
    trigger({ date, milestone, note });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Edit {data.milestone}</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <View>
          <View style={styles.formElement}>
            <Text style={styles.label}>Date</Text>
            <DateTimePicker
              value={date}
              mode="date"
              onChange={onChange}
              style={{ marginRight: 'auto' }}
            />
          </View>
          <View style={styles.formElement}>
            <Text style={styles.label}>Milestone type</Text>
            <TextInput
              style={styles.input}
              placeholder="Milestone"
              onChangeText={(text) => setMilestone(text)}
              value={milestone}
            />
          </View>
          <View style={styles.formElement}>
            <Text style={styles.label}>Additional Notes</Text>
            <TextInput
              style={styles.inputArea}
              placeholder="Notes"
              multiline={true}
              numberOfLines={10}
              onChangeText={(text) => setNote(text)}
              value={note}
            />
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              edit();
              onClose();
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  titleContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    width: '100%',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    color: 'gray',
  },
  formElement: {
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 15,
  },
  inputArea: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    height: 200,
    textAlignVertical: 'top',
    borderRadius: 15,
  },
  submitButton: {
    backgroundColor: '#ff6363',
    padding: 10,
    borderRadius: 15,
  },
});
