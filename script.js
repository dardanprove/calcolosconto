let calculate = document.querySelector('#calculate');




calculate.addEventListener('click', () => {

    let totalBill = document.querySelector('#totalBill').value;

    let tipPercent = document.querySelector('#tipPercent').value;

  




    //validate

    if(totalBill === '' || tipPercent == 0){

        alert('Please enter values');

        return;

    }

    //calculate

    let total = (totalBill * tipPercent) / 100;

    total = total.toFixed(2);

    

    document.getElementById('tip').innerHTML = total;










})