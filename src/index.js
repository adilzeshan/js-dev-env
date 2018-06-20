import './index.css';
import { getBooks, deleteBook } from './api/bookAPI';

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

  const deleteLinks = global.document.getElementsByClassName('deleteBook');

  // Must use Array.from to create a real array from a DOM collection
  // 'getElementsByClassName' only returns an array-like object
  Array.from(deleteLinks, link => {
    link.onclick = function (event) {
      const element = event.target;
      event.preventDefault();
      deleteBook(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });
});
