// chrome.action.onClicked.addListener(async (tab) => {
//   await chrome.sidePanel.open({
//     tabId: tab.id
//   });
// });

const RULE_ID = 1;

// Configura as regras de modificação de cabeçalho ao instalar/atualizar
chrome.runtime.onInstalled.addListener(() => {
  const rules = [
    {
      id: RULE_ID,
      priority: 1,
      action: {
        type: "modifyHeaders",
        responseHeaders: [
          { header: "X-Frame-Options", operation: "remove" },
          { header: "Content-Security-Policy", operation: "remove" },
          { header: "Frame-Options", operation: "remove" }
        ]
      },
      condition: {
        urlFilter: "*",
        resourceTypes: ["sub_frame"]
      }
    }
  ];

  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [RULE_ID],
    addRules: rules
  });
});

// Abre o painel lateral ao clicar no ícone
chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.sidePanel.open({ tabId: tab.id });
  } catch (error) {
    console.error("Erro ao abrir sidePanel:", error);
  }
});
