import {StatusBar, SafeAreaView} from 'react-native';
import Market from "./src/telas/market";

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import produtos from './src/mocks/produtos';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  });

  // se a font não estiver carregada, retornauma view vazia
  if (!fontCarregada) {
    return <AppLoading />
  }
  return <SafeAreaView style={{ flex: 1 }}>
    <Market {...produtos} />
    <StatusBar />
  </SafeAreaView>;
}