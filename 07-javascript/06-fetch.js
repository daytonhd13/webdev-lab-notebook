const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  app.style.display = "flex";
  app.style.flexDirection = "column";
  app.style.alignItems = "center";

  fetch(url)
    .then((response) => response.json())
    .then((books) => {
      const loading = document.querySelector("#loading");
      if (loading) {
        loading.remove();
      }

      books.forEach((book) => {
        const bookEl = document.createElement("div");

        const titleEl = document.createElement("h2");
        titleEl.textContent = book.name;

        const authorEl = document.createElement("p");
        authorEl.textContent = `by ${book.authors[0]}`;

        const yearEl = document.createElement("p");
        yearEl.textContent = book.released.substring(0, 4);

        const pagesEl = document.createElement("p");
        pagesEl.textContent = `${book.numberOfPages} pages`;

        bookEl.appendChild(titleEl);
        bookEl.appendChild(authorEl);
        bookEl.appendChild(yearEl);
        bookEl.appendChild(pagesEl);

        app.appendChild(bookEl);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchData(url);
