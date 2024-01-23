import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomTab from './src/components/TabNavigator/customTab';
import CustomDrawer from './src/components/Drawer/customDrawer';
import Portfolio from './src/components/Portfolio/comp_portfolio';
import Home from './src/components/Home/comp_home';
import Add_assets from './src/components/Home/add_assets';
import Transactions from './src/components/Share/transactions';
import NFTs from './src/components/NFTs/comp_NFTs';
import Details_NFTs from './src/components/NFTs/details_NFTs';
import Receive_modal from './src/components/Home/receive_modal';
import Send_modal from './src/components/Home/send_modal';
import Confirmation_modal from './src/components/Home/confirmation_modal';
import Swap_modal from './src/components/Home/swap_modal';
import ScanQR from './src/components/ScanQR/comp_scan_QRCode';
import History from './src/components/History/comp_history';
import Details_history from './src/components/History/details_history';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTab {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="NFTs" component={NFTs} />
      <Tab.Screen name="ScanQR" component={ScanQR} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Portfolio" component={Drawers} />
    </Tab.Navigator>
  );
};

const Drawers = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Portfolio_Drawer"
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerPosition: 'left',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Portfolio_Drawer" component={Portfolio} />
    </Drawer.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Details_history" component={Details_history} />
      <Stack.Screen name="Details_NFTs" component={Details_NFTs} />
      <Stack.Screen name="Swap" component={Swap_modal} />
      <Stack.Screen name="Confirmation" component={Confirmation_modal} />
      <Stack.Screen name="Send" component={Send_modal} />
      <Stack.Screen name="Receive" component={Receive_modal} />
      <Stack.Screen name="Transactions" component={Transactions} />
      <Stack.Screen name="Add_assets" component={Add_assets} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator = () => {
  return <RootNavigator />;
};
