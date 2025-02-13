
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Main from "./pages/Main";
import Research from "./pages/Research";
import SuggestionsForm from "./pages/SuggestionsForm";
import UserForm from "./pages/UserForm";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<Main />} />
        <Route path="/pesquisas" element={<Research />} />
        <Route path="/sugestoesEDenuncias" element={<SuggestionsForm />} />
        <Route path="/usuarios" element={<UserForm />} />
        <Route path="/sucesso" element={<Success />} />

        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
