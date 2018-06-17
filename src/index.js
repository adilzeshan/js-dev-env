import './index.css';
import { getBooks } from './api/bookAPI';

// Populate table of books via API call.

getBooks().then(result => {
  let booksBody = "";

  result.forEach(book => {
    booksBody += `<tr>
    <td><a href="#" data-id="${book.id}" class="deleteBook">Delete</a></td>
    <td>${book.id}</td>
    <td>${book.author}</td>
    <td>${book.book}</td>
    <td>${book.genre}</td>
    </tr>`
  });

  global.document.getElementById('books').innerHTML = booksBody;
});
