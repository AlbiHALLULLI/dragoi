import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Base/Home';
import NavigationBar from './components/Base/NavigationBar'
import Create from './components/CRUD/Create';
function App() {
return (
  <>
  <NavigationBar />
  <Routes>
  {/* Home */}
  <Route path="/" element={<Home />} />
  {/* CRUD */}
  {/* <Route path="/readAll" element={<ReadAll />} /> */}
  {/* <Route path="/readOne/:id" element={<ReadOne />} /> */}
  <Route path="/create" element={<Create />} />
  {/* <Route path="/update/:id" element={<Update />} /> */}
  {/* 404 */}
  {/* <Route path="*" element={<Page404 />} /> */}
  </Routes>
  {/* <FooterBar /> */}
  </>
  );
  }
  export default App;
