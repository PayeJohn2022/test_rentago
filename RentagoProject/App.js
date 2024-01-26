import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './Screens/Login_Prototype';
import SignupPage from './Screens/SignupPage';
import UserProfilePage from './Screens/UserProfile';
import UserProfileSettingsPage from './Screens/UserProfileSettings';
import SignupConfirmationPage from './Screens/SignupPageConfirmation';
import HomePage from './Screens/Home';
import SignupTermsAndConditionPage from './Screens/SignupPageTermsAndAgreement';
import GoogleMapRegisterSelectPlace from './Screens/GoogleMapRegisterSelectPlace';
import GoogleMapRegisterImage from './Screens/GoogleMapRegisterImage';
import GoogleMapRegisterInformation from './Screens/GoogleMapRegisterInformation'
import GoogleMapSearch from './Screens/GoogleMapSearch';
import GoogleMapRegisterImageConfirmation from './Screens/GoogleMapRegisterImageConfirmation'
import AboutUs from './Screens/AboutUsPage';
import sample from './Screens/sample'
import Test from './Screens/Test'

const Stack = createNativeStackNavigator();

export default function App() {
return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right', // Set the animation option
            }}
        >
helloworld
        </Stack.Navigator>
    </NavigationContainer>
    );
};

