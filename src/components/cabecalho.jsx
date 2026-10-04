import '../style/cabecalho.css';

function Cabecalho() {
    return (
        <header className="cabecalho">
            <h1>Nova Horizonte</h1>
            <p><a href="/">Inicio</a></p>
            <p><a href="/">Cadastro de Funcionários</a></p>
            <p><a href="/">Consulta de Funcionários</a></p>
            <p><a href="/">Relatórios</a></p>
            <p><a href="/">Sair</a></p>
        </header>
    );
    
}

export default Cabecalho;