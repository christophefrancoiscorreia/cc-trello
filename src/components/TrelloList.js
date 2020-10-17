import React from 'react';
import TrelloCard from './TrelloCard';
import Paper from '@material-ui/core/Paper';

const TrelloList = ({title, cards}) => {
    return (
        <Paper style={styles.container}>
            <h3 style={styles.title}>{title}</h3>  
            <div>
                {cards.map(card => <TrelloCard key={card.id} text={card.text}/>)}
            </div>  
        </Paper>
    );
}



const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: ".15rem",
        padding: ".5rem 1rem",
        margin: "1rem 0 1rem 1rem",
        boxShadow: "0 0 5px rgba(0,0,0,.15)"
    },
    title: {
        margin: "0 0 1rem",
    } 
}


export default TrelloList;