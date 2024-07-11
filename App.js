import { NativeBaseProvider, Box } from "native-base";
import { HomePage } from "./src/component/HomePage";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomePage/>
    </NativeBaseProvider>
  );
}

