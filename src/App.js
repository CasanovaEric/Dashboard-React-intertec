import Home from './pages/home/home';
import Login from './pages/login/login';
import List from './pages/list/list';
import Single from './pages/single/single';
import New from './pages/new/new';
import { BrowserRouter, Link, Routes, Route, Switch } from "react-router-dom";
import Usuarios from './components/usuarios/usuarios';
import Productos from './components/productos/productos';
import Categorias from './components/categorias/categorias';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Route index element={<Home/>}/>

          <Route path="products" element={<Login/>}/>
          
          <Route path='users'> 
            <Route index element={<List/>}/>
            <Route path=':userId' element={<Single/>}/>
            <Route path='new' element={<New/>}/>
          </Route> 
          
          <Route path='category'> 
            <Route index element={<New/>}/>
            <Route path=':productId' element={<Single/>}/>
            <Route path='new' element={<New/>}/>
          </Route> 
        </Route>
       </Routes>
    </BrowserRouter>
       
      
    </div>
  );
}

export default App;
