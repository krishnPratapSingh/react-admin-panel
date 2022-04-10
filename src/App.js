import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import SideMenu from './components/sidebarCollapsible/SidebarCollapsible';
import { useState } from 'react';
import "./App.css"


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [inactive, setInactive] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <SideMenu onCollapse={(inactive) => {
          console.log(inactive)
          setInactive(inactive)
        }}/>
        <div className={`container ${inactive ? "inactive" : ""}`}>
        <Routes>
            <Route path="/"> 
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="users">
                <Route index element={<List/>}/>
                <Route path=":userId" element={<Single/>}/>
                <Route path="new" element={<New/>}/>
              </Route>
              <Route path="products">
                <Route index element={<List/>}/>
                <Route path=":productId" element={<Single/>}/>
                <Route path="new" element={<New/>}/>
              </Route>
            </Route>
          </Routes>
        </div>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
