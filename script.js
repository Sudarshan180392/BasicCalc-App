let calcu=document.querySelector('.btn-container')
    calcu.addEventListener('click', (e)=>{
        const value1 = document.querySelector('.frno').value
        const value2= document.querySelector('.secno').value
         let num1 =parseFloat(value1)
         let num2 =parseFloat(value2)
        let ops = e.target.classList[0]
        let result;
        switch(ops){
            case 'add':
                result = num1+num2
                break;
            case 'sub': 
            result = num1-num2
                break;
            case 'mult': 
            result = num1*num2
                break;
            case 'div': 
            result = num2 !==0 ? num1/num2 : "Divide by 0 error"
                break;
            default: 
            alert("Unknown operation, Try again")

        }
        alert("Result is: " + result)
    })