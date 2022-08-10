import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import HyperlinkText from 'react-native-hyperlink-text';
import ButtonGradient from "./ButtonGradient";

const { width, height } = Dimensions.get("window");

function SvgTop() {
  return (
    <Svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 600"
      xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150"
    >
      <Defs>
        <LinearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#002bdc88"></stop>
          <stop offset="95%" stop-color="#32ded488"></stop>
        </LinearGradient>
      </Defs>
      <Path
        d="M 0,600 C 0,600 0,200 0,200 C 116.92822966507177,158.63157894736844 233.85645933014354,117.26315789473685 313,134 C 392.14354066985646,150.73684210526315 433.5023923444976,225.57894736842104 525,231 C 616.4976076555024,236.42105263157896 758.133971291866,172.42105263157896 869,171 C 979.866028708134,169.57894736842104 1059.9617224880383,230.73684210526318 1150,246 C 1240.0382775119617,261.2631578947368 1340.0191387559807,230.6315789473684 1440,200 C 1440,200 1440,600 1440,600 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-0"
        transform="rotate(-180 720 300)"
      ></Path>
      <Defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#002bdcff"></stop>
          <stop offset="95%" stop-color="#32ded4ff"></stop>
        </linearGradient>
      </Defs>
      <Path
        d="M 0,600 C 0,600 0,400 0,400 C 119.13875598086128,402.4976076555024 238.27751196172255,404.99521531100476 317,430 C 395.72248803827745,455.00478468899524 434.02870813397124,502.51674641148327 530,474 C 625.9712918660288,445.48325358851673 779.6076555023923,340.9377990430622 894,332 C 1008.3923444976077,323.0622009569378 1083.5406698564595,409.7320574162679 1168,437 C 1252.4593301435405,464.2679425837321 1346.2296650717703,432.13397129186603 1440,400 C 1440,400 1440,600 1440,600 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-1"
        transform="rotate(-180 720 300)"
      ></Path>
    </Svg>
  );
}

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>

      <View style={styles.container}>
        <Text style={styles.titulo}>Hola!</Text>
        <Text style={styles.subtitle}>Iniciar sesión con tu cuenta</Text>

        <TextInput placeholder="correo@email.com" style={styles.textInput} />
        <TextInput placeholder="contraseña"
         style={styles.textInput}
         secureTextEntry="true" />

        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>

        <ButtonGradient />

        <Text style={styles.forgotPassword}> ¿No tienes cuenta? 
        <HyperlinkText
          value={' Registrate'}
          baseStyle={styles.base}
        /> 
        </Text>             

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerSVG: {
    width: width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titulo: {
    fontSize: 60,
    color: "#34434D",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  forgotPassword: {
    fontSize: 14,
    color: "gray",
    marginTop: 20
  },
  base: {
    color: 'blue',
    fontSize: 14,
  },
});
