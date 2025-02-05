function atualizarclock() {
    const agora = new Date();
    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    
    const tempoString = `${horas}:${minutos}`;
    
    document.getElementById('clock').textContent = tempoString;
}

// Atualiza o relógio imediatamente
atualizarclock();

// Atualiza o relógio a cada segundo
setInterval(atualizarclock, 60000);

// Selecionar os elementos necessários
const botaoFlutuante = document.querySelector('.botao__flutuante-cadastro');
const opcoesFlutuantes = document.querySelector('.botao__flutuante-opcoes');
const overlay = document.createElement('div');

// Criar o fundo escuro dinamicamente
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Adicionar evento de clique no botão flutuante
botaoFlutuante.addEventListener('click', () => {
  const isActive = opcoesFlutuantes.style.display === 'flex';

  if (isActive) {
    // Esconder botões e fundo escuro
    opcoesFlutuantes.style.display = 'none';
    overlay.style.display = 'none';
  } else {
    // Mostrar botões e fundo escuro
    opcoesFlutuantes.style.display = 'flex';
    overlay.style.display = 'block';
  }
});

// Adicionar evento de clique no fundo escuro para fechar o menu
overlay.addEventListener('click', () => {
  opcoesFlutuantes.style.display = 'none';
  overlay.style.display = 'none';
});