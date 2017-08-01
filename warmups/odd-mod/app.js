function odd(int1, int2) {
  if (int1 % 10 === int2 % 10) {
    return true;
  }
}

console.log(odd(17, 27));