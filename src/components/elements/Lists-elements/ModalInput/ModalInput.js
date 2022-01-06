import * as React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../../../constant/colors';
import {
  percentageHight,
  perfectHeight,
  perfectSize,
} from '../../../../utils/pixel-perfect';
import CustomButton from '../../../common/Button';
import CustomText from '../../../common/Text';
import CustomTextInput from '../../../common/TextInput';

const ModalInput = ({setText, text, isModalVisible, setVisible, add}) => {
  React.useEffect(() => {
    if (!isModalVisible) {
      setText('');
    }
  }, [isModalVisible]);
  const hideModal = () => setVisible(false);
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      hideModalContentWhileAnimating
      useNativeDriver>
      <View
        style={{
          height: percentageHight(0.4),
          borderRadius: perfectSize(5),
          backgroundColor: colors.background,
          padding: perfectSize(20),
        }}>
        <CustomText isBold color={colors.secondary}>
          Please Enter Your Text
        </CustomText>
        <CustomTextInput
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: perfectSize(5),
            height: perfectHeight(100),
          }}
          setText={setText}
          placeholder="Write your text here"
          maxLength={50}
          multiline
        />
        <CustomText
          isBold
          color={colors.secondary}
          style={{alignSelf: 'flex-end'}}>
          {text.length}/50
        </CustomText>
        <CustomButton
          buttonText={'Submit'}
          disabled={text == ''}
          onPress={add}
        />
      </View>
    </Modal>
  );
};
export default ModalInput;
