# Viewfast Preview

Viewfast Preview é uma extensão para Google Chrome que permite visualizar a página atual em formato mobile diretamente em um painel lateral (Side Panel), facilitando testes rápidos de responsividade sem precisar redimensionar a janela ou usar o DevTools.

## Funcionalidades

- Abertura de painel lateral ao clicar no ícone da extensão
- Exibição da aba ativa em um iframe com layout mobile
- Simulação visual de dispositivo móvel
- Remoção automática de headers que bloqueiam iframe (X-Frame-Options, CSP)
- Atualização automática da URL exibida conforme a aba ativa

### Como funciona

1. O usuário acessa qualquer página web
2. Clica no ícone da extensão no Chrome
3. O painel lateral é aberto automaticamente
4. A URL da aba ativa é carregada em um iframe
5. A página é exibida em um container com proporção mobile

### Como usar

1. Navegue até a página que deseja visualizar em modo mobile
2. Clique no ícone da extensão Viewfast Preview
3. O painel lateral será aberto automaticamente
4. A página atual será exibida no formato mobile

### Estrutura do Projeto
├── manifest.json
├── background.js
├── panel.html
├── panel.js
├── panel.css
├── icons/
│   └── icon.png
└── README.md

### Descrição dos Arquivos

`manifest.json`: Define as configurações da extensão (Manifest V3), permissões necessárias, ícones e configuração do Side Panel.
`background.js`: Service Worker responsável por:
- Registrar regras de remoção de headers via declarativeNetRequest
- Abrir o painel lateral ao clicar no ícone da extensão

`panel.html`: Estrutura HTML do painel lateral que contém o iframe de visualização mobile.
`panel.css`: Estilos do painel lateral, incluindo:
1. Layout do “dispositivo”
2. Dimensões mobile
3. Ajustes responsivos conforme o tamanho do painel

`panel.js`: Lógica responsável por:
1. Identificar a aba ativa
2. Validar URLs suportadas
3. Carregar a página atual dentro do iframe

### Tecnologias Utilizadas

JavaScript (Vanilla JS)
HTML5
CSS3
Chrome Extensions API (Manifest V3)

### Permissões Utilizadas

- sidePanel: Necessária para abrir e controlar o painel lateral da extensão.
- tabs: Utilizada para acessar informações da aba ativa, incluindo a URL atual.
- declarativeNetRequest: Usada para remover headers de segurança que impedem o carregamento de páginas em iframe.
- host_permissions (<all_urls>): Permite que qualquer URL seja carregada no iframe do painel lateral.

### Observações

- Algumas páginas podem não funcionar corretamente caso utilizem proteções adicionais contra iframe
- Páginas internas do Chrome (chrome://) não são suportadas
- A extensão não altera o conteúdo da página original, apenas a exibe no painel lateral

------------------------------------------------------

# English version

# Viewfast Preview

Viewfast Preview is a Google Chrome extension that allows you to preview the current page in a mobile layout directly inside a Side Panel, making it easy to quickly test responsiveness without resizing the browser window or opening DevTools.

## Features

- Side Panel opening by clicking the extension icon
- Active tab preview inside a mobile-style iframe
- Mobile device visual simulation
- Automatic removal of iframe-blocking headers (X-Frame-Options, CSP)
- Automatic loading of the active tab URL

### How it works

1. The user navigates to any webpage
2. Clicks the Viewfast Preview extension icon
3. The Side Panel opens automatically
4. The active tab URL is loaded into an iframe
5. The page is displayed inside a mobile-sized container

### How to use

1. Open the webpage you want to preview
2. Click the Viewfast Preview extension icon
3. The Side Panel will open automatically
4. The page will be displayed in mobile format

### Project Structure
├── manifest.json
├── background.js
├── panel.html
├── panel.js
├── panel.css
├── icons/
│   └── icon.png
└── README.md

### File Description

`manifest.json`: Defines extension settings (Manifest V3), permissions, icons, and Side Panel configuration.
`background.js`: Service Worker responsible for:
- Registering header removal rules using declarativeNetRequest
- Opening the Side Panel when the extension icon is clicked

`panel.html`: HTML structure of the Side Panel containing the mobile preview iframe.
`panel.css`: Side Panel styles, including:
1. Mobile device layout
2. Mobile dimensions
3. Responsive adjustments based on panel size

`panel.js`: Main logic responsible for:
1. Detecting the active tab
2. Validating supported URLs
3. Loading the current page into the iframe

### Technologies Used

JavaScript (Vanilla JS)
HTML5
CSS3
Chrome Extensions API (Manifest V3)

### Permissions Used

- sidePanel: Required to open and control the Side Panel.
- tabs: Used to access active tab information and retrieve the current URL.
- declarativeNetRequest: Used to remove security headers that block iframe loading.
- host_permissions (<all_urls>): Allows loading any URL inside the Side Panel iframe.

### Notes

- Some websites may not work correctly due to additional iframe protections
- Chrome internal pages (chrome://) are not supported
- The extension does not modify the original page content; it only displays it in the Side Panel