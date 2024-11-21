import Header from "./components/Header";
import Container from "./components/Container"
import SocialSection from "./components/SocialSection";
import Features from "./components/Features";
import './App.css';
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Trial from "./components/Trial";
import Footer from "./components/Footer";
import FeatureSection from "./components/FeatureSection";

function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
      <SocialSection/>
      <Features/>
      <Testimonials/>
      <FeatureSection />
      <FAQ /> 
      <Blog />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;
