import * as React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Text from '../Text';
import colors from '../../../constant/colors';
import {perfectSize} from '../../../utils/pixel-perfect';
import styles from './styles';
import commonStyles from '../common-styles';

const CustomTextInput = ({secured, title, setText, style, ...rest}) => {
  const [secureInput, setSecureInput] = React.useState(secured);
  const onChangeText = text => setText(text);
  const showPass = () => setSecureInput(prevState => !prevState);
  return (
    <View style={styles.textInputContainer}>
      {title && (
        <Text isBold color={colors.primary}>
          {title}
        </Text>
      )}
      <View
        style={{
          ...commonStyles.row,
          ...commonStyles.viewHasBottomBorder,
          ...style,
        }}>
        <TextInput
          {...rest}
          onChangeText={onChangeText}
          secureTextEntry={secureInput}
          style={styles.textInput}
          placeholderTextColor={colors.secondary}
        />
        {secured && (
          <TouchableOpacity>
            <Icon
              name={secureInput ? 'eye' : 'eye-off'}
              onPress={showPass}
              color={colors.secondary}
              size={perfectSize(20)}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default CustomTextInput;
