/* eslint-disable max-len */
export const peaksFetch = async () => {

  const getQuote = await fetch('https://damp-cove-34137.herokuapp.com/api/quotes/random');
  const json = await getQuote.json();
  console.log(json.quoteTextOnly);
  return json.quoteTextOnly;
};
