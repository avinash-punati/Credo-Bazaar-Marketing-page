const fs = require('fs');

async function checkHomePage() {
  const res = await fetch('https://www.creditgenai.com/assets/HomePage-DVuW3TXL.js');
  const text = await res.text();
  console.log('HomePage size:', text.length);

  // Search for any loan names or products listed on HomePage
  const regex = /["'`][^"'`]*?[Ll]oan[^"'`]*?["'`]/g;
  let matches = text.match(regex) || [];
  console.log('Loan strings in HomePage:', [...new Set(matches)]);

  // Check section headings, cards, products
  const headings = text.match(/<h[1-6][^>]*>.*?<\/h[1-6]>/gi) || [];
  console.log('Headings in HomePage:', headings);

  // Let's also check LandingPage-BtMuxVQb.js
  const res2 = await fetch('https://www.creditgenai.com/assets/LandingPage-BtMuxVQb.js');
  const text2 = await res2.text();
  console.log('LandingPage size:', text2.length);
  const matches2 = text2.match(regex) || [];
  console.log('Loan strings in LandingPage:', [...new Set(matches2)]);
}

checkHomePage();
