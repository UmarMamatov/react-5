import './App.css';
import UserInfo from "./pages/UserInfo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserInfo/>}/>
        <Route path='/user/:id' element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
