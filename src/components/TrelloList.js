import React from 'react';

import Paper from '@material-ui/core/Paper';

import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';


const TrelloList = ({title, cards}) => {
    return (
        <Paper style={styles.paper}>
            <h3 style={styles.title}>{title}</h3>  
            <div>
                {cards.map(card => <TrelloCard key={card.id} text={card.text}/>)}
            </div>  
            <div>
                <TrelloActionButton/>
            </div>
        </Paper>
    );
}



const styles = {
    paper: {
        backgroundColor: "#dfe3e6",
        borderRadius: ".25rem",
        padding: ".5rem",
        margin: "1rem 0 1rem 1rem",
        boxShadow: "0 0 5px rgba(0,0,0,.15)",
        width: "300px"
    },
    title: {
        margin: "0 0 1rem",
    } 
}


export default TrelloList;