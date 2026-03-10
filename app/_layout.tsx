import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { Alert, Button, Platform, TextInput } from 'react-native';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // effect
  const [nome, setNome] = React.useState('Raimundo');

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
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            backgroundColor: 'lightgray',
            borderWidth: 1,
            width: '80%',
            paddingHorizontal: 8,
            marginBottom: 16,
          }}
          value={nome}
          onChangeText={setNome}
           placeholder="Digite algo aqui..."
          >
        </TextInput>
        <Button 
          title='Aperte aqui'
          onPress={() => Alert.alert('Informação:', `Olá ${nome}! você usa ${Platform.OS}.`)}
        />
      </ThemedView>
    </ThemeProvider>
  );
}