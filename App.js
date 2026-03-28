import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";
import { useAppFonts } from "./src/infrastructure/theme/fonts";
import { AuthenticationContextProvider } from "./src/services/authentication/AuthenticationContext";

export default function App() {
  const fontsLoaded = useAppFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
