import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useFonts, JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono'
import { NotoSans_400Regular } from '@expo-google-fonts/noto-sans'
import * as Localization from 'expo-localization'
import { SplashScreen, Stack } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import React, { useState, useEffect, useRef } from 'react'
import { Platform, useColorScheme } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NotifierWrapper } from 'react-native-notifier'
import Locales from '@/lib/locales'
import { Setting } from '@/lib/types'
import { StackHeader, Themes } from '@/lib/ui'
import { useFramerStore } from '@/lib/utils'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  initialRouteName: '(tabs)' // Ensure that reloading on `/modal` keeps a back button present.
}

SplashScreen.preventAutoHideAsync() // Prevent the splash screen from auto-hiding before asset loading is complete.

async function getToken(key: string) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  }
}

function RootLayout() {
  const notifierRef = useRef(null)
  const [loaded, error] = useFonts({ NotoSans_400Regular, JetBrainsMono_400Regular, ...MaterialCommunityIcons.font })
  useEffect(() => { if (error) throw error }, [error])
  useEffect(() => { if (loaded) { SplashScreen.hideAsync() } }, [loaded])
  if (!loaded) { return null }
  return (
    <GestureHandlerRootView>
      <NotifierWrapper>
        <RootLayoutNav />
      </NotifierWrapper>
    </GestureHandlerRootView>
  )
}

const RootLayoutNav = () => {

  const colorScheme = useColorScheme()
  const [settings, setSettings] = useState<Setting>({ theme: 'auto', color: 'default', language: 'auto' })
  const { openedProjectName } = useFramerStore()

  // Load settings from the device
  useEffect(() => {
    if (Platform.OS !== 'web') {
      SecureStore.getItemAsync('settings').then((result) => {
        if (result === null) { SecureStore.setItemAsync('settings', JSON.stringify(settings)).then((res) => console.log(res)) }
        setSettings(JSON.parse(result ?? JSON.stringify(settings)))
      })
      // Check auth token
      SecureStore.getItemAsync('auth_token').then((result) => {
        if (result) {
          //Alert.alert(result)
        }
      })
    } else {
      setSettings({ ...settings, theme: colorScheme ?? 'light' })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (settings.language === 'auto') {
      Locales.locale = Localization.getLocales()[0].languageCode ?? 'en'
    } else {
      Locales.locale = settings.language
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PaperProvider theme={Themes[settings.theme === 'auto' ? (colorScheme ?? 'dark') : settings.theme][settings.color]}>
      <Stack screenOptions={{ animation: 'ios', header: (props) => (<StackHeader navProps={props} children={undefined} />) }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="search" options={{ title: Locales.t('search') }} />
        <Stack.Screen name="modal" options={{ title: Locales.t('titleModal'), presentation: 'modal' }} />
        <Stack.Screen name="open-project/[id]" options={{ title: openedProjectName, presentation: 'modal' }} />
      </Stack>
    </PaperProvider>
  )
}

export default RootLayout
