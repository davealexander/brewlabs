import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;
            switch (route.name) {
              case 'index':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'brew':
                iconName = focused ? 'beer' : 'beer-outline';
                break;
              case 'journal':
                iconName = focused ? 'book' : 'book-outline';
                break;
              case 'add':
                iconName = focused ? 'add-circle' : 'add-circle-outline';
                break;
              case 'profile':
                iconName = focused ? 'person' : 'person-outline';
                break;
              default:
                iconName = 'home'; // default icon
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="brew"
          options={{
            title: 'Brew',
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: 'Add',
          }}
        />
        <Tabs.Screen
          name="journal"
          options={{
            title: 'Journal',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}