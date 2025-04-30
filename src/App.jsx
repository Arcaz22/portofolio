import './assets/styles/App.css';
import { ThemeProvider } from './components/ThemeContext';
import Hero from './pages/Hero';
import Timeline from './pages/Timeline';
import Sidebar from './components/Sidebar';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Sidebar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Timeline />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;
