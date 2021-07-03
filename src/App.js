// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {  
  return (
    <div>
      <Header></Header>

      <main>
        <Contact></Contact>
        <About></About>
        <Project></Project>
        <Resume></Resume>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;