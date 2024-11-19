import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import {SafeAreaView, Text, View} from 'react-native';

export type RootStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
  };

const Stack = createNativeStackNavigator<RootStackParamList>();

function App():JSX.Element{
    return(
        <SafeAreaView>
            <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>

        <View>
            <Text>App</Text>
            <Text>App</Text>
            <Text>App</Text>
            <Text>App</Text>
            <Text>App</Text>
            <Text>App</Text>
            <Text>App</Text>
            <Text>App</Text>
            <Text>App</Text>
            <Text>App</Text>
        </View>
        </SafeAreaView>
    );
}

export default App;
