import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPageController from './controllers/LoginPageController';
import HeaderView from "./views/HeaderView";
import MainPageController from "./controllers/MainPageController";
import DetailPageControllers from './controllers/DetailPageControllers';

function App() {

  return (
   <div>
<BrowserRouter>
<HeaderView/>
<Routes>
<Route  path="/" element={<LoginPageController/>}/>
<Route  path="/home" element={<MainPageController/>}/>
<Route  path="/coin/:id" element={<DetailPageControllers/>}/>


</Routes>

</BrowserRouter>

   </div>
  )}

export default App
