import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Education />
        <Skills />
        <Certificates />
      </main>
    </div>
  );
}

export default App;
