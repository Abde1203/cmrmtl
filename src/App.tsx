import { useState } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const toggleLanguage = () => {
    setLanguage(lang => (lang === 'fr' ? 'en' : 'fr'));
  };

  return (
    <div className='App'>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Content language={language} />
      <Footer />
    </div>
  );
}

export default App;
