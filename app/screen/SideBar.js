import { View, Text } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';

const SideBar = ({ ...props }) => {
  const handleLogout = () => {
    navigation.navigate('Home');
    console.log("Logout")
  }
  const navigation = useNavigation()
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ margin: 15 }}>
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>Sonam Kumari</Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>sona@gmail.com</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

export default SideBar