import "./App.css";
import Header from "./component/Header/Header";
import Reserv from "./component/Reserv/Reserv";
import Section1 from "./component/Section1/Section1";
import Section2 from "./component/Section2/Section2";
import AboutSection from "./component/AboutSection/AboutSection";
import Services from "./component/Services/Services";
import ContactMe from "./component/ContactMe/ContactMe";
function App() {
  return (
    <>
      <Header />
      <main>
        <Section1 />
        <Reserv />
        <Section2 />
        <AboutSection />
        <Services />
        <ContactMe />
      </main>
    </>
  );
}

export default App;
