import "./App.css";
import Filter from "./components/Filter";
import ShadowFilter from "./components/ShadowFilter";
import Desktop from "./pages/Desktop";
import Start from "./pages/Start";
import "./styles/general.css";

function App() {
  return (
    <>
      <ShadowFilter></ShadowFilter>
      <Filter></Filter>
      <Start></Start>
      <Desktop></Desktop>
    </>
  );
}

export default App;
