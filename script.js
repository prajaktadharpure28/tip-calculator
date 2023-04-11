window.onload = () =>
{
    document.querySelector('#calculate').onclick = calculateTip;
}
function calculateTip()
{
    let bill = document.querySelector('#bill').value;
    let service = document.querySelector('#services').value;
    let split = document.querySelector('#split').value;
    if(bill === '' || service == 0)
    {
        alert('Please enter values');
        return;
    }
    if(split === '' || split <= 1)
    {
        split = 1;
        document.querySelector('#each').style.display = 'none';
    }
    else
    {
        document.querySelector('#each').style.display = 'block';
    }
    let total = (bill * service) / split;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.querySelector('#total').innerHTML = total;
}