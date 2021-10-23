import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input, Icon, SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
// import { Icon } from 'react-native-vector-icons';
import Colors from '../variables/Colors';

const FrontPage = ({ navigation }) => {
  navigationOptions = {
    drawerIcon: ({ tintColor }) => <Icon name='home' style={{ fontSize: 24, color: tintColor }} />,
  };

  const [searchInput, setSearchInput] = useState();

  const handleSearchChange = (v) => setSearchInput(v);

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
      {searchInput ? (
        <Button
          buttonStyle={{ height: 60, width: 80 }}
          containerStyle={{ height: 60, width: 80, margin: 10 }}
          loadingProps={{ animating: true }}
          onPress={() => alert('click')}
          title='Sök'
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
        />
      ) : (
        <View style={{ height: 100 }} />
      )}
    </View>
  );
};

export default FrontPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
