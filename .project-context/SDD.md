# SDD — FaltaFilme

## Objetivo
Aplicativo de um cinema para facilitar a compra online de ingressos, com interface baseada no Figma e dados de filmes obtidos do TMDB. O pagamento é simulado.

## Fontes
- Figma: https://www.figma.com/design/dmoje1CnTD02bAJNuBly6i/FaltaFilme---Cinemas-FaltaOque?node-id=2380-1311
- Atividade SENAI: documento SA1 - 4DM.pdf, fornecido pelo usuário e externo a este repositório; os principais requisitos estão resumidos abaixo.
- Instruções técnicas: `AGENTS.md` na raiz do projeto.

## Tecnologia e arquitetura
- React Native, Expo, JavaScript e Styled Components.
- Expo Router para navegação, com rotas em `src/app/` e código que não é rota fora dessa pasta.
- TMDB como fonte das informações dos filmes; consultar sua documentação e configurar a credencial localmente quando a integração for implementada.
- AsyncStorage para persistir localmente os demais dados que precisem de tratamento ou armazenamento no app, incluindo conta, login e senha, sessões, seleções, pedidos e histórico.
- O app é local ao dispositivo: não há sincronização nem disponibilidade de assentos compartilhada entre aparelhos. AsyncStorage não é criptografado; o fluxo de pagamento é uma simulação.

## Funcionalidades e regras de negócio
- Seguir telas, componentes e design system do Figma. O fluxo inclui abertura, acesso, login, cadastro, Home, busca, detalhes do filme, data, assentos, tipo de ingresso, pagamento, confirmação, pedidos e sobre o cinema.
- Filmes lançados nos últimos dois meses ficam em cartaz. Usar a data local do dispositivo para a referência temporal; detalhes de região e interpretação exata do lançamento ainda devem ser definidos durante a integração.
- As sessões são para o dia seguinte à data local do celular. Horários e salas podem ser escolhidos ou gerados para simulação. Persistir os dados necessários para manter coerência entre telas e pedidos.
- Meia-entrada: R$ 10,00; inteira: R$ 20,00.
- Simular pagamento e confirmação; não realizar cobrança real.
- Autenticação e cadastro são locais: a conta não é compartilhada entre dispositivos.

## Requisitos da atividade
- Pelo menos cinco telas conectadas, com dados de API externa em pelo menos três telas.
- Requisições HTTP, tratamento de JSON e uso de async/await ou Promises.
- Pesquisa, filtro, ordenação, seleção ou outra interação adequada com dados.
- Estados de carregamento, erro e ausência de resultados.
- Componentes reutilizáveis, listas com FlatList ou recurso adequado, Flexbox, imagens e ícones, organização e identidade visual consistente.
- Dados simulados podem complementar a API, mas não substituí-la. A proposta deve ser aprovada pelo instrutor.
- Na apresentação, explicar proposta, API e endpoints, tratamento dos dados e erros, organização e dificuldades.

## Sequência acordada
1. Preparar a estrutura e configurações iniciais.
2. Implementar abertura, acesso, login e cadastro.
3. Seguir com os demais fluxos e integração TMDB conforme a evolução do projeto.

## Identidade e build Android
- Nome exibido: FaltaFilme; versão do aplicativo fixada em 1.0.0; identificador Android configurado como `com.faltafilme.app`.
- Ícone usa a logo do Figma `2487:802`, sobre fundo `#07002F`, incluindo camada adaptativa Android.
- `eas.json` contém os perfis `development` (cliente de desenvolvimento e distribuição interna) e `production` (APK Android); versionamento local, sem incremento automático.

## Organização de pastas e SVGs
- Usar como referência a organização do projeto faltaoque.Mobile. A estrutura de responsabilidades descrita abaixo permite trabalhar mesmo quando a referência não estiver disponível.
- Organizar o código por responsabilidade em `src/assets`, `src/components`, `src/constants`, `src/contexts`, `src/domain`, `src/integrations`, `src/repositories`, `src/screens`, `src/services`, `src/storage`, `src/theme` e `src/utils`, criando pastas conforme forem necessárias. Outras pastas da referência, como `localization`, são criadas quando necessárias.
- Seguir o padrão de telas e componentes em pastas próprias, com `index.js` e `styles.js` quando houver estilos.
- Todos os SVGs usados na interface devem ser componentes JavaScript reutilizáveis, seguindo o padrão de `src/assets/icons` da referência (componentes com `react-native-svg`).
- Manter as rotas do Expo Router em `src/app`, conforme `AGENTS.md`; a implementação das telas fica em `src/screens`. Não copiar o navegador do projeto de referência.
- Assets exigidos pelos arquivos de configuração nativos, como o ícone PNG do aplicativo, continuam no formato exigido pelo Expo.

## Validação da interface
- Realizar a validação visual no celular Android conectado por ADB; o usuário não deseja validação no navegador.
