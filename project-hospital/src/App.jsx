import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientList from "./Components/PatientList";
import AddPatient from "./Components/AddPatient";
import EditPatient from "./components/EditPatient";
import ViewPatient from "./components/ViewPatient";
import Cursor from "./Components/cursorComp/cursor";

const App = () => (
  <BrowserRouter>
  <Cursor/>
    <Routes>
      <Route path="/" element={<PatientList />} />
      <Route path="/add" element={<AddPatient />} />
      <Route path="/edit/:id" element={<EditPatient />} />
      <Route path="/view/:id" element={<ViewPatient />} />
    </Routes>
  </BrowserRouter>
);

export default App;
