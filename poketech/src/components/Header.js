import React from 'react';
import "./styles/Header.css";

class Header extends React.Component{
    render(){
        return(
            <div className="header-container">
                <h1 className="title">Lista de Pokemones</h1>
                <h2 className="second-title">Aqui estan tus pokemones</h2>
            </div>
        )
    }
}

export default Header;