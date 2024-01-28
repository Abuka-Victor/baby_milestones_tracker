import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('data', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('data');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // error reading value
  }
};

export const editData = async (data, index) => {
  try {
    const jsonValue = await AsyncStorage.getItem('data');
    const parsedData = JSON.parse(jsonValue);
    parsedData[index] = data;
    await AsyncStorage.setItem('data', JSON.stringify(parsedData));
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export const deleteData = async (index) => {
  try {
    const jsonValue = await AsyncStorage.getItem('data');
    const parsedData = JSON.parse(jsonValue);
    const newData = parsedData.filter((item, idx) => idx !== index);
    await AsyncStorage.setItem('data', JSON.stringify(newData));
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export const removeAllData = async () => {
  try {
    await AsyncStorage.removeItem('data');
  } catch (e) {
    // remove error
  }
  console.log('Done Clearing Cache');
};
