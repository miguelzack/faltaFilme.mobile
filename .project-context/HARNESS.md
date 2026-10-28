# Harness — orientações de trabalho

## Antes de implementar
1. Ler `AGENTS.md` e a especificação e memória desta pasta; conferir o estado atual do repositório.
2. Antes de alterar código que use APIs Expo ou React Native, identificar a versão major do Expo no `package.json` e consultar a documentação versionada correspondente. Seguir também as instruções de documentação do `AGENTS.md`.
3. Para telas do Figma, consultar a tela e os componentes relevantes pelo conector disponível. Não presumir detalhes visuais não verificados.
4. Verificar a documentação oficial da API e a compatibilidade de dependências. Instalar pacotes com `npx expo install`; usar `bunx` se houver `bun.lock`.

## Durante o trabalho
- Manter JavaScript e Styled Components; não introduzir TypeScript como linguagem do projeto sem solicitação.
- Usar Expo Router, mantendo apenas arquivos de rota em `src/app/`.
- Desenvolver componentes reutilizáveis e layouts adaptáveis a dispositivos móveis.
- Tratar carregamento, erros e resultados vazios nas telas que consumirem dados.
- Persistir os dados locais necessários com AsyncStorage; manter consistência das seleções e pedidos.
- Não registrar credenciais neste diretório ou no repositório. Variáveis embutidas no app não são secretas para quem tiver acesso ao aplicativo.
- Evitar alterações manuais em diretórios nativos gerados quando se aplicar a regra de CNG do `AGENTS.md`.

## Verificação e conclusão
- Executar lint e verificação de tipos conforme `AGENTS.md`; registrar limitações se os comandos ainda não estiverem configurados ou não puderem rodar.
- Testar os fluxos alterados de modo proporcional à mudança, incluindo estados de rede e persistência quando aplicáveis.
- Informar o que mudou, como foi validado e eventuais limitações.
- Atualizar `MEMORY.md` e `SDD.md` quando houver decisões novas ou mudanças efetivas; não tratar planos como implementações concluídas.

## Padrão do projeto de referência
- Seguir a organização de pastas do projeto de referência faltaoque.Mobile, descrita no SDD e adaptada ao Expo Router obrigatório em `src/app`.
- Criar SVGs da interface como componentes JavaScript reutilizáveis em `src/assets/icons` ou outra pasta apropriada, conforme o padrão da referência. Configurações nativas podem exigir imagens PNG.
- Manter telas e componentes em pastas próprias, separando `index.js` e `styles.js` quando aplicável; criar camadas de serviços, repositórios e armazenamento apenas conforme necessário.

## Validação visual no dispositivo
- O usuário determinou que a validação visual deve ser feita sempre no celular Android conectado via ADB, sem usar navegador para validar a interface.
- Verificar disponibilidade do dispositivo e do aplicativo compatível antes de testar. Se não for possível abrir o app no celular, informar a limitação ao usuário em vez de substituir por validação no navegador.
