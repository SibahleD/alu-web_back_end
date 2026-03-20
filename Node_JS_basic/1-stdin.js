const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Welcome to Holberton School, what is your name?\n', (name) => {
  process.stdout.write(`Your name is: ${name}\r`);
  readline.close();
});

readline.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
