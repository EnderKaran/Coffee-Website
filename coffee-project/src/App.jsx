import './App.css'
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import HighlightsSection from './components/HighlightsSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';


function App() {
 

  return (
    <>
      <div>
        <Header />
        <AboutSection id={"About"} />
        <HighlightsSection id={"Highlights"} />
        <CallToActionSection id={"CallToAction"} />
        <Footer />
      </div>
    </>
  )
}

export default App
