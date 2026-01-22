function CalcIdade(){
  const dataNascimento = new Date(2005, 10, 11);
  const hoje = new Date();
  
  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  const mes = hoje.getMonth() - dataNascimento.getMonth();
  
  if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
    idade--;
  }
  
  return idade;
}

// Atualiza a idade no DOM quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('idade').textContent = CalcIdade();
});
