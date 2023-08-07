import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/types/navigationTypes';
import { Colors } from 'src/constants/colors';
import { InitialScreen } from 'src/screens/InitialScreen';
import { ResultsScreen } from 'src/screens/ResultsScreen';
import { QuestionsScreen } from 'src/screens/QuestionsScreen';
import { Screen } from 'src/constants/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenTransparentOption = {
  headerTransparent: true,
  headerTitle: '',
  headerBackTitleVisible: true,
  headerTintColor: Colors.WHITE,
  cardStyle: { backgroundColor: Colors.WHITE },
};

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screen.InitialScreen} screenOptions={screenTransparentOption}>
        <Stack.Screen
          name={Screen.InitialScreen}
          component={InitialScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={Screen.QuestionsScreen}
          component={QuestionsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={Screen.ResultsScreen}
          component={ResultsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
