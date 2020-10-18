import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';

class App extends React.Component {

  render() {

    const { lists } = this.props;
   

    return (
      <div className="App">   
        <div>
          <h2>Hello you</h2> 
        </div>
        <Grid container
              direction="row"
              justify="flex-start" 
              alignItems="flex-start"
              spacing={3}>
          {lists.map(list => <TrelloList key={list.id} title={list.title} cards={list.cards} />)}
          <Paper style={styles.paper}><TrelloActionButton list /></Paper>
        </Grid>
      </div>
    );
  }
}

const styles = {
  paper: {
      borderRadius: ".15rem",
      margin: "1rem 0 1rem 1rem",
      padding: ".5rem",
      boxShadow: "0 0 5px rgba(0,0,0,.15)",
      width: "300px",
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,.15)"
  }
}


const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
