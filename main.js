import { setupCounter } from './counter.js';

const root = (document.querySelector('#app').innerHTML = `
Hi!
`);
root.setupCounter();
setupCounter(document.querySelector('#counter'));
