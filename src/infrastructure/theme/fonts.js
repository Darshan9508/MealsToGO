import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export const useAppFonts = () => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  return oswaldLoaded && latoLoaded;
};

export const fonts = {
  body: "Oswald_400Regular",
  heading: "Lato_400Regular",
  monospace: "Oswald_400Regular",
};

export const fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700",
};

export const fontSizes = {
  caption: "12px",
  button: "14px",
  body: "16px",
  title: "20px",
  h5: "24px",
  h4: "34px",
  h3: "45px",
  h2: "56px",
  h1: "112px",
};
