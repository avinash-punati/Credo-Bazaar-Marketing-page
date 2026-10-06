const fs = require('fs');

async function checkHomePageChunk() {
  const res = await fetch('https://www.creditgenai.com/assets/index-CIT3xRpE.js');
  const text = await res.text();

  // Find all chunk imports like `./xyz.js`
  const matches = text.match(/`\.\/[^`]+\.js`/g) || [];
  console.log('All chunk names in index (' + matches.length + '):', matches);

  for (const m of matches) {
    const chunkName = m.replace(/[`.]/g, '').replace('/', '');
    const url = 'https://www.creditgenai.com/assets/' + chunkName;
    try {
      const cr = await fetch(url);
      const ct = await cr.text();
      // check for loans
      const loanMatches = ct.match(/(?:Personal Loan|Business Loan|Home Loan|Loan Against Property|Education Loan|Gold Loan|Vehicle Loan|Car Loan|MSME Loan|Machinery Loan|Professional Loan)/gi);
      if (loanMatches) {
        console.log(`In ${chunkName}:`, [...new Set(loanMatches)]);
      }
      // check if this is HomePage
      if (ct.includes('CreditGenAI') && (ct.includes('Hero') || ct.includes('navbar') || ct.includes('banner') || ct.includes('footer') || ct.includes('loan'))) {
        console.log(`Possible home/content chunk: ${chunkName}`);
      }
    } catch (e) {}
  }
}

checkHomePageChunk();
