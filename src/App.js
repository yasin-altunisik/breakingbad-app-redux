import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Characters</Link> |{" "}
        <Link to="/quotes">Quotes</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/char/:char_id" element={<Detail />}></Route>
        <Route path="/quotes" element={<Quotes />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
