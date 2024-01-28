import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import EditModal from '../components/EditModal';

import { deleteData } from '../services';

function DetailsScreen({ route, navigation }) {
  const { data, index, trigger } = route.params;
  const [visible, setVisible] = useState(false);

  const unAsyncTrigger = async () => {
    await deleteData(index);
    trigger(index + Math.random());
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Details</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" color={'#000'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20 }}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Milestone Type
          </Text>
          <Text style={{ fontSize: 25 }}>{data.milestone}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Milestone Date
          </Text>
          <Text style={{ fontSize: 25 }}>{data.date}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Milestone Note
          </Text>
          <Text style={{ fontSize: 25 }}>{data.note}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            backgroundColor: '#000',
            padding: 10,
            borderRadius: 10,
            width: 150,
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 20, color: '#fff' }}>Edit</Text>
          <MaterialCommunityIcons
            name="note-edit-outline"
            color={'#fff'}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={unAsyncTrigger}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            backgroundColor: '#ff6363',
            padding: 10,
            borderRadius: 10,
            width: 150,
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 20, color: '#fff' }}>Delete</Text>
          <MaterialCommunityIcons
            name="delete-forever"
            color={'#fff'}
            size={30}
          />
        </TouchableOpacity>
      </View>
      <EditModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        data={data}
        index={index}
        trigger={trigger}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default DetailsScreen;
