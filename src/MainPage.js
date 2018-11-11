import { Link } from 'react-router-dom';
import React from 'react';
import Book from './Book';
import BookShelf from './BookShelf';

function MainPage(props){
  return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        { /*
          props.shelves.map(shelf => {
            <div>
              <BookShelf
                books={props.books}
                currentShelf={shelf}
                moveShelf={props.moveShelf}
              />
            </div>
          })
          */
        }

        {
         <div>
           <BookShelf
             books={props.books}
             currentShelf={props.shelves[0]}
             moveShelf={props.moveShelf}
           />
           <BookShelf
             books={props.books}
             currentShelf='wantToRead'
             moveShelf={props.moveShelf}
           />
           <BookShelf
             books={props.books}
             currentShelf='read'
             moveShelf={props.moveShelf}
           />
         </div>
        }

        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
}

export default MainPage;
