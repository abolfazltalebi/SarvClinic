import "./App.css";
import Header from "./component/Header/Header";
// import Reserv from "./component/Reserv/Reserv";
import Section1 from "./component/Section1/Section1";
import Section2 from "./component/Section2/Section2";
function App() {
  return (
    <>
      <Header />
      <main>
        <Section1 />
        {/* <Reserv /> */}
        <Section2 />
      </main>
    </>
  );
}

export default App;
