// App.js — UniDeal high-fidelity prototype (full navigation)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { colors, spacing } from './src/theme/theme';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import CreateListingScreen from './src/screens/CreateListingScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import ChatScreen from './src/screens/ChatScreen';
import ChatConversationScreen from './src/screens/ChatConversationScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import TransactionQRScreen from './src/screens/TransactionQRScreen';
import MyListingsScreen from './src/screens/MyListingsScreen';
import MySalesScreen from './src/screens/MySalesScreen';
import WalletScreen from './src/screens/WalletScreen';
import TopUpScreen from './src/screens/TopUpScreen';
import VerificationScreen from './src/screens/VerificationScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import HelpCenterScreen from './src/screens/HelpCenterScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TAB_ICONS = { Home: 'home', Services: 'people', Sell: 'add-circle', Chat: 'chatbubble', Profile: 'person' };

const headerBlue = {
  headerShown: true,
  headerStyle: { backgroundColor: colors.primary },
  headerTintColor: colors.primaryForeground,
  headerTitleStyle: { fontWeight: '700' },
};

function MainTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.primaryForeground,
        headerTitleStyle: { fontWeight: '700' },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        tabBarIcon: ({ color, size }) => (<Ionicons name={TAB_ICONS[route.name]} size={size} color={color} />),
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: spacing.md }} onPress={() => navigation.navigate('Notifications')}>
            <Ionicons name="notifications-outline" size={22} color={colors.primaryForeground} />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Image source={require('./assets/logo.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
              <Text style={{ color: colors.primaryForeground, fontSize: 16, fontWeight: '700' }}>UniDeal</Text>
            </View>
          ),
          headerTitleAlign: 'left',
        }}
      />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Sell" component={CreateListingScreen} options={{ title: 'Create Listing' }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ title: 'Messages' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ ...headerBlue, title: 'Reset Password' }} />
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ ...headerBlue, title: 'Product' }} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ ...headerBlue, title: 'Checkout' }} />
          <Stack.Screen name="TransactionQR" component={TransactionQRScreen} options={{ ...headerBlue, title: 'Transaction' }} />
          <Stack.Screen name="ChatConversation" component={ChatConversationScreen} options={{ ...headerBlue, title: 'Chat' }} />
          <Stack.Screen name="MyListings" component={MyListingsScreen} options={{ ...headerBlue, title: 'My Listings' }} />
          <Stack.Screen name="MySales" component={MySalesScreen} options={{ ...headerBlue, title: 'My Sales' }} />
          <Stack.Screen name="Wallet" component={WalletScreen} options={{ ...headerBlue, title: 'Wallet' }} />
          <Stack.Screen name="TopUp" component={TopUpScreen} options={{ ...headerBlue, title: 'Top Up' }} />
          <Stack.Screen name="Verification" component={VerificationScreen} options={{ ...headerBlue, title: 'Verification' }} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ ...headerBlue, title: 'Notifications' }} />
          <Stack.Screen name="HelpCenter" component={HelpCenterScreen} options={{ ...headerBlue, title: 'Help Center' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
