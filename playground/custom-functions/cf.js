


function calculateBill(billAmount, taxRate) {
   console.log('Running Function'); 
   const total = billAmount * 1 + taxRate;
   return total;
}
const mytotal = calculateBill(100, 0.13);
const mytotal2 = calculateBill(50, 0.13);
console.log(mytotal, mytotal2);