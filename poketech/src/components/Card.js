import React from 'react';
import "./styles/Card.css";

class Card extends React.Component{
    render(){
        return(
            <div className="container-card">

                <div className="container-img-name">
                    <div className="img-card"></div>
                    <div className="container-align">
                        <div className="name-card">
                            <p>NombrePokemon</p>
                        </div>
                    </div>
                    
                </div>

                <div className="description-card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi cum repudiandae dolorum vel,qui quaerat nemo totam voluptatibus neque.</p>
                </div>

                <div className="container-button">
                    <a className="habilities"> Ver Habilidades</a>
                </div>


            </div>
        )
    }
}
export default Card;