import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="px-2 mt-8">
      <Text className="text-2xl text-pink-500 dark:text-white">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
