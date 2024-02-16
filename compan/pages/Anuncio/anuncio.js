import React, { useState } from "react";
import styles from "./anuncio.module.css";

const Anuncio = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [imagens, setImagens] = useState([]);
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleValorChange = (event) => {
    setValor(event.target.value);
  };

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const handleEnderecoChange = (event) => {
    setEndereco(event.target.value);
  };

  const handleCidadeChange = (event) => {
    setCidade(event.target.value);
  };

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  const handleImagensChange = (event) => {
    const files = Array.from(event.target.files);
    setImagens(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      nome,
      descricao,
      valor,
      cidade,
      estado,
      imagens,
    });
  };

  return (
    <div className={styles.anuncio_container}>
      <div className={styles.anuncio_container2}>
        <h2>Criar Anúncio</h2>
        <form onSubmit={handleSubmit} className={styles.form_container}>
          <div className={styles.input_group}>
            <label>
              *Anúncio:
              <input type="text" value={nome} onChange={handleNomeChange} />
            </label>
          </div>
          <br />
          <div className={styles.input_group}>
            <label>
              *Descrição:
              <textarea
                value={descricao}
                onChange={handleDescricaoChange}
                className={styles.descricao_textarea}
              />
            </label>
          </div>
          <br />
          <div className={styles.input_group}>
            <label>
              *Valor:
              <input type="text" value={valor} onChange={handleValorChange} />
            </label>
          </div>
          <br />
          <div className={styles.input_group}>
            <label>
              *Cidade:
              <input type="text" value={cidade} onChange={handleCidadeChange} />
            </label>
            <br />
            <label>
              *Estado:
              <input type="text" value={estado} onChange={handleEstadoChange} />
            </label>
          </div>
          <div className={styles.input_group}>
            <label>
              CEP:
              <input type="text" value={cep} onChange={handleCepChange} />
            </label>
            <br />
            <label>
              Endereço:
              <input
                type="text"
                value={endereco}
                onChange={handleEnderecoChange}
              />
            </label>
          </div>
          <br />
          <div className={styles.input_group}>
            <label htmlFor="input_imagens" className={styles.label_imagens}>
              *Escolha as imagens
            </label>
            <input
              id="input_imagens"
              type="file"
              multiple
              onChange={handleImagensChange}
              className={styles.input_imagens}
            />
          </div>
          <br />
          <div className={styles.button_group}>
            <button type="submit" className={styles.submit_button}>
              Enviar Anúncio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Anuncio;
