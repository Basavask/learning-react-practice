const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBooks();
const bookInfo = book[0];

//destucturing
const { title, author, hasMovieAdaptation, genres } = bookInfo;
console.log(title, author, hasMovieAdaptation, genres);

//rest operators
const [firstgenre, secodGenere, ...genresList] = genres;
console.log(firstgenre, secodGenere, genresList);

//spread operators
const updateBook = {
  ...bookInfo,
  releaseDate: 10 / 10 / 1996,
  marriage: 16 / 2 / 2025,
  pages: 847,
};

console.log(updateBook);

//short circuting
const sC = true && "its working";
sC;

const sc1 = false || "itttt s working";
sc1;

//nullsing coalescing operator , - eliminates the null, 0 and all;
const nullC = 0 ?? "no data";
nullC;

//arrow fn
const ratingRoundOff = (rating) => Math.round(rating);

// optional chaning ;
const rating = bookInfo.reviews?.goodreads?.rating ?? 0;
console.log(ratingRoundOff(rating));

// map : do the operations and always return a new array with new data.
const newBookTitles = book.map((book) => book.title);
newBookTitles;

const x = [2, 5, 7, 4, 3, 6].map((val) => val * 5);
x;

const data1 = "10/10/25";
console.log(data1.split("/")[2]);

// filter: here we will pass the condition inside the funciton and that will filter out the array and returns new array;

const bookTitils = book.filter(
  (book) => book.translations.spanish === "Juego de tronos"
);
bookTitils;

//reduce: here it will reduce and boils upto one single array value to return back... very powerful of all (map, filter)
// acc is the inital value which we are initialzing at begining and it will keep on adding on each iterations.
const allPagesCount = book.reduce((acc, book) => acc + book.pages, 0);
allPagesCount;

//sort : here it will sort the array but it will change the original array which will be sorted
//   so we have slice it so that it will give new array and wont affect the original array.
const arr = [3, 6, 3, 6, 5, 9];
sortArr = arr.slice().sort((a, b) => a - b);
console.log(sortArr);
arr;
