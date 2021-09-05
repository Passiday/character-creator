import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="horizonPane"></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
