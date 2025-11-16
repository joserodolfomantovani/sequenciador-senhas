# sequenciadorSenhas

Aplicativo React Native simples para gerar e copiar senhas ("BAT PASS GENERATOR").

Principais arquivos:
- Componente de entrada principal: [`Home`](src/screens/Home/Home.tsx) ([arquivo](src/screens/Home/Home.tsx))
- Ponto de entrada da app: [`App`](App.tsx) ([arquivo](App.tsx))
- Botão/Geração/Cópia: [`BatButton`](src/components/BatButton/BatButton.tsx) ([arquivo](src/components/BatButton/BatButton.tsx))
- Campo de texto: [`BatTextInput`](src/components/BatTextInput/BatTextInput.tsx) ([arquivo](src/components/BatTextInput/BatTextInput.tsx))
- Logo: [`BatLogo`](src/components/BatLogo/BatLogo.tsx) ([arquivo](src/components/BatLogo/BatLogo.tsx))
- Serviço de geração: [`generatePass`](src/services/passwordService.ts) ([arquivo](src/services/passwordService.ts))
- Configurações TypeScript: [tsconfig.json](tsconfig.json)
- Scripts e dependências: [package.json](package.json)


Como funciona
- Ao pressionar "GENERATE" o componente [`BatButton`](src/components/BatButton/BatButton.tsx) chama [`generatePass`](src/services/passwordService.ts) que devolve uma senha aleatória.
- Ao pressionar "⚡️ COPY" o texto é copiado para a área de transferência usando `@react-native-clipboard/clipboard`.


Observações
- Projeto gerado com React Native 0.82.1 (veja [package.json](package.json)).
- Para iOS use CocoaPods (arquivo [ios/Podfile](ios/Podfile)) se necessário.

