import { Route, Routes } from "react-router-dom";
import "./app.css";
import Login from "./components/Login";
import Administrador from "./components/administador/Administrador";
import AdminInicio from "./components/administador/AdminInicio";
import AdminReportes from "./components/administador/AdminReportes";
import AdminUsuarios from "./components/administador/AdminUsuarios";
import AdminNotas from "./components/administador/AdminNotas";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Administrador/" element={<Administrador />} >
        <Route path="Inicio" element={<AdminInicio />} />
          <Route path="Usuarios" element={<AdminUsuarios />} />
          <Route path="Reportes" element={<AdminReportes />} />
          <Route path="Notas" element={<AdminNotas />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
