import * as React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import colors from '../../../constant/colors';
import {perfectHeight, perfectSize} from '../../../utils/pixel-perfect';
import commonStyles from '../../common/common-styles';
import CustomText from '../../common/Text';
import styles from './styles';
import ModalInput from '../../elements/Lists-elements/ModalInput';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import SwipeItem from '../../elements/Lists-elements/SwipeItem';
import {
  addOffline,
  getDataOffline,
  removeOffline,
} from './list-offline.services';
import {addOnline, removeOnline, getDataOnline} from './list-online.services';

const Lists = () => {
  const [isEnabled, setIsEnabled] = React.useState(true);
  const [listData, setListData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [addedText, setAddedText] = React.useState('');

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleRefresher = () => setRefreshing(prevState => !prevState);

  const getData = () =>
    isEnabled
      ? getDataOnline(setLoading, setListData)
      : getDataOffline(setListData);

  const deleteItem = docId =>
    isEnabled
      ? removeOnline(toggleRefresher, docId)
      : removeOffline(toggleRefresher, docId, listData);

  const addItem = () =>
    isEnabled
      ? addOnline(setModalVisible, toggleRefresher, addedText)
      : addOffline(setModalVisible, toggleRefresher, listData, addedText);

  React.useEffect(() => {
    setListData([]);
    getData();
  }, [refreshing, isEnabled]);

  const WrapGesture = gestureHandlerRootHOC(({item, remove}) => (
    <SwipeItem value={item.value} remove={() => remove()} />
  ));

  return (
    <View style={commonStyles.container}>
      <ModalInput
        isModalVisible={modalVisible}
        setVisible={setModalVisible}
        setRefresher={toggleRefresher}
        setText={setAddedText}
        text={addedText}
        add={addItem}
      />
      {loading ? (
        <ActivityIndicator color={colors.secondary} size={perfectSize(25)} />
      ) : (
        <Switch
          style={{alignSelf: 'center'}}
          trackColor={{false: colors.secondary, true: colors.toggler}}
          thumbColor={isEnabled ? colors.background : colors.disabledThumb}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      )}
      <FlatList
        data={listData}
        style={styles.list}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({item, index}) => (
          <WrapGesture item={item} remove={() => deleteItem(item.id)} />
        )}
        ListEmptyComponent={
          !loading && (
            <CustomText
              isBold
              isCenter
              hasVerticalMargin={perfectHeight(50)}
              color={colors.secondary}>
              You don't have any data.
            </CustomText>
          )
        }
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => setModalVisible(true)}>
        <Icon name="plus" size={perfectSize(30)} oolor={colors.background} />
      </TouchableOpacity>
    </View>
  );
};

export default Lists;
