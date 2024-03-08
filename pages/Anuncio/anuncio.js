import React, { useEffect, useState } from "react";
import styles from "./anuncio.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import estadosCidades from "../../src/companents/Assets/estados-cidades.json";
import { useRef } from "react";
import { VerificacaoAnuncio } from "./Verificação Anuncio/verificacaoAnuncio";
import ConfirmationModal from "../../src/companents/confirmationModal/confirmationModal";

const categorias = {
  Eletronicos: ["Celular", "Computador", "Notebook", "Headset"],
  Roupas: ["Camiseta", "Calça", "Sapato"],
  Automoveis: ["Carro", "Moto", "Caminhao"],
  Acompanhantes: ["Homem", "Mulher", "Trans"],
  Casas: ["Apartamento", "Casa", "Terreno"],
};

const Anuncio = () => {
  const [abaAtiva, setAbaAtiva] = useState(1);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [totalAbas, setTotalAbas] = useState(3);
  const inputImagensRef = useRef(null);
  const [valor, setValor] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    if (estadoSelecionado) {
      const estadoData = estadosCidades.estados.find(
        (estado) => estado.nome === estadoSelecionado
      );
      if (estadoData) {
        setCidades(estadoData.cidades);
      } else {
        setCidades([]);
      }
    } else {
      setCidades([]);
    }
  }, [estadoSelecionado]);

  useEffect(() => {
    setTotalAbas(3);
  }, []);

  const handleAbaClick = (aba) => {
    setAbaAtiva(aba);
  };

  const handleEstadoChange = (event) => {
    const estadoSelecionado = event.target.value;
    setEstadoSelecionado(estadoSelecionado);

    const estadoData = estadosCidades.estados.find(
      (estado) => estado.Nome === estadoSelecionado
    );

    if (estadoData) {
      setCidades(estadoData.Cidades);
    } else {
      setCidades([]);
    }
  };

  const handleCidadeChange = (event) => {
    setCidadeSelecionada(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const handleValorChange = (event) => {
    setValor(event.target.value);
  };

  const handleEnderecoChange = (event) => {
    setEndereco(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleImagensChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 6) {
      files.splice(6);
    }
    setImagens(files);
  };


  



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      categoria,
      estado: estadoSelecionado,
      cidade: cidadeSelecionada,
      cep,
      endereco,
      nome,
      descricao,
      valor,
    });
  };

  const handleLabelClick = () => {
    inputImagensRef.current.click();
  };

  const handleNextButtonClick = () => {
    setAbaAtiva(abaAtiva + 1);
  };

  const handlePublicarClick = () => {
    setModalAberto(true); 
  };

  const handleOpenConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const handleConfirmPublish = () => {
    console.log("Anúncio publicado!");
    handleCloseConfirmationModal();
  };

  return (
    <div className={styles.anuncio_container}>
      <div className={styles.anuncio_container2}>
        <h2>Criar Anúncio</h2>
        <div className={styles.abas_container}>
          <div
            className={`${styles.aba} ${
              abaAtiva === 1 ? styles.aba_ativa : ""
            }`}
            onClick={() => handleAbaClick(1)}
          >
            Inserir Dados
          </div>
          <div
            className={`${styles.aba} ${
              abaAtiva === 2 ? styles.aba_ativa : ""
            }`}
            onClick={() => handleAbaClick(2)}
          >
            Promover
          </div>
          <div
            className={`${styles.aba} ${
              abaAtiva === 3 ? styles.aba_ativa : ""
            }`}
            onClick={() => handleAbaClick(3)}
          >
            Publicar
          </div>
        </div>
        {abaAtiva === 1 && (
          <div className={styles.inserir_dados_container}>
            <div className={styles.contaner_dados}>
              <div className={styles.cabecalho_container}>
                <h3 className={styles.cabecalho}>Inserir Dados do Anúncio</h3>
                <p className={styles.obrigatorio}>*Campos obrigatórios</p>
              </div>
              <div className={styles.input_group}>
                <label htmlFor="select_categoria">*Selecionar Categoria:</label>
                <select
                  id="select_categoria"
                  onChange={handleCategoriaChange}
                  value={categoria}
                  className={styles.select_categoria}
                >
                  <option value="">Selecione...</option>
                  {Object.keys(categorias).map((categoriaKey) => (
                    <optgroup label={categoriaKey} key={categoriaKey}>
                      {categorias[categoriaKey].map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div className={styles.input_group}>
                <label htmlFor="select_estado">*Selecionar Estado:</label>
                <select
                  id="select_estado"
                  onChange={handleEstadoChange}
                  value={estadoSelecionado}
                  className={styles.select_estado}
                >
                  <option value="">Selecione...</option>
                  {estadosCidades.estados.map((estado) => (
                    <option key={estado.sigla} value={estado.nome}>
                      {estado.nome}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.input_group}>
                <label htmlFor="select_cidade">*Selecionar Cidade:</label>
                <select
                  id="select_cidade"
                  onChange={handleCidadeChange}
                  value={cidadeSelecionada}
                  className={styles.select_cidade}
                >
                  <option value="">Selecione...</option>
                  {cidades.map((cidade, index) => (
                    <option key={index} value={cidade}>
                      {cidade}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.input_endereco}>
                <div className={styles.input_group}>
                  <label htmlFor="input_cep">CEP:</label>
                  <input
                    type="text"
                    id="input_cep"
                    value={cep}
                    onChange={handleCepChange}
                    className={styles.input_CEP_text}
                  />
                </div>
                <div className={styles.input_group}>
                  <label htmlFor="input_endereco">Endereço:</label>
                  <input
                    type="text"
                    id="input_endereco"
                    value={endereco}
                    onChange={handleEnderecoChange}
                    className={styles.input_endereco_text}
                  />
                </div>
              </div>
              <div className={styles.input_group}>
                <label htmlFor="input_nome">*Título do Anúncio:</label>
                <input
                  type="text"
                  id="input_nome"
                  value={nome}
                  onChange={handleNomeChange}
                  className={styles.input_text}
                />
              </div>
              <div className={styles.input_group}>
                <label htmlFor="input_valor">*Valor:</label>
                <input
                  type="number"
                  id="input_valor"
                  value={valor}
                  onChange={handleValorChange}
                  className={styles.input_valor_text}
                />
              </div>
              <div className={styles.input_group}>
                <label htmlFor="textarea_descricao">*Descrição:</label>
                <textarea
                  id="textarea_descricao"
                  value={descricao}
                  onChange={handleDescricaoChange}
                  className={styles.input_descricao_text}
                />
              </div>
              <div className={styles.contaner_dados}>
                <div className={styles.cabecalho_container2}>
                  <h3 className={styles.cabecalho}>Imagens</h3>
                </div>
                <div className={`${styles.conteudo_aba}`}>
                  <div className={styles.input_group}>
                    <p>Insira até 6 imagens.</p>
                    <label
                      htmlFor="input_imagens"
                      className={styles.input_imagens_label}
                      onClick={handleLabelClick}
                    >
                      Imagens
                    </label>
                    <input
                      id="input_imagens"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImagensChange}
                      className={styles.input_imagens}
                      ref={inputImagensRef}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.button_group}>
                {abaAtiva < totalAbas && (
                  <button
                    type="button"
                    className={styles.next_button}
                    onClick={handleNextButtonClick}
                  >
                    Próximo
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        {abaAtiva === 2 && (
          <div className={`${styles.inserir_dados_container}`}>
            <div className={styles.contaner_dados}>
              <div className={styles.cabecalho_container}>
                <h3 className={styles.cabecalho}>Promova seu anúncio</h3>
              </div>
              <div className={styles.info_ofertas}>
                <h6>1. SELECIONE A OFERTA</h6>
                <p>Promova seu anúncio ou continue e Publique Grátis</p>
              </div>
              {/* Conteúdo adicional da aba Promover */}
              <div className={styles.info_buttons}>
                {abaAtiva < totalAbas && (
                  <button
                    type="button"
                    className={styles.gratis_button}
                    onClick={handleNextButtonClick}
                  >
                    Publique Grátis
                  </button>
                )}
                {abaAtiva < totalAbas && (
                  <button
                    type="button"
                    className={styles.promova_button}
                    onClick={handleNextButtonClick}
                  >
                    Publique e Promova
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        {abaAtiva === 3 && (
          <div className={`${styles.conteudo_aba}`}>
            <VerificacaoAnuncio
              categoria={categoria}
              estado={estadoSelecionado}
              cidade={cidadeSelecionada}
              cep={cep}
              endereco={endereco}
              nome={nome}
              descricao={descricao}
              valor={valor}
            />
            <div className={styles.info_buttons}>
            <button
          type="button"
          className={`${styles.submit_button} ${styles.botao_publicar}`}
          onClick={handleOpenConfirmationModal}
        >
          Publicar
        </button>

        <ConfirmationModal
          showModal={showConfirmationModal}
          handleClose={handleCloseConfirmationModal}
          handleConfirmPublish={handleConfirmPublish}
        />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Anuncio;
