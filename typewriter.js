const sentence = "hello there from lighthouse labs \n";
let timeIncrease = 0;

for (const char of sentence) {
  timeIncrease += 50

  setTimeout(() => {
    process.stdout.write(char);
  }, timeIncrease)
};