# Memory bank — FaltaFilme

## Contexto
Projeto acadêmico SENAI: aplicativo de um cinema para facilitar a compra de ingressos online. O usuário possui o Figma completo e a chave do TMDB. A documentação da atividade foi fornecida pelo usuário como SA1 - 4DM.pdf; seus requisitos principais estão resumidos no SDD.

## Decisões confirmadas
- Expo + React Native + JavaScript + Styled Components; navegação com Expo Router conforme `AGENTS.md`.
- TMDB alimenta a parte de filmes. A chave será configurada localmente quando a integração for iniciada.
- Todos os demais dados que precisem de tratamento local usam AsyncStorage, inclusive login e senha, sessões, seleções e pedidos.
- Em cartaz: filmes lançados nos últimos dois meses. Sessões: dia seguinte à data local; horários e salas simulados.
- Preços: R$ 10,00 meia e R$ 20,00 inteira. Pagamento simulado.
- Conta e dados locais não sincronizam entre dispositivos; AsyncStorage não é criptografado.
- As mensagens da interface devem tratar os fluxos como uma experiência de cinema, sem citar AsyncStorage ou armazenamento no aparelho.
- Prioridade inicial: configurar projeto, depois abertura, acesso, login e cadastro.

## Estado conhecido em 27/10/2026
- Projeto Expo inicial em JavaScript; `package.json` informa Expo SDK 58.
- Expo Router, Styled Components e AsyncStorage configurados. Telas Abertura, Acesso, Login e Cadastro implementadas; Home ainda pendente.
- Figma acessível pelo conector; possui páginas de wireframes, componentes e design system.
- A documentação do projeto é mantida na pasta versionada `.project-context`.

## A definir durante a implementação
- Região e interpretação de data de lançamento no TMDB, e regras exatas para gerar sessões e garantir consistência local.
- Detalhes de cadastro, validações e comportamento de cada tela a partir do Figma e das instruções do usuário.

## Build e identidade definidos
- Nome FaltaFilme, versão 1.0.0, pacote Android `com.faltafilme.app` e logo do Figma sobre fundo `#07002F`.
- Perfis EAS `development` e `production`, com APK Android e versionamento local; `expo-dev-client` instalado para a build de desenvolvimento. A configuração não significa que uma build em nuvem tenha sido executada.

## Estrutura e SVGs
- Seguir a organização do projeto de referência faltaoque.Mobile, criando pastas por responsabilidade quando forem necessárias; telas e componentes ficam em pastas próprias, com `index.js` e `styles.js` quando aplicável.
- Todo SVG usado na interface deve ser componente JavaScript, como os ícones em `src/assets/icons` do projeto de referência.
- Usar `src/app` para rotas do Expo Router e `src/screens` para telas, respeitando as regras deste projeto.
- Rotas de acesso, login e cadastro estão agrupadas em `src/app/(auth)`; a abertura continua em `src/app/index.js`.

## Telas e tema
- Abertura leva automaticamente à tela de acesso após 2 segundos. Cadastro e login usam contas locais em AsyncStorage; após entrar, uma mensagem informa que a Home ainda será implementada.
- Cadastro valida nome, e-mail e senha com pelo menos 6 caracteres, e rejeita e-mails duplicados. A senha é guardada localmente no AsyncStorage conforme solicitado e o armazenamento não é criptografado.
- No login, e-mail sem conta local e senha incorreta têm mensagens distintas, destacando o campo correspondente.
- Login e cadastro mostram erros específicos com destaque nos campos e uma área de mensagens no topo, fora do espaço entre os botões; o campo de senha permite alternar a visibilidade e o ícone indica o estado.
- Os avisos de login e cadastro têm animações suaves de entrada e saída e desaparecem automaticamente após cinco segundos.
- Tema em src/theme, com paleta e tipografia Montserrat do Figma; marca, botão principal e botão de voltar são componentes reutilizáveis. O comportamento de navegação do botão de voltar é definido pela tela ou layout que o utiliza.

## Preferência de validação
- Validar a interface sempre no celular Android conectado usando ADB; não utilizar navegador para validação visual. Se o dispositivo ou o app adequado não estiver disponível, informar o impedimento.
