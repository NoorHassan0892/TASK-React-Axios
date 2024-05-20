import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/list" Component={PetList} />
        <Route path="/detial/:detialID" Component={PetDetail} />
      </Routes>
    </div>
  );
}

export default App;
