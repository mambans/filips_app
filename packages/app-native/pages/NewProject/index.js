import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Icon, Input, Text, Divider, Button } from 'react-native-elements';
import MyInput from '../../components/MyInput';
import Colors from '../../variables/Colors';

const NewProject = ({
  p_address,
  p_cusomerName,
  p_customerPhoneNumber,
  p_customerEmail,
  navigation,
}) => {
  const [address, setAddress] = useState(p_address);
  const [cusomerName, setCusomerName] = useState(p_cusomerName);
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState(p_customerPhoneNumber);
  const [customerEmail, setCustomerEmail] = useState(p_customerEmail);

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'address':
        setAddress(value);
        break;
      case 'name':
        setCusomerName(value);
        break;
      case 'mobile':
        setCustomerPhoneNumber(value);
        break;
      case 'email':
        setCustomerEmail(value);
        break;
      default:
        break;
    }
  };

  const handleCreate = () => {
    console.log({
      address,
      cusomerName,
      customerPhoneNumber,
      customerEmail,
    });
    navigation.setOptions({ cookie: 'asd' });
    navigation.navigate('project', {
      project: {
        address,
        cusomerName,
        customerPhoneNumber,
        customerEmail,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* <Text h1 h1Style={{ fontSize: 22 }} style={styles.title}>
        Nytt Projekt
      </Text> */}
      <Divider
        style={{ margin: 5 }}
        color={Colors.lightGrey}
        insetType='middle'
        subHeader='Kund'
        subHeaderStyle={{
          fontSize: 20,
          textAlign: 'center',
          color: Colors.white,
          marginBottom: 10,
        }}
        width={1}
        orientation='horizontal'
      />
      <MyInput
        onChangeText={(v) => handleInputChange('address', v)}
        placeholder='Address'
        leftIcon={<Icon name='place' size={24} color={Colors.white} />}
      />
      <MyInput
        onChangeText={(v) => handleInputChange('name', v)}
        placeholder='Namn'
        leftIcon={<Icon name='person' size={24} color={Colors.white} />}
      />
      <MyInput
        onChangeText={(v) => handleInputChange('mobile', v)}
        placeholder='Mobil nr'
        leftIcon={<Icon name='call' size={24} color={Colors.white} />}
      />
      <MyInput
        onChangeText={(v) => handleInputChange('email', v)}
        placeholder='email'
        leftIcon={<Icon name='email' size={24} color={Colors.white} />}
      />
      <Button
        buttonStyle={{ height: 60 }}
        containerStyle={{ width: '100%' }}
        loadingProps={{ animating: true }}
        onPress={handleCreate}
        title='Skapa'
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />
    </View>
  );
};

export default NewProject;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    color: Colors.white,
    marginBottom: 20,
  },
});
