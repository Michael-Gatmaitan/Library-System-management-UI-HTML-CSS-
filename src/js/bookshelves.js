const bookData = {
  "shelf1": {
    "topics": {
      "computer science": {
        "books": [
          {
            "title": "Basics of C++",
            "imageSrc": ""
          },
          {
            "title": "Basics of C++ Vol. 2",
            "imageSrc": ""
          },
          {
            "title": "Data Structures and Algorithms in Java 2nd Edition",
            "imageSrc": "./img/books/book1.jpg"
          },
          {
            "title": "Object Oriented Programming in Javascript",
            "imageSrc": "./img/books/book2.jpg"
          },
          {
            "title": "Automating Boring Stuffs in Python",
            "imageSrc": ""
          }
        ]
      },
      "cisco": {
        "books": [
          {
            "title": "CCNA 200-301",
            "imageSrc": ""
          },
          {
            "title": "CCNA 200-301 Volume 1",
            "imageSrc": ""
          },
          {
            "title": "CCNA Security 210-260",
            "imageSrc": ""
          },
          {
            "title": "Cisco Certified DevNet Associate",
            "imageSrc": ""
          },
        ]
      },
      "hotel and restaurant management": {
        "books": [
          {
            "title": "Operating and Managing",
            "imageSrc": ""
          },
          {
            "title": "Operation Management in Hospitality and Tourism Business",
            "imageSrc": ""
          },
          {
            "title": "Hotel Management",
            "imageSrc": ""
          },
          {
            "title": "Bar and Beverage Management",
            "imageSrc": ""
          },
          {
            "title": "Food services Operations",
            "imageSrc": ""
          },
          {
            "title": "Managing a Food-safe kitchen",
            "imageSrc": ""
          },
        ]
      },
      "data structures and algorithms": {
        "books": [
          {
            "title": "Fundamentals in Binary Trees",
            "imageSrc": ""
          },
          {
            "title": "Searching Algorithms",
            "imageSrc": ""
          },
          {
            "title": "Fast and Reliable Algorithms for Web Development",
            "imageSrc": ""
          },
          {
            "title": "Mastering Linked Lists",
            "imageSrc": ""
          },
          {
            "title": "How to flip a Binary Tree",
            "imageSrc": ""
          },
          {
            "title": "C++ Programming, Problem Analysis to Program Design",
            "imageSrc": ""
          },
        ]
      },
      "microsoft applications": {
        "books": [
          {
            "title": "Microsoft Excel",
            "imageSrc": ""
          },
          {
            "title": "Microsoft Word",
            "imageSrc": ""
          },
          {
            "title": "Microsoft Publisher",
            "imageSrc": ""
          },
          {
            "title": "Microsoft PowerPoint",
            "imageSrc": ""
          },
          {
            "title": "Microsoft Access Database",
            "imageSrc": ""
          },
        ]
      }
    }
  },
  "shelf2": {

  },
  "shelf3": {

  }
};

// When user select a shelf #
let shelf;
let topics;


const shelfButtons = document.getElementsByClassName("shelf-button");
const shelfHeaderIndicator = document.getElementsByClassName("shelf-header-indicator")[0];
const displayTopics = selectedShelf => {
  // Reset on New shelf selected.
  document.getElementsByClassName("books-container")[0].innerHTML = `<div class="no-books">No Books available in this topic.</div>`;
  document.getElementsByClassName("shelf-books-header")[0].innerText = "Books";
  
  // Set active and not active shelf-buttons.
  const shelfHeader  = selectedShelf.charAt(0).toUpperCase() + selectedShelf.slice(1);
  shelfHeaderIndicator.innerText = shelfHeader;

  for (i = 0; i < shelfButtons.length; i++) {
    console.log(shelfButtons[i].innerText);
    if (shelfButtons[i].innerText.replace(" ", "").toLowerCase() === selectedShelf)
      shelfButtons[i].classList.add("active-shelf-button");
    else
      shelfButtons[i].classList.remove("active-shelf-button");
  }

  shelf = bookData[selectedShelf];
  topics = shelf["topics"];

  let topicContainerEl = document.getElementsByClassName("topics-container")[0];

  if (!topics) {
    console.log("No books");
    topicContainerEl.innerHTML = `<div class="no-topic">No Topics Found.</div>`;
    return;
  }

  // Get parent element to display topics.
  let topicElements = ``;
  for (i in topics) {
    i = i.charAt(0).toUpperCase() + i.slice(1);
    topicElements += `<div class="topics" onclick="activeTopic('${i}')">${i}</div>`
  }

  topicContainerEl.innerHTML = topicElements;
}

const activeTopic = topic => {
  let topicsElements = document.getElementsByClassName("topics");
  document.getElementsByClassName("shelf-books-header")[0].innerText = topic;

  for (i = 0; i < topicsElements.length; i++) {
    if (topicsElements[i].innerHTML === topic)
      topicsElements[i].classList.add("active-topic");
    else
      topicsElements[i].classList.remove("active-topic");
  }

  let booksContainerEl = document.getElementsByClassName("books-container")[0];
  let booksOfActiveTopic = shelf.topics[topic.toLowerCase()]["books"];

  if (!booksOfActiveTopic) {
    booksContainerEl.innerHTML = `<div class="no-books">No Books available in this topic.</div>`
  } else {
    booksContainerEl.innerHTML = "";
    for (i of booksOfActiveTopic) {
      booksContainerEl.innerHTML += `<div class="books" onclick="activeBook('${i.title}')">${i.title}</div>`
    }
  }
}

const activeBook = book => {
  let books = document.getElementsByClassName("books");

  for (i = 0; i < books.length; i++) {
    if (books[i].innerHTML === book)
      books[i].classList.add("active-book");
    else
      books[i].classList.remove("active-book");
  }

  // Display book information : FUNCTION
}