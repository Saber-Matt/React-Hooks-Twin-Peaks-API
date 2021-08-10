//this page holds functions and states
//please note, this page is not a page.
import React, { useState } from 'react';  
import Load from '../components/app/quote/Load';
import Quote from '../components/app/quote/Quote.jsx';
import { peaksFetch } from '../services/twinPeaksApi.jsx';

//functional component goes here:
const TwinPeaks = () => {
  //const [state, setState] = useState();

  const [currentQuote, setCurrentQuote] = useState('');

  const handleClick = async () => {
    const res = await peaksFetch();
    const quote = JSON.stringify(res);
    setCurrentQuote(quote);
  };
  return (
    <>
      <Quote currentQuote={currentQuote}/>
      <Load onClick={handleClick} />
    </>
  );
};


export default TwinPeaks;
