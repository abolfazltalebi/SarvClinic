import "./App.css";
import Header from "./component/Header/Header";
import Reserv from "./component/Reserv/Reserv";
import Section1 from "./component/Section1/Section1";
import Section2 from "./component/Section2/Section2";
import AboutSection from "./component/AboutSection/AboutSection";
function App() {
  return (
    <>
      <Header />
      <main>
        <Section1 />
        <Reserv />
        <Section2 />
        <AboutSection />
      </main>
    </>
  );
}

export default App;
