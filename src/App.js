import React from 'react';
import './style.css';
import Header from './header';
import Footer from './footer';
import MainContent from './MainContent';

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Page />
    </div>
  );
}
