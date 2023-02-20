Gerenciando versões das dependências NODEJS/NPM

Exemplo:
  "dependencies": {
    "cfonts": "^3.1.1"
  },

major.minor.patch
major = Alteracoes que pode afetar o funcionamento da versão
minor = Alteracoes sem quebrar a versao atual
patch = Correcoes de bug

Sempre que atualizar o npm:
^ = O minor e patch serão atualizados
~ = Apenas o patch será atualizado
* = Toda a versão será atualizada
  = Versão fixa, não muda.