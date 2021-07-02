// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Header></Header>

      <main>
        {/* <About></About> */}
        <Project></Project>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;