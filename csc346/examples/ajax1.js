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
  
  // Create a new XMLHttpRequest Object
  var req = new XMLHttpRequest();
  
  // Create a callback function when the State of the Connection changes
  req.onreadystatechange = function() {
    if (req.readyState == 4)       // state of 4 is 'done'. The request has completed
    {
      loadBooks(req.responseText); // The .responseText property of the request object
    } else {                       // contains the Text returned from the request.
      console.log(req.readyState);
    }
  };
  
  // Set up our HTTP Request
  var booksAPI = "https://csc346picturegram.test.apps.uits.arizona.edu/books";
  req.open('GET', booksAPI, true);  // the 3rd parameter denotes if we want the request to
                                    // be asynchronous or not. Here we do, so its true
  
  // Finally initiate the request
  req.send();
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
