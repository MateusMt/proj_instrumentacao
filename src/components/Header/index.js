import React from 'react';
import logoUSF from '../../assets/images/logoUSF.png'
const Header = () => {
    return(
        <Container>
            <header className="header">
            <img className="logoUSF" src={logoUSF} alt='logo da Universidade São Francisco'></img>
            <h1 className="project-title">Projeto de Instrumentação Eletroeletrônica</h1>
            <nav className='project-navigation'>
                <ul className='navigation-opts'>
                    <li className='list-item'><a href='#'>Projeto</a></li>
                    <li className='list-item'><a href='#'>Relatório</a></li>
                    <li className='list-item'><a href='#'>Aplicação</a></li>
                </ul>
            </nav>
        </header>
        </Container>
    )
}

export default Header;