import React, { useContext, useEffect, useState } from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import FrontPage from '..';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../variables/Colors';
import NewProject from '../NewProject';
import Project from '../Project';
import SignInScreen from '../SinginScreen';
import SplashScreen from '../SplashScreen';
import AccountPage from '../Account';
import AuthContext from '../../Auth/AuthContext';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
});

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const {
    isSignedIn,
    user: { username },
    loading,
  } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      initialRouteName='home'
      drawerContent={(props) => {
        return (
          <View style={styles.drawer}>
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
      {loading ? (
        <Drawer.Screen
          name='splash'
          options={{
            title: 'loading...',
          }}
          component={SplashScreen}
        />
      ) : isSignedIn ? (
        <>
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
          <Drawer.Screen
            name='account'
            options={{
              title: username,
              drawerIcon: ({ focused, color, size }) => (
                <Icon color={color} size={size} name={focused ? 'person' : 'person'} />
              ),
            }}
            component={AccountPage}
          />
        </>
      ) : (
        <Drawer.Screen name='Singin' options={{ title: 'Singin' }} component={SignInScreen} />
      )}
    </Drawer.Navigator>
  );
};

export default MyDrawer;
