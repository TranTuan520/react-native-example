import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

// Screens
import HomeScreen from 'features/home/presentations/screens/HomeScreen'
import ProfileScreen from 'features/profile/presentations/screens/ProfileScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BTab1 from 'features/b-tab1/presentation/screens/BTab1'
import BTab2 from 'features/b-tab2/presentation/screens/BTab2'
import BTab3 from 'features/b-tab3/presentation/screens/BTab3'

const AppDrawer = createDrawerNavigator()
const AppStackNavigator = createNativeStackNavigator()
const AppBottomTab = createBottomTabNavigator()

const defaultScreenOptions = {
  headerShown: false,
}

const BottomTab = () => {
  return (
    <AppBottomTab.Navigator>
      <AppBottomTab.Screen name={'BTab1'} component={BTab1} options={defaultScreenOptions} />
      <AppBottomTab.Screen name={'BTab2'} component={BTab2} options={defaultScreenOptions} />
      <AppBottomTab.Screen name={'BTab3'} component={BTab3} options={defaultScreenOptions} />
    </AppBottomTab.Navigator>
  )
}

const AppStack = () => {
  return (
    <AppStackNavigator.Navigator>
      <AppStackNavigator.Screen name='HomeScreen' component={HomeScreen} options={defaultScreenOptions} />
      <AppStackNavigator.Screen name='ProfileScreen' component={ProfileScreen} options={defaultScreenOptions} />
    </AppStackNavigator.Navigator>
  )
}

const Drawer = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name='Tab' component={BottomTab} />
      <AppDrawer.Screen name='Stack' component={AppStack} />
    </AppDrawer.Navigator>
  )
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  )
}

export default AppNavigator
