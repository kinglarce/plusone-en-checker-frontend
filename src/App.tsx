import React, { useState } from 'react';
import { InputForm } from './components/InputForm/InputForm';

const App = () => {
  const [sentence, setSentence] = useState<string>("");

  return (
    <div className="App">
      <InputForm setSentence={setSentence} />
    </div>
  );
}

export default App;
