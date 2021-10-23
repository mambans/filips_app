import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import MyInput from '../../components/MyInput';
import Colors from '../../variables/Colors';

const index = () => {
  const [state, setState] = useState();
  const handleSingin = () => {
    console.log('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>
        Signin
      </Text>
      {/* <MyInput title='username' leftIcon={<Icon name='person' color={Colors.white} />} />
      <MyInput title='password' leftIcon={<Icon name='lock' color={Colors.white} />} /> */}
      {/* <Button
        buttonStyle={{}}
        containerStyle={{ marginVertical: 25 }}
        // icon={<Icon name='project' size={15} color='#ffffff' />}
        // iconContainerStyle={{ background: '#000' }}
        loadingProps={{ animating: true }}
        onPress={() => navigation.navigate('new_project')}
        title='Singin'
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      /> */}
    </View>
  );
};
export default index;

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
