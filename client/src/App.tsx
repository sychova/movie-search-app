import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <MantineProvider>
      <NavBar>TODO</NavBar>
      <Main>TODO</Main>
    </MantineProvider>
  );
}

export default App;
