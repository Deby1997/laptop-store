
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About'
import Reviews from './Components/Reviews/Reviews';
import Header from './Components/Header/Header';
import NotFound from './NotFound/NotFound';


function App() {
  return (
    <div className="App">


      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/reviews' element={<Reviews></Reviews>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
