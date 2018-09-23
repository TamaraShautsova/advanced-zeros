module.exports = function getZerosCount(number, base) {
  var isPrimeNumber = function(number) {
    for(var i = 2; i < number; i++)
      if(number % i === 0) return false;
    return number !== 1;
  }

  var getPrimaryMult = function(baseNumber){
      var allPrimeNumbers = {};
      var divider = 2;
      var temp = baseNumber;
      while(divider <= baseNumber){
          if (isPrimeNumber(divider)){
              while ( temp % divider == 0){
                temp = temp / divider;
                  if (allPrimeNumbers[divider]){
                    allPrimeNumbers[divider] += 1;
                  } else {
                    allPrimeNumbers[divider] = 1;     
                  }
              }   
          } 
          divider++;
          temp = baseNumber;    
      }
      return allPrimeNumbers;    
  }

  //max pow = 26 according to the task
  primaryMultipliers = getPrimaryMult(base);
  var maxPow         = 26; //could be Number.MAX_SAFE_INTEGER 
  var sumPowParts    = {}
  var results        = []

  for (i in primaryMultipliers){
      sumPowParts[i]=0
      for (var j = 1; j <= maxPow; j++) {
          sumPowParts[i] += Math.floor(number / Math.pow(i, j));
      }
      results.push(sumPowParts[i]/primaryMultipliers[i]);
  }
  var result = Math.trunc(Math.min.apply(Math, results));
  return result;
};