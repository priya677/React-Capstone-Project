import { Routes, Route } from "react-router-dom"
import Register from "./Pages/Register"
import Movies from "./Pages/Movies"
import Info from "./Pages/Info";
import ShowCase from "./Pages/ShowCase";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Info" element={<Info />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/ShowCase" element={<ShowCase />} />
      <Route path="*" element={<h1>404 not found</h1>}/>
    </Routes>
  );
}

export default App
