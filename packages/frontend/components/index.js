import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import Colors from '../variables/Colors';

const FrontPage = () => {
  return (
    <View style={styles.container}>
      <Text h1 h1Style={styles.title} style={{}}>
        Filips app
      </Text>
      <Button
        buttonStyle={{}}
        containerStyle={{ marginVertical: 25 }}
        // icon={<Icon name='project' size={15} color='#ffffff' />}
        // iconContainerStyle={{ background: '#000' }}
        loadingProps={{ animating: true }}
        onPress={() => alert('click')}
        title='Skapa nytt projekt'
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />
      <Input
        // containerStyle={{ alignSelf: 'center', flex: 1 }}
        disabledInputStyle={{ background: '#ddd' }}
        // inputContainerStyle={{ alignSelf: 'center', flex: 1 }}
        errorMessage='Inget projekt hittat'
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label='Sök projekt'
        labelStyle={{}}
        labelProps={{}}
        // leftIcon={<Icon name='account-outline' size={20} />}
        leftIconContainerStyle={{}}
        // rightIcon={<Icon name='close' size={20} />}
        rightIconContainerStyle={{}}
        placeholder='projekt name/address/person'
      />
    </View>
  );
};

export default FrontPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.primary,
    textAlign: 'center',
  },
  input: {
    flex: 1,
  },
});
