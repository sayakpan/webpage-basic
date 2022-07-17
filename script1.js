for (let i = 7; i < 71; i=i+7) {
  console.log(i);
}
let bank = prompt("Enter Bank to show account balance");
if (bank==""){
    alert('You Have not entered anything');
} else{
switch (bank) {
  case "Kotak":
    alert("Account Balance 5000");
    break;
  case "BOI":
    alert("Account Balance 3700");
    break;
  case "Paytm":
    alert("Account Balance 697");
    break;
  default:
    alert(`You have no Account in ${bank}`);
    break;
}  
}
alert("Refresh to Re-Enter Bank");


