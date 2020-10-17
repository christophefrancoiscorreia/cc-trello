import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import CardContent from '@material-ui/core/CardContent';

const TrelloCard = ({text}) => {
    return (
        <Card style={styles.card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
}


const styles = {
    card: {
        padding: ".5rem",
        marginBottom: ".5rem"
    }
}


export default TrelloCard;