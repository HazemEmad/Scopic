import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LIST, USER} from '../../../constant/asyncStroage-keys';

export const getDataOnline = async (setLoading, setListData) => {
  setLoading(true);
  const usersRef = firestore().collection('Users');
  const user = JSON.parse(await AsyncStorage.getItem(USER));
  usersRef
    .doc(user.uid)
    .collection('items')
    .get()
    .then(collection => {
      const list = collection.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setListData(list);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => setLoading(false));
};

export const addOnline = async (setModalVisible, setRefreshing, addedText) => {
  setModalVisible(false);
  const usersRef = firestore().collection('Users');
  const user = JSON.parse(await AsyncStorage.getItem(USER));
  usersRef
    .doc(user.uid)
    .collection('items')
    .add({value: addedText})
    .then(() => {
      setRefreshing();
    });
};

export const removeOnline = async (setRefreshing, docId) => {
  const usersRef = firestore().collection('Users');
  const user = JSON.parse(await AsyncStorage.getItem(USER));
  usersRef
    .doc(user.uid)
    .collection('items')
    .doc(docId)
    .delete()
    .then(() => {
      setRefreshing();
    });
};
