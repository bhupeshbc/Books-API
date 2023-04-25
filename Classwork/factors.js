function primeFactors(num) {
    let factors = [];
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        factors.push(i);
        num /= i;
      }
    }
    return factors;

    
  }

  console.log(primeFactors(33));
  

