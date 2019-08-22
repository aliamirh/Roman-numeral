$(document).ready(function() {
      $("form").submit(function(event) {
          event.preventDefault();
          var number = $("input").val();
          console.log(number);
          var result = romanNumeral(number);
          $(".answer").text("Your roman numeral is: " + result);
        });

      });

    function romanNumeralDigit(place, number) {
      var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
      var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
      var hundreds = ["", "C", "CC", "CCC", "CD", "DC", "DCC", "DCCC", "CM"];
      if (place === 0) {
        return ones[number]
      } else if (place === 1) {
        return tens[number]
      } else if (place === 2) {
        return hundreds[number]
      } else {
        return "Enter a number below 1000."
      }
    }



    function romanNumeral(number) {
      var numberLength = number.length;
      var answer = "";
      for (var i = 0; i < number.length; i++) {
        var place = numberLength - i - 1;
        answer += romanNumeralDigit(place, number[i]);
        if (place > 2) {
          return "Enter a number below 1000"
        }
      }
      return answer;
    };
