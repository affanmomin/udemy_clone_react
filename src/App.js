import './App.css';
import Courses from './components/Courses';
import Main from './components/Main';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Signup from './components/Signup';



function App() {
  return (
    <div className="App">
 <Navbar/>
 <Signup/>
    <Main />
    <Courses/>
    <Footer/>
   
    </div>
  );
}

export default App;
