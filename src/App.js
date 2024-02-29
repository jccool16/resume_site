import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  );
}

export default App;
