import { Route } from 'react-router-dom';
import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from './SearchPage';
import MainPage from './MainPage';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books)=>{
        this.setState({books: books})
      })
  }

  componentDidMount() {
      this.getAllBooks();
  }

  moveShelf = (book,shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks();
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>
          (<MainPage
              books={ this.state.books }
              moveShelf={this.moveShelf}
              shelves = {[ 'currentlyReading', 'wantToRead', 'read' ]}
           />
          )}
        />

        <Route exact path="/search" render={() =>
          (<SearchPage
              books={ this.state.books }
              moveShelf={this.moveShelf}
          />
          )}
        />

      </div>
    )
  }
}

export default BooksApp
