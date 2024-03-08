import React from "react";
import styles from "./verificacao.module.css";

export const VerificacaoAnuncio = ({
  categoria,
  estado,
  cidade,
  cep,
  endereco,
  nome,
  descricao,
  valor,
}) => {

    
  return (
    <div className={styles.inserir_dados_container}>
      <div className={styles.contaner_dados}>
        <div className={styles.cabecalho_container}>
          <h3 className={styles.cabecalho}>Resumo do Anúncio</h3>
        </div>
        <div className={styles.resumo_info}>
        <p>
          <strong>Categoria:</strong> {categoria}
        </p>
        <p>
          <strong>Estado:</strong> {estado}
        </p>
        <p>
          <strong>Cidade:</strong> {cidade}
        </p>
        <p>
          <strong>CEP:</strong> {cep}
        </p>
        <p>
          <strong>Endereço:</strong> {endereco}
        </p>
        <p>
          <strong>Título do Anúncio:</strong> {nome}
        </p>
        <p>
          <strong>Valor:</strong> {valor}
        </p>
        <p>
          <strong>Descrição:</strong> {descricao}
        </p>
        </div>
      </div>
    </div>
  );
};
