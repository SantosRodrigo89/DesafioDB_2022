class Forca {

  constructor(palavraSecreta) {

    this.palavraSecreta = palavraSecreta;
    this.dadosDoJogo = {
      letrasChute: [],
      vidas: 6,
      palavra: [],
    };
    this.esconderPalavra();
  }

  esconderPalavra() {
    for (let i in this.palavraSecreta) this.dadosDoJogo.palavra.push("_");
  }

  chutar(letra) {
    if (!this.contemErro(letra)) {
      const letraEncontrada = this.palavraSecreta.includes(letra);
      this.dadosDoJogo.letrasChute.push(letra);

      if (letraEncontrada) {
        for (let i in this.palavraSecreta) {
          this.palavraSecreta[i] === letra &&
            (this.dadosDoJogo.palavra[i] = letra);
        }
      } else this.dadosDoJogo.vidas--;

      return true;
    }
  }

  contemErro(letra) {
    const regLetrasAZ = /[a-z]/i;
    const textoErro = (texto) => {
      console.log(texto);
    };

    if (!regLetrasAZ.test(letra)) {
      textoErro("Somente letras")
      return true;
    }

    if (letra.length > 1) {
      textoErro("Uma letra por vez");
      return true;
    }

    if (this.dadosDoJogo.letrasChute.includes(letra)) {
      textoErro("Letra já chutada");
      return true;
    }
    return false;
  }

  buscarEstado() {
    if (this.dadosDoJogo.vidas === 0) {
      return (this.dadosDoJogo.estado = "perdeu");
    } else if (
      this.dadosDoJogo.palavra.join("") === this.palavraSecreta &&
      this.dadosDoJogo.vidas > 0
    ) {
      return (this.dadosDoJogo.estado = "ganhou");
    }
  } 

  buscarDadosDoJogo() {
    return this.dadosDoJogo;
  }
}

module.exports = Forca;

