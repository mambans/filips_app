import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, SearchBar, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../variables/Colors';

const Project = ({ route, navigation }) => {
  const { project } = route?.params || {};
  console.log('project:', project);
  const [searchInput, setSearchInput] = useState();
  const [address, setAddress] = useState(project.address);
  console.log('address:', address);
  const [cusomerName, setCusomerName] = useState(project.cusomerName);
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState(project.customerPhoneNumber);
  const [customerEmail, setCustomerEmail] = useState(project.customerEmail);

  const handleCreate = () => {
    console.log({
      address,
      cusomerName,
      customerPhoneNumber,
      customerEmail,
    });
  };

  const handleSearchChange = (v) => setSearchInput(v);

  if (!project) {
    return (
      <View>
        <Button
          buttonStyle={{}}
          containerStyle={{ marginVertical: 25 }}
          // icon={<Icon name='project' size={15} color='#ffffff' />}
          // iconContainerStyle={{ background: '#000' }}
          loadingProps={{ animating: true }}
          onPress={() => navigation.navigate('new_project')}
          title='Skapa nytt projekt'
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
        />
        <SearchBar
          placeholder='name/address/person'
          onChangeText={handleSearchChange}
          value={searchInput}
          inputContainerStyle={styles.inputContainerStyle}
          onBlur={() => console.log('onBlur')}
        />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View styles={styles.customerContainer}>
        <Text h4 style={styles.h4Style}>
          {address}
        </Text>
        <Text h4 style={styles.h4Style}>
          {cusomerName}
        </Text>
        <Text h4 style={styles.h4Style}>
          {customerPhoneNumber}
        </Text>
        <Text h4 style={styles.h4Style}>
          {customerEmail}
        </Text>
      </View>
      <Button
        buttonStyle={{ height: 60 }}
        containerStyle={{ width: '100%', marginVertical: 10 }}
        loadingProps={{ animating: true }}
        onPress={handleCreate}
        title='Skapa ny ritning'
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />
    </ScrollView>
  );
};
export default Project;

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
  },
  inputContainerStyle: {
    padding: 10,
    alignSelf: 'center',
  },
  input: {
    color: Colors.white,
  },
  h4Style: {
    color: Colors.white,
    paddingVertical: 3,
    marginVertical: 5,
  },
  customerContainer: {},
});
