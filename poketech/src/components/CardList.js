import React from 'react';
import "./styles/Card.css";
import Card from "./Card";

class CardList extends React.Component{
    render(){
        return(
            this.props.cards.map(card => <Card pokemon={card} callback={this.props.callback} />)
        )
    }
}
export default CardList;