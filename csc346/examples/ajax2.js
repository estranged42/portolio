/**
 * Load Event Listener
 * This will run once the page has loaded, and will setup our behaviors
 */
window.addEventListener('load', function() {
  // Get a reference to our button
  var button = document.getElementById('book-button');
  button.addEventListener('click', getBooks);
});

/**
 * getBooks
 *
 * This function will be called when the Get Books button is clicked
 */
function getBooks(event) {
  console.log('Button Pressed');
  fetch("https://csc346picturegram.test.apps.uits.arizona.edu/books")
    .then((response) => response.text())
    .then((responseText) => loadBooks(responseText))
}

/**
 * loadBooks
 *
 * This is called from the XMLHttpRequest when it completes successfully.
 * In here we will parse the response text into JSON, and add new rows to the
 * book table for each new book we find.
 *
 */
function loadBooks(bookText) {
  // Turn the raw JSON text into a Javascript JSON object
  let booksResponse = JSON.parse(bookText);
  let allBooks = booksResponse.books
  
  // allBooks is an array of book objects, so iterate of them.
  allBooks.forEach(function(book, index, arr) {
    // What does a book look like?
    console.log(book);
    
    // Create a new TR
    var tr = document.createElement('tr');
    tr.classList.add('newrow');

    // Create a TD for the title
    var titleTD = document.createElement('td');
    titleTD.textContent = book.title;
    
    // Create a TD for the title
    var authorTD = document.createElement('td');
    authorTD.textContent = book.author;
    
    // Append the TDs to the TR
    tr.appendChild(titleTD);
    tr.appendChild(authorTD);
    
    // Get a reference to the main table
    bookTable = document.getElementById('book-table');
    
    // Append the new row to the book table
    bookTable.appendChild(tr);
    
    void window.getComputedStyle(tr, null).getPropertyValue("opacity");
    tr.style.opacity = 1;
    tr.style.height = "auto";
  });
}
