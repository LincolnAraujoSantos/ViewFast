chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (!tabs || !tabs.length) return;

  const currentTab = tabs[0];

  // Evita páginas internas do Chrome
  if (currentTab.url.startsWith("chrome://")) {
    document.body.innerHTML = "<p style='color:white'>Página não suportada</p>";
    return;
  }

  document.getElementById("mobileFrame").src = currentTab.url;
});


