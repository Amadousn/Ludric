import Hero from './components/Hero'
import Results from './components/Results'
import ContactForm from './components/ContactForm'

function App() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      <Hero onCTAClick={scrollToForm} />
      <Results />
      <ContactForm />
    </div>
  )
}

export default App
