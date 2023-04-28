import Footer from "./components/Footer";
import Header from "./components/Header";
import Messagebox from "./components/Messagebox";
import Table from "./components/DataTable";
import TitleBar from "./components/TitleBar";



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="bg-slate-100">
      <TitleBar />
      <Messagebox/>
      <Table/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
