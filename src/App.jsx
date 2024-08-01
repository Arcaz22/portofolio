import './assets/styles/App.css'
import { ThemeProvider } from './components/ThemeContext';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Projects from './pages/Project';

function App() {

  return (
    <>
    <ThemeProvider>
      <Hero />
      <Projects />
      <Contact />
    </ThemeProvider>
    </>
  )
}

export default App
