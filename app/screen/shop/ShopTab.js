import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const ShopTab = () => {
  const navigation = useNavigation()
  return (
    <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: 'purple' }, headerTintColor: 'white', drawerStyle: { backgroundColor: '#F0EDED' } }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Geek-Shop', drawerActiveTintColor: 'black', headerRight: () => <TouchableWithoutFeedback onPress={() => navigation.navigate('UserLogin')}><Text style={{ color: 'white', fontSize: 18, paddingRight: 20, fontWeight: 'bold' }}>Login</Text></TouchableWithoutFeedback> }} />
    </Drawer.Navigator>
  )
}

export default ShopTab