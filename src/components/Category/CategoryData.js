import bookImg from "../../assets/images/books.jpg";
import stationeryImg from "../../assets/images/stationery.jpg";
import toyImg from "../../assets/images/toys.jpg";
import electronicImg from "../../assets/images/electronic.jpg";
const categories = [
  {
    id: 1,
    title: "Books",
    slug: "books",
    image: bookImg,
    description: "School, College & Competitive Books",
    totalProducts: 320,
  },
  {
    id: 2,
    title: "Stationary",
    slug: "stationary",
    image: stationeryImg,
    description: "Pens, Notebooks, Geometry Box",
    totalProducts: 180,
  },
  {
    id: 3,
    title: "Educational Toys",
    slug: "educational-toys",
    image: toyImg,
    description: "Learning Toys for Kids",
    totalProducts: 90,
  },

  {
    id: 4,
    title: "Electronics",
    slug: "electronics",
    image: electronicImg,
    description: "Phone , Tablet , Powerbank",
    totalProducts: 40,
  },
];

export default categories;