import AsyncStorage from '@react-native-async-storage/async-storage';
import {LIST} from '../../../constant/asyncStroage-keys';

export const getDataOffline = setListData => {
  AsyncStorage.getItem(LIST).then(value => {
    setListData(JSON.parse(value));
  });
};

export const addOffline = (
  setModalVisible,
  setRefreshing,
  listData,
  addedText,
) => {
  const temp = listData ?? [];
  const list = JSON.stringify([
    ...temp,
    {
      id: new Date().getTime(),
      value: addedText,
    },
  ]);
  setModalVisible(false);
  setRefreshing();
  AsyncStorage.setItem(LIST, list);
};

export const removeOffline = (setRefreshing, docId, listData) => {
  listData = listData.filter(item => item.id != docId);
  const list = JSON.stringify([...listData]);
  setRefreshing();
  AsyncStorage.setItem(LIST, list);
};
