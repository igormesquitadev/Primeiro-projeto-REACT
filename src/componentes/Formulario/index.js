import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import BotaoImagem from "../BotaoImagem";

const Formulario = (props) => {

const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')

const manipularClique = (evento) => {
  evento.preventDefault()
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = (evento) => {
    const arquivo = evento.target.files[0];
    if (arquivo) {
      const leitor = new FileReader();
      leitor.onload = (e) => {
        const imagemSelecionada = e.target.result;
        setImagem(imagemSelecionada);
      };
      leitor.readAsDataURL(arquivo);
    }
  };
  input.click();
}

const aoSalvar = (evento) =>{
  evento.preventDefault()
  props.aoColaboradorCadastrado({
    nome,
    cargo,
    imagem,
    time
  })

  setNome('')
  setCargo('')
  setImagem('')
  setTime('')
}

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
        <div className="campo-imagem">
          {imagem ? (
            <img src={imagem} alt="Imagem Selecionada" />
          ) : (
            <span>Clique no botão "Procurar" para selecionar uma imagem.</span>
          )}
        </div>
        <BotaoImagem onClick={manipularClique}/>
        <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} label="Time" itens={props.times}/>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
