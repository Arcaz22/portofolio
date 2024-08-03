import './assets/styles/App.css'
import { ThemeProvider } from './components/ThemeContext';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Journey from './pages/Journey';
import Projects from './pages/Project';

function App() {

  return (
    <>
    <ThemeProvider>
      <Hero />
      <Projects />
      <Journey />
      <Contact />
    </ThemeProvider>
    </>
  )
}

export default App
