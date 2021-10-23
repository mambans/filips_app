import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthContext from '../../Auth/AuthContext';
import Colors from '../../variables/Colors';

const index = () => {
  const [state, setState] = useState();
  const {
    user: { username, name, email, mobile },
  } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>
        {username}
      </Text>
      <Text h1 style={styles.title}>
        {name}
      </Text>
      <Text h1 style={styles.title}>
        {email}
      </Text>
      <Text h1 style={styles.title}>
        {mobile}
      </Text>
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
    color: Colors.accent1,
    textAlign: 'center',
    paddingVertical: 3,
    marginVertical: 5,
  },
});
