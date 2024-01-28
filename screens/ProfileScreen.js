import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { removeAllData } from '../services';

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
      <TouchableOpacity
        onPress={() => removeAllData()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#ff6363',
          padding: 5,
          paddingHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Clear Storage</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
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

export default ProfileScreen;
