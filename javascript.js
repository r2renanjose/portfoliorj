// Seleciona todos os links âncora na página
const links = document.querySelectorAll('a[href^="#"]');

// Adiciona um ouvinte de evento de clique a cada link âncora
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Impede o comportamento de rolagem padrão
    
    // Obtém o elemento alvo com base no atributo href do link
    const target = document.querySelector(link.getAttribute('href'));
    
    // Verifica se o elemento alvo existe
    if (target) {
      // Calcula a posição de rolagem do elemento alvo
      const offsetTop = target.offsetTop;
      
      // Suaviza o movimento de rolagem usando a função 'scrollTo'
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});


