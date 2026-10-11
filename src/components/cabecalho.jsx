import { useState } from 'react';
import '../style/cabecalho.css';

const itensMenu = [
    { id: 'inicio', label: 'Inicio', href: '/' },
    { id: 'cadastro', label: 'Cadastro de Funcionários', href: '/' },
    { id: 'consulta', label: 'Consulta de Funcionários', href: '/' },
    { id: 'relatorios', label: 'Relatórios', href: '/' },
    { id: 'sair', label: 'Sair', href: '/' },
];

function Cabecalho() {
    const [itemAtivo, setItemAtivo] = useState('inicio');

    return (
        <header className="cabecalho">
            <h1>Nova Horizonte</h1>
            {itensMenu.map((item) => (
                <p key={item.id}>
                    <a
                        href={item.href}
                        className={itemAtivo === item.id ? 'ativo' : ''}
                        onClick={() => setItemAtivo(item.id)}
                    >
                        {item.label}
                    </a>
                </p>
            ))}
        </header>
    );
}

export default Cabecalho;