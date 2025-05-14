import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientList from "./components/PatientList";
import AddPatient from "./components/AddPatient";
import EditPatient from "./components/EditPatient";
import ViewPatient from "./components/ViewPatient";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PatientList />} />
      <Route path="/add" element={<AddPatient />} />
      <Route path="/edit/:id" element={<EditPatient />} />
      <Route path="/view/:id" element={<ViewPatient />} />
    </Routes>
  </BrowserRouter>
);

export default App;
