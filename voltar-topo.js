// Seleciona o elemento do botão de voltar ao topo
const voltarTopoButton = document.getElementById('voltarTopo');

// Adiciona um ouvinte de evento de rolagem à janela
window.addEventListener('scroll', () => {
  // Verifica a posição de rolagem da página
  if (window.pageYOffset > 100) {
    // Se a posição de rolagem for maior que 100 pixels, mostra o botão
    voltarTopoButton.classList.add('show');
  } else {
    // Caso contrário, esconde o botão
    voltarTopoButton.classList.remove('show');
  }
});

// Adiciona um ouvinte de evento de clique ao botão de voltar ao topo
voltarTopoButton.addEventListener('click', () => {
  // Suaviza o movimento de rolagem usando a função 'scrollTo'
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});