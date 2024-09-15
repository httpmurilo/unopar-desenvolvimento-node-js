document.getElementById('cpfForm').addEventListener('submit', function(event) {
    
    event.preventDefault();  
    const cpf = document.getElementById('cpf').value;
    const messageElement = document.getElementById('cpfMessage');
    
    if (validarCPF(cpf)) {
      messageElement.textContent = "CPF válido!";
      messageElement.className = 'sucesso';
    } else {
      messageElement.textContent = "CPF inválido!";
      messageElement.className = 'error';
    }
  });
  
  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); 
    
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false;  
    }
    
    let soma = 0;
    let resto;
  
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
  
    soma = 0;
  
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
  
    return true;
  }
  