import EmployeeDashboard from "./Pages/EmployeeDashboard";
import Login from "./Pages/Login";
import { Routes , Route } from "react-router-dom";
import { ProtectedRoute } from "./utils/validation";

function App() {
 

  return (
    <>
   <Routes>
    <Route path="/" element={
      <ProtectedRoute>
        <EmployeeDashboard/>
      </ProtectedRoute>
    }/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
    
    </>
  )
}

export default App;
