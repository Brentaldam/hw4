const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {

    circumference: function () {
      let circumCir = 2 * Math.PI * r;
      return circumCir;
    },
    area: function () {
      let areaCir = Math.PI * r * r;
      return areaCir;
    },
  };
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
