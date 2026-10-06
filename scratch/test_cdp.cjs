const http = require('http');
const { spawn } = require('child_process');

async function automate() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--window-size=1280,900',
    'https://www.creditgenai.com/apply'
  ]);

  // wait 3 seconds
  await new Promise(r => setTimeout(r, 3000));

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json');
    const tabs = await listRes.json();
    console.log('Open tabs:', tabs.map(t => ({ title: t.title, url: t.url, ws: t.webSocketDebuggerUrl })));
  } catch (e) {
    console.error('CDP connect error:', e.message);
  } finally {
    proc.kill();
  }
}

automate();
