var Javabuzz = function() {};

Javabuzz.prototype.isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this.isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this.isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return this.isDivisibleBy(number, 15);
};

Javabuzz.prototype.says = function(number) {
  if(this.isDivisibleByFifteen(number)) {
      return "JavaBuzz";
  } 
  if(this.isDivisibleByFive(number)) {
      return "Buzz";
  } 
  if(this.isDivisibleByThree(number)) {
      return "Java";
  } 
  return number;
};

