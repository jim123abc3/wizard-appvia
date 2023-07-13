import { useState } from 'react';
import './App.css'
import StepOne from './components/Step1';
import StepTwo from './components/Step2';
import StepThree from './components/Step3';
import Wizard from './components/Wizard'

export type FormValues = {
  username: string;
  description: string;
  features: string[];
}

const INITIAL_DATA: FormValues = {
  username: '',
  description: '',
  features: [],
}

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormValues>) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  const steps = [
    {
      title: 'First',
      content: <StepOne {...data} updateFields={updateFields} />,
    },
    {
      title: 'Second',
      content: <StepTwo {...data} updateFields={updateFields} />,
    },
    {
      title: 'Last',
      content: <StepThree {...data} />,
    },
  ];

  return (
    <div className="App">
      <h1>Appvia Wizard Demo</h1>
      <Wizard dataFields={data} steps={steps} />
    </div>
  )
}

export default App
