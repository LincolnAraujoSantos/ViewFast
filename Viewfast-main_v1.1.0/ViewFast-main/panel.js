chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (!tabs || !tabs.length) return;

  const currentTab = tabs[0];

  // Evita páginas internas do Chrome
  if (currentTab.url.startsWith("chrome://")) {
    document.body.innerHTML = "<p style='color:white'>Página não suportada</p>";
    return;
  }

  // Carrega a URL inicial no iframe
  const iframe = document.getElementById("mobileFrame");
  iframe.src = currentTab.url;

  // Referência para o campo de URL
  const urlInput = document.getElementById("urlInput");

  // Função para carregar a URL no iframe
  const loadUrl = () => {
    const url = urlInput.value;
    if (url) {
      // Altera a borda do campo de URL para indicar que a página está carregando
      urlInput.style.borderColor = "#FF7F50"; // Cor da borda enquanto carrega
      iframe.src = url.startsWith("http") ? url : `https://${url}`;
      
      // Adiciona um evento para quando a página no iframe terminar de carregar
      iframe.onload = () => {
        urlInput.style.borderColor = "#dcdcdc"; // Restaura a cor da borda após o carregamento
      };
    }
  };

  // Clique no botão de pesquisa (lupa)
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", loadUrl);

  // Tecla Enter no campo de entrada
  urlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      loadUrl();
    }
  });

  // Funcionalidade de atualização do iframe
  const refreshBtn = document.getElementById("refreshBtn");

  // Evento de clique no botão de atualizar
  refreshBtn.addEventListener("click", () => {
    // Altera a borda para #00BFFF enquanto o conteúdo é recarregado
    urlInput.style.borderColor = "#00BFFF"; 

    iframe.src = iframe.src; // Força o refresh do iframe

    // Após o carregamento da página, restaura a cor da borda
    iframe.onload = () => {
      urlInput.style.borderColor = "#dcdcdc"; // Restaura a cor da borda após o carregamento
    };
  });
});
