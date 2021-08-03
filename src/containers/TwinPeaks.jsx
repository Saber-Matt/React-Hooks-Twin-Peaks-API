//this page holds functions and states
//please note, this page is not a page.
import Quote from '../components/app/quote/Quote';
import React, { useState } from 'react';
import Button from '../components/app/quote/Load';

//functional component goes here:
const TwinPeaks = () => {
  //const [state, setState] = useState();
  const [currentQuote, setCurrentQuote] = useState('');
  return (
    <>
      <Quote currentQuote={currentQuote}/>
      <Button />
    </>
  );
};


export default TwinPeaks;
