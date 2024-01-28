import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width

import AddModal from '../components/AddModal';
import { useEffect, useState } from 'react';
import { getData } from '../services';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState('changed');
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const gotData = await getData();
      setData(gotData);
    })();
  }, [trigger]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Milestones</Text>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <MaterialCommunityIcons name="plus-box" color={'#000'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {data.length !== 0 ? (
          <FlatList
            data={data}
            style={{ flex: 1 }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Deets', {
                      data: item,
                      index: index,
                      trigger: setTrigger,
                    });
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: width,
                      padding: 10,
                      paddingVertical: 20,
                      borderBottomWidth: StyleSheet.hairlineWidth,
                      borderBottomColor: 'gray',
                    }}
                  >
                    <Text>{item.milestone}</Text>
                    <Text>
                      {months[new Date(item.date).getMonth()]}{' '}
                      {new Date(item.date).getDate()}{' '}
                      {new Date(item.date).getFullYear()}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View>
            <Text>No Milestones to show ✨</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#ff6363',
                padding: 5,
                paddingHorizontal: 10,
                marginTop: 10,
              }}
              onPress={() => setVisible(true)}
            >
              <Text style={{ color: '#fff', fontSize: 18 }}>
                Add your first milestone
              </Text>
              <MaterialCommunityIcons name="plus" color={'#fff'} size={30} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <AddModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        data={data}
      />
    </SafeAreaView>
  );
};

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

export default HomeScreen;
