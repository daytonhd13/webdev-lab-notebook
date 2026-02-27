const url = "https://anapioficeandfire.com/api/books/";

const $app = $("#books");
$app.css("padding-left", 0);
const $loading = $("#loading");

const addBookToDOM = (item) => {
  console.log(item);

  const $element = $("<div></div>").css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  });

  const $title = $("<h4></h4>").text(item.name);
  const $author = $("<p></p>").text(`by ${item.authors[0]}`);
  const $published = $("<p></p>").text(item.released.substr(0, 4));
  const $pages = $("<p></p>").text(`${item.numberOfPages} pages`);

  $element.append($title, $author, $published, $pages);

  $app.append($element);
};

const fetchData = (url) => {
  $.ajax({
    url: url,
    method: "GET",
    success: function (data) {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    },
    error: function (error) {
      console.log(error);
      const $li = $("<li></li>").text("An error occured. Please try again.");
      $app.append($li);
    },
    complete: function () {
      $loading.remove();
    },
  });
};

fetchData(url);
