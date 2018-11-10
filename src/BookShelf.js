import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.currentShelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            this.props.books.filter(book => book.shelf === this.props.currentShelf)
            .map(book => (
              <li key = {book.id}>
                <Book
                  book={book}
                  moveShelf={this.props.moveShelf}
                  currentShelf={this.props.currentShelf}
                />
              </li>))
          }
          </ol>
        </div>
      </div>
    )
  }
}
  export default BookShelf;
