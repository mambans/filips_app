import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../variables/Colors';

const MyInput = (props) => {
  const ref = useRef();
  const handleClear = () => ref?.current?.clear();
  return (
    <Input
      ref={ref}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyles}
      rightIcon={
        <TouchableOpacity onPress={handleClear}>
          <Icon name='close' size={20} color={Colors.lightGrey} />
        </TouchableOpacity>
      }
      {...props}
    />
  );
};

export default MyInput;

const styles = StyleSheet.create({
  inputContainerStyle: {
    margin: 10,
    alignSelf: 'center',
    color: Colors.white,
  },
  inputStyles: {
    color: Colors.white,
  },
});
