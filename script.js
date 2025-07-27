function showCalc(type) {
      const allSections = document.querySelectorAll('.calc-section');
      allSections.forEach(section => {
        section.style.display = 'none'; // Hide all
      });

      const selected = document.getElementById(type);
      if (selected) {
        selected.style.display = 'block'; // Show selected
      }

    }

    let calcu = document.querySelector('.btn-container')
    calcu.addEventListener('click', (e) => {

      const value1 = document.querySelector('.frno').value
      const value2 = document.querySelector('.secno').value
      let num1 = parseFloat(value1)
      let num2 = parseFloat(value2)
      let ops = e.target.classList[0]
      let result;
      switch (ops) {
        case 'add':
          result = num1 + num2
          break;
        case 'sub':
          result = num1 - num2
          break;
        case 'mult':
          result = num1 * num2
          break;
        case 'div':
          result = num2 !== 0 ? num1 / num2 : "Divide by 0 error"
          break;
        default:
          alert("Unknown operation, Try again")

      }
      document.querySelector('.result').innerText = "Result is: " + result;
      document.querySelector('.frno').value = '';
      document.querySelector('.secno').value = '';

    })

    function doTrig(op) {
      const degrees = parseFloat(document.getElementById('trig-input').value);
      const radians = degrees * (Math.PI / 180); // convert to radians
      let result;

      switch (op) {
        case 'sin':
          result = Math.sin(radians);
          break;
        case 'cos':
          result = Math.cos(radians);
          break;
        case 'tan':
          result = Math.tan(radians);
          break;
        case 'cot':
          result = 1/Math.tan(radians)
          break;
        case 'sec':
          result = 1/Math.cos(radians);
          break;
        case 'cosec':
          result = 1/Math.sin(radians);
          break;
        default:
          result = 'Invalid operation';
      }
    if (!isFinite(result) || Math.abs(result) > 1e7) {
      result = 'Infinity';
    }
      document.querySelector('.result').innerText = `Result: ${result}`;
      document.querySelector('#trig-input').value = '';
    }