import { StatusBar } from 'expo-status-bar'
import React, { useCallback } from 'react'

import { SafeAreaView, StyleSheet } from 'react-native'

import * as SplashScreen from 'expo-splash-screen'

import { DMSans_400Regular, useFonts } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'

import { ThemeProvider } from 'styled-components/native'

import { Home } from '@screens/home'
import theme from 'theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
        <StatusBar style="auto" />
        <Home />
        {/* <Splash  /> */}
      </SafeAreaView>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
