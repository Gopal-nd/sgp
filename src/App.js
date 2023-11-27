
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Sem from './pages/Sem';
import Sem3 from './pages/Sem3'
import Sem2 from './pages/Sem2'
import Sem1 from './pages/Sem1'
import Sem4 from './pages/Sem4'
import Sem5 from './pages/Sem5'
import Sem6 from './pages/Sem6'
import Sem7 from './pages/Sem7'
import Sem8 from './pages/Sem8'
import Navbar from './componets/Navbar'


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Sem3/>}/>
        <Route path="/sem2" element={<Sem2/>}/>
        <Route path="/sem1" element={<Sem1/>}/>
        <Route path="/sem4" element={<Sem4/>}/>
        <Route path="/sem5" element={<Sem5/>}/>
        <Route path="/sem6" element={<Sem6/>}/>
        <Route path="/sem7" element={<Sem7/>}/>
        <Route path="/sem8" element={<Sem8/>}/>
        <Route path="*" element={<h1> PAGE NOT FOUND 404</h1>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
