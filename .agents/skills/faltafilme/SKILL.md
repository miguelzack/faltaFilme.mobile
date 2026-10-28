---
name: faltafilme
description: Desenvolver e manter o aplicativo mobile FaltaFilme, seguindo seu Figma, regras de cinema, stack Expo e processo de validação no dispositivo.
---

# FaltaFilme

Use esta skill ao desenvolver, revisar ou configurar o aplicativo FaltaFilme. Antes de alterar o projeto, leia `AGENTS.md` e consulte os documentos versionados em `.project-context/`: `SDD.md` para requisitos, `HARNESS.md` para o fluxo de trabalho e `MEMORY.md` para decisões e estado conhecido. Confira o código atual: a memória é um registro que pode ficar desatualizado.

## Orientações específicas

- Mantenha React Native, Expo, JavaScript e Styled Components. As rotas do Expo Router ficam em `src/app/`; telas e demais módulos ficam fora dessa pasta. Siga a estrutura por responsabilidade e a convenção de `index.js` e `styles.js` descritas no SDD.
- Consulte o Figma e reutilize os componentes, cores e tipografia existentes antes de criar novos. SVGs usados na interface devem ser componentes JavaScript reutilizáveis; preserve formatos exigidos para assets de configuração nativa.
- O TMDB fornece informações de filmes. Os demais dados locais usam AsyncStorage conforme o SDD; os fluxos de conta e pagamento são locais e o pagamento é simulado. Não registre credenciais no repositório nem prometa sincronização de dados entre aparelhos.
- Filmes lançados nos últimos dois meses ficam em cartaz; sessões para o dia seguinte à data local, com horários e salas simulados. Meia custa R$ 10,00 e inteira R$ 20,00.
- Preserve o nome FaltaFilme e a versão 1.0.0, além dos perfis EAS de desenvolvimento e produção, salvo nova instrução do usuário.
- Valide a interface no celular Android conectado por ADB; não use navegador para validação visual. Se não for possível executar o app no dispositivo, informe o impedimento e o que foi validado.
- Consulte documentação do Expo correspondente à versão instalada antes de usar APIs, instale dependências pelo Expo e execute lint e verificação de tipos conforme `AGENTS.md`.
- Atualize a documentação versionada quando decisões ou estado do projeto mudarem. Distinga funcionalidades implementadas de planos e pendências.
