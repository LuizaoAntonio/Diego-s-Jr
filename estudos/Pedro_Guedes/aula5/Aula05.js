// ==========================================
// COMPONENTE: BarraLateralFiltros
// RESPONSÁVEL: Pedro Guedes
// ==========================================
function BarraLateralFiltros({ onSearch, onFilter, filtroAtivo }) {
    const [termoBusca, setTermoBusca] = React.useState("");

    const handleBusca = (e) => {
        const valor = e.target.value;
        setTermoBusca(valor);
        if (onSearch) {
            onSearch(valor);
        }
    };

    const handleFiltro = (tipo) => {
        if (onFilter) {
            onFilter(tipo);
        }
    };

    return (
        <aside className="barra-filtros">
            <h3 className="titulo-filtros">Filtros do Ranking</h3>

            {/* Campo de busca por nome ou ID */}
            <div className="campo-busca">
                <label htmlFor="busca-jogador">Buscar jogador</label>
                <input
                    id="busca-jogador"
                    type="text"
                    placeholder="Nome ou ID..."
                    value={termoBusca}
                    onChange={handleBusca}
                    className="input-busca"
                />
            </div>


  //Colocar no style//
  .barra-filtros {
    background: #141122;
    padding: 24px;
    border-radius: 16px;
    border: 1px solid #2d2444;
    width: 260px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.titulo-filtros {
    font-size: 18px;
    margin: 0;
    color: #ffffff;
    text-align: center;
}

.campo-busca {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.campo-busca label {
    font-size: 13px;
    color: #a7a2bc;
}

.input-busca {
    background: #1c1830;
    border: 1px solid #3c325c;
    border-radius: 8px;
    padding: 10px 14px;
    color: #e2e0e8;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
}

.input-busca:focus {
    border-color: #8b5cf6;
}

.input-busca::placeholder {
    color: #6b6680;
}

.grupo-botoes-filtro {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.subtitulo-filtro {
    font-size: 13px;
    color: #a7a2bc;
    margin: 0 0 4px 0;
}

.btn-filtro {
    background: #1c1830;
    border: 1px solid #3c325c;
    border-radius: 8px;
    padding: 10px 14px;
    color: #e2e0e8;
    font-size: 14px;
    cursor: pointer;
    text-align: left;
    transition: all 0.2s;
}

.btn-filtro:hover {
    background: #2d2444;
    border-color: #8b5cf6;
}

.btn-filtro.ativo {
    background: #8b5cf6;
    border-color: #8b5cf6;
    color: #ffffff;
    font-weight: 600;
}

.btn-reset {
    margin-top: 8px;
    border-style: dashed;
}

.lista-ranking {
    flex: 1;
    background: #141122;
    border-radius: 16px;
    border: 1px solid #2d2444;
    padding: 20px;
    min-height: 200px;
}

/* Responsivo */
@media (max-width: 768px) {
    .conteudo-flex {
        flex-direction: column;
    }

    .barra-filtros {
        width: 100%;
    }
}

            {/* Botões de filtro */}
            <div className="grupo-botoes-filtro">
                <p className="subtitulo-filtro">Ordenar por</p>

                <button
                    type="button"
                    className={`btn-filtro ${filtroAtivo === "fitas" ? "ativo" : ""}`}
                    onClick={() => handleFiltro("fitas")}
                >
                    🎞 Mais Fitas
                </button>

                <button
                    type="button"
                    className={`btn-filtro ${filtroAtivo === "tempo" ? "ativo" : ""}`}
                    onClick={() => handleFiltro("tempo")}
                >
                    ⏱ Menor Tempo
                </button>

                <button
                    type="button"
                    className={`btn-filtro ${filtroAtivo === "cartas" ? "ativo" : ""}`}
                    onClick={() => handleFiltro("cartas")}
                >
                    ✉ Mais Cartas
                </button>

                <button
                    type="button"
                    className={`btn-filtro ${filtroAtivo === "ouro" ? "ativo" : ""}`}
                    onClick={() => handleFiltro("ouro")}
                >
                    ✦ Mais Fitas de Ouro
                </button>

                <button
                    type="button"
                    className={`btn-filtro btn-reset ${filtroAtivo === "padrao" ? "ativo" : ""}`}
                    onClick={() => handleFiltro("padrao")}
                >
                    ↺ Ordem Padrão
                </button>
            </div>
        </aside>
    );
}
