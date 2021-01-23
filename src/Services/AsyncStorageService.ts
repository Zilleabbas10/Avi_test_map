import AsyncStorage from '@react-native-community/async-storage';

/**
 * fetch data from the async storage
 *
 * @param {string} key
 * @returns
 */
const getAsyncStorageItem = async (key: string) => {
  // console.log('getting from async storage: ', key)
  // AsyncStorage.clear()
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      // value previously stored
      return value;
    }
    return ''
  } catch(e) {
    // error reading value
    return ''
  }
}

/**
 * save an object or string to the async storage
 * 
 * @param {string} key
 * @param {(string | object)} data
 */
const saveToAsyncStorage = async (key: string, data: string | object) => {
  const parsedData = typeof data === 'string' ? data : JSON.stringify(data)
  AsyncStorage.setItem(key, parsedData)
}

/**
 * remove key from the async storage
 *
 * @param {string} key
 */
const removeKeyFromAsyncStorage = async (key: string) => {
  AsyncStorage.removeItem(key)
}

export default {
  getAsyncStorageItem,
  saveToAsyncStorage,
  removeKeyFromAsyncStorage
}