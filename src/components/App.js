import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
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
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
