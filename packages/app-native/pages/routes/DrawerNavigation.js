import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import FrontPage from '..';
import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import Colors from '../../variables/Colors';
import NewProject from '../NewProject';
import Project from '../Project';

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: Colors.secondary,
  },
});

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName='home'
      backgroundColor='red'
      drawerContent={(props) => {
        console.log('props:', props);
        return (
          <View style={styles.drawer} flex={1}>
            <DrawerItemList {...props} />
          </View>
        );
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: Colors.accent1,
        drawerInactiveTintColor: 'rgb(180,180,185)',
        // drawerLabelStyle: {},
        drawerItemStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Drawer.Screen
        name='home'
        options={{
          title: 'Hem',
        }}
        component={FrontPage}
      />
      <Drawer.Screen
        name='new_project'
        options={{
          title: 'Nytt projekt',
        }}
        component={NewProject}
      />
      <Drawer.Screen name='project' options={{ title: 'Projekt' }} component={Project} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
