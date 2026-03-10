import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Alert, Button, Platform } from 'react-native';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ThemedView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ThemedText
          type="title"
          style={{
            margin: 16,
          }}
        >
          Hello World!
        </ThemedText>
        <Button 
          title='Aperte aqui'
          onPress={() => Alert.alert('Informação:', `Olá ${Platform.OS}! Eu me chamo Raimundo`)}
        />
      </ThemedView>
    </ThemeProvider>
  );
}