import React, { useState } from 'react';
import { InputForm } from './components/InputForm/InputForm';
import { OutputForm } from './components/OutputForm/OutputForm'; 

const App = () => {
  const [sentence, setSentence] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="App">
      <InputForm setSentence={setSentence} loading={loading} />
      <OutputForm sentence={sentence} setLoading={setLoading} />
    </div>
  );
}

export default App;
