const products =[
    {
        id: 1,
        name:"Engineering Mathematics Volume II ",
        category:"Books",
        price: 799,
        oldPrice:999,
        rating:4.8,
        image:"https://d3i3lzopayriz.cloudfront.net/books/0_front_cover_1660716982.jpg",
        featured:true

    },
    
        {
        id: 2,
        name:"Premium Notebook Set",
        category:"Stationary",
        price: 299,
        oldPrice:399,
        rating:4.9,
        image: "https://m.media-amazon.com/images/I/912+mfE2XBL._AC_UF1000,1000_QL80_.jpg",
        featured:true

    },
    
    {
        id: 3,
        name:"Scientific Calculator",
        category:"Electronics",
        price: 1299,
        oldPrice:1499,
        rating:4.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeK1ZB3FSRriAdVPli4TgrcukWeFlTssLonbIV43YDwVsSf_AAa9es4aFu&s=10",
        featured:true
    },

    {
        id: 4,
        name:"Whiteboard",
        category:"Study Tools",
        price: 999,
        oldPrice:1299,
        rating:4.7,
        image: "https://www.vkf-renzel.com/out/pictures/generated/product/1/1000_1000_75/r120092221-01/whiteboard-economy-16853-1.jpg",
        featured:true
    },

    {
        id: 5,
        name:"Pens",
        category:"Stationary",
        price: 100,
        oldPrice:150,
        rating:4.8,
        image: "https://scooboo.in/cdn/shop/files/20_Assorted_Kaco_Pure_Assorted_0.5mm_Gel_Pen_Set.jpg?v=1765343014&width=1080",
        featured:true
    },


    {
        id: 6,
        name:"Study Table",
        category:"Study Tools",
        price: 1899,
        oldPrice:2099,
        rating:4.7,
        image: "https://www.adouerwood.com/cdn/shop/files/Cristantello_Desk.webp?v=1763642023&width=1080",
        featured:true
    },

  {
    id: 7,
    name: "Ergonomic Chair",
    category: "Study Tools",
    price: 4999,
    oldPrice: 5499,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbb89rmK_tmav0bpoMuGcsKEgozgD1IsGGTejCEaw_w&s=10",
    featured: false
  },
  
  {
    id: 8,
    name: "Bookshelf Organizer",
    category: "Study Tools",
    price: 1599,
    oldPrice: 1799,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcI2aKewfwA89ShkKsIRZ-O7bBfOhB1uJfO_KoekK80Q&s=10",
    featured: false
  },
  {
    id: 9,
    name: "Desk Lamp",
    category: "Study Tools",
    price: 899,
    oldPrice: 1099,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWwMK5iMGjuoKCkO4VgPs4Kevtm3ThaQA9XJOCbuVdw&s=10",
    featured: false
  },
  {
    id: 10,
    name: "Laptop Stand",
    category: "Study Tools",
    price: 1299,
    oldPrice: 1499,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLutpjp8P6J_c2HrAo-_-E1MLrnhXUJnsBdNpD9niMg&s",
    featured: false
  },
  {
    id: 11,
    name: "smartboard",
    category: "Study Tools",
    price: 1999,
    oldPrice: 2299,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76_dMY6pSSqqpkmrhBQkPJmXYDfkDlTCIRa2hpFiLhA&s=10",
    featured: false
  },
  {
    id: 12,
    name: "Study Table",
    category: "Study Tools",
    price: 1899,
    oldPrice: 2099,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3w3Os7sPVjtvIpjfDubsxdKl9B-mDz8W4yXxWnVxYQ&s=10",
    featured: true
  },
  {
    id: 13,
    name: "Stationery Kit",
    category: "Study Tools",
    price: 499,
    oldPrice: 699,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH08qg-JAYKbl8JwUBbjf90tMuGvirAOL_H1unVXiUyw&s=10",
    featured: false
  },
  {
    id: 14,
    name: "Noise-Cancelling Headphones",
    category: "Study Tools",
    price: 2999,
    oldPrice: 3499,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOb68xqpeuQripcSNYpa8OjBW1h7FWFPunoTINtf8zpA&s",
    featured: false
  },
  {
    id: 15,
    name: "File Cabinet",
    category: "Study Tools",
    price: 2499,
    oldPrice: 2799,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sLAqq70uqWZYnQ9RroLKMvSVxiRPrB9Wr7L0zGycew&s=10",
    featured: false
  },
  {
    id: 16,
    name: "Cork Board",
    category: "Study Tools",
    price: 799,
    oldPrice: 999,
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzRWjWr-qcAFUViUaJGNqnJCRDyc63eFR1sN-cEIswQ&s=10",
    featured: false
  },


  {
    id: 17,
    name: "Ballpoint Pen Set",
    category: "Stationary",
    price: 299,
    oldPrice: 399,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuFEE0Amtd5XahIit5_fdptllisepdnBYY4fb1BsN8A&s=10",
    featured: true
  },
  {
    id: 18,
    name: "Notebook Pack",
    category: "Stationary",
    price: 499,
    oldPrice: 599,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxtGS0kLzkACqvt5Sutw9JxnjFNX0xEFTevCmz9LPkg&s=10",
    featured: false
  },
  {
    id: 19,
    name: "Highlighter Set",
    category: "Stationary",
    price: 199,
    oldPrice: 249,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIjdowiTikJeB5DHQaoSpY0sOYbTlpLydFuoeeb-kCVg&s=10",
    featured: false
  },
  {
    id: 20,
    name: "Sticky Notes",
    category: "Stationary",
    price: 149,
    oldPrice: 199,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGVrA5pNAogOSdtYMOHo7HIrw4VfbXss8BPEg0Wtz2A&s=10",
    featured: false
  },
  {
    id: 21,
    name: "Fountain Pen",
    category: "Stationary",
    price: 799,
    oldPrice: 999,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEw1ZfqGKQXufVe39wsFh51pQPxbyzqUIZrNyzSq3Ew&s=10",
    featured: true
  },
  {
    id: 22,
    name: "Pencil Box",
    category: "Stationary",
    price: 249,
    oldPrice: 299,
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHtres2iQBkP2W2yawWAjcQ7WM8maOgnApHR7MJ8frw&s=10",
    featured: false
  },
  {
    id: 23,
    name: "Eraser Pack",
    category: "Stationary",
    price: 99,
    oldPrice: 149,
    rating: 4.2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNz9XyhZYuTQXqHbhUmAdc85xe--45cou-6CKxiJGWiQ&s=10",
    featured: false
  },
  {
    id: 24,
    name: "Geometry Set",
    category: "Stationary",
    price: 349,
    oldPrice: 449,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF0OQu_r2W9brOR3Y5vEeUdUmXfq10UiPslhpsemfjQ&s=10",
    featured: false
  },
  {
    id: 25,
    name: "Marker Pens",
    category: "Stationary",
    price: 399,
    oldPrice: 499,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9wj5TVTpop8HK6gnhg12gIpUkNgSoFKs25lt4T7Jyg&s=10",
    featured: false
  },
  {
    id: 26,
    name: "Paper Clips",
    category: "Stationary",
    price: 129,
    oldPrice: 179,
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoACCzYOFm3KttNx3YoOxCHWboWoCZNZH4XmnpqOeO9A&s=10",
    featured: false
  },


  {
    id: 27,
    name: "The Great Gatsby",
    category: "Books",
    price: 499,
    oldPrice: 599,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsjrWbriIIDcLMH9CHQqJWMSV_F5yXxqXv0vbhCEO4A&s=10",
    featured: true
  },
  {
    id: 28,
    name: "To Kill a Mockingbird",
    category: "Books",
    price: 399,
    oldPrice: 499,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHH9UbKsXnMxNnKR2K_SJipFPzes03HFZd1onf4HoaXw&s=10",
    featured: false
  },
  {
    id: 29,
    name: "1984",
    category: "Books",
    price: 449,
    oldPrice: 549,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXdGeQvRHLeUkCroe0AltvGBYSIeSEkjYo9InVfKgaQ&s=10",
    featured: false
  },
  {
    id: 30,
    name: "Pride and Prejudice",
    category: "Books",
    price: 349,
    oldPrice: 449,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdHTFFIQhiOuMehcgZ2EHmx2J8ESbHApY8sDJKifdUg&s=10",
    featured: false
  },
  {
    id: 31,
    name: "Moby Dick",
    category: "Books",
    price: 599,
    oldPrice: 699,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAZYUefJwjkBV-gMp0Z_tFHKyxZ0pZZOeF0qG4wCLQQ&s=10",
    featured: false
  },
  {
    id: 32,
    name: "War and Peace",
    category: "Books",
    price: 799,
    oldPrice: 999,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMCEnIpQqgN9j8uKf-SasQ85sBISM7dcSjWGqCTfZ7A&s=10",
    featured: false
  },
  {
    id: 33,
    name: "The Catcher in the Rye",
    category: "Books",
    price: 379,
    oldPrice: 479,
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1-SRlKggb3ueE31XroIg-lsGJS0-Uy9xh1YAglnWbQ&s=10",
    featured: false
  },
  {
    id: 34,
    name: "Jane Eyre",
    category: "Books",
    price: 429,
    oldPrice: 529,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYyYgRSeFYvOxTb3rX8uefNIpQQR_XMajbCWKzmzsGuA&s=10",
    featured: false
  },
  {
    id: 35,
    name: "Crime and Punishment",
    category: "Books",
    price: 649,
    oldPrice: 749,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmfYIJFlP1prVf7SYcqc-xR-HVeHQgzjl8BYPOCZjDA&s=10",
    featured: true
  },
  {
    id: 36,
    name: "Brave New World",
    category: "Books",
    price: 459,
    oldPrice: 559,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTVoGtkr7aOr9H13YvlMtDyRxBjf1fktvrT2a54BXpQ&s=10",
    featured: false
  },


  {
    id: 37,
    name: "Wooden Alphabet Blocks",
    category: "Educational Toys",
    price: 599,
    oldPrice: 699,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCW_KWsfSn6_apWonYCdjnNKFwZuOatY6GnGOMzMWlcA&s=10",
    featured: true
  },
  {
    id: 38,
    name: "Math Puzzle Board",
    category: "Educational Toys",
    price: 899,
    oldPrice: 1099,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLlgCurJVX7MDIHVfd8UjognGS_P_6RRDvclaa0Bb9w&s",
    featured: false
  },
  {
    id: 39,
    name: "Science Experiment Kit",
    category: "Educational Toys",
    price: 1499,
    oldPrice: 1799,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSxCOe6HFPI6Uos18cLVG9Rc8JEhT1eq12Te8sZJI2A&s=10",
    featured: false
  },
  {
    id: 40,
    name: "Solar System Model",
    category: "Educational Toys",
    price: 1299,
    oldPrice: 1499,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvaLdgbWCbjmJy2NwVkqFvpadaZSeve9GN92TFj4Drew&s=10",
    featured: false
  },
  {
    id: 41,
    name: "Coding Robot Toy",
    category: "Educational Toys",
    price: 2499,
    oldPrice: 2799,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJZ-KuLH3tu71E0WV-14Yv85S-hRvdcJznoiwlO_UmA&s=10",
    featured: true
  },
  {
    id: 42,
    name: "Geography Globe",
    category: "Educational Toys",
    price: 999,
    oldPrice: 1199,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhr-lPOexOpCwoxuepm8LI5XswFySlbPi_ibUIV3RjQ&s=10",
    featured: false
  },
  {
    id: 43,
    name: "Magnetic Building Set",
    category: "Educational Toys",
    price: 1799,
    oldPrice: 2099,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyi8qRrJOv5IRQVPyxiLpl7EGX68QXrRd4IOfHCez6CA&s",
    featured: false
  },
  {
    id: 44,
    name: "Human Anatomy Puzzle",
    category: "Educational Toys",
    price: 699,
    oldPrice: 899,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqcu7iE7bhGTv_LukftceezG4qPnaX6567r4SLBjNTg&s=10",
    featured: false
  },
  {
    id: 45,
    name: "Abacus Learning Tool",
    category: "Educational Toys",
    price: 499,
    oldPrice: 599,
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJdnP067LLnJD4DE2Ld8sidrppcN9DAy32OAeDcB6sQ&s=10",
    featured: false
  },
  {
    id: 46,
    name: "Periodic Table Chart",
    category: "Educational Toys",
    price: 349,
    oldPrice: 449,
    rating: 4.2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZcQ3LpQfbVBftIqdpHEjl3XaB3AJzJkIH5oh2XlXCw&s=10",
    featured: false
  },



  {
    id: 47,
    name: "Adjustable Study Lamp",
    category: "Study Tools",
    price: 899,
    oldPrice: 1099,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpxWcSlzk1_nae2ul-bQD9liQYCuTgZX-Lo4B_aZiUHQ&s=10",
    featured: false
  },
  {
    id: 48,
    name: "Ergonomic Study Chair",
    category: "Study Tools",
    price: 3499,
    oldPrice: 3999,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWD-5UqVY7xRJ414PMwoRIK5NSvTNI9iASdI204ZGXgQ&s=10",
    featured: false
  },
  {
    id: 49,
    name: "Portable Whiteboard",
    category: "Study Tools",
    price: 1599,
    oldPrice: 1799,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aVwlVg-oxt0Q3l4Fe7ud6WtrBoDKkp7ELyTPvDy-bg&s=10",
    featured: false
  },
  {
    id: 50,
    name: "Laptop Cooling Stand",
    category: "Study Tools",
    price: 1299,
    oldPrice: 1499,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LO6x5aXLI3tHkgw_BpY71h7p0SZf67vS7eJgxHr5Ag&s=10",
    featured: false
  },
  {
    id: 51,
    name: "Noise Reduction Headphones",
    category: "Study Tools",
    price: 2799,
    oldPrice: 3199,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkW6_nICmF2eaLK3bA3TjceqZi5K9GwfbzAL8e2lGOA&s=10",
    featured: false
  },
  {
    id: 52,
    name: "Desk Organizer",
    category: "Study Tools",
    price: 699,
    oldPrice: 899,
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayhvR4NOwqoPdxQakaZDO0fS55wHo3k4Q_1XvJAEn_A&s=10",
    featured: false
  },
  {
    id: 53,
    name: "Digital Alarm Clock",
    category: "Study Tools",
    price: 499,
    oldPrice: 699,
    rating: 4.2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmOPwKVu0JnNK9ICUDunX2cbcTLWXEJ1sdJpQaHvZYA&s=10",
    featured: false
  },
  {
    id: 54,
    name: "Filing Cabinet",
    category: "Study Tools",
    price: 2299,
    oldPrice: 2599,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65e4DRfUVm-LZzXEufRkw9aW1b1xfgVHViCivvKd7PA&s=10",
    featured: false
  },
  {
    id: 55,
    name: "Study Table",
    category: "Study Tools",
    price: 1899,
    oldPrice: 2099,
    rating: 4.7,
    image: "https://www.adouerwood.com/cdn/shop/files/Cristantello_Desk.webp?v=1763642023&width=1080",
    featured: true
  },
  {
    id: 56,
    name: "Stationery Holder",
    category: "Study Tools",
    price: 349,
    oldPrice: 499,
    rating: 4.1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8Qb6bQ8Xh-Oj3KEBWolbsgjdt6wyRolVssmn_Zi0Vg&s=10",
    featured: false
  },


  {
    id: 57,
    name: "Smartphone",
    category: "Electronics",
    price: 24999,
    oldPrice: 27999,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAf9fYrTROxungWgIoQ3GQDmq7HdbqpabN_VW8GDI1ag&s=10",
    featured: true
  },
  {
    id: 58,
    name: "Laptop",
    category: "Electronics",
    price: 55999,
    oldPrice: 59999,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oNCV7csoInS5ym2pfrzq_-OtEqXpCVaX7EPC7LPWIQ&s=10",
    featured: false
  },
  {
    id: 59,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 3999,
    oldPrice: 4499,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNj5u-j6JR4n48ZtnQ0zOMfhbu8VJenW8y_I9pKu3mSQ&s",
    featured: false
  },
  {
    id: 60,
    name: "Smartwatch",
    category: "Electronics",
    price: 12999,
    oldPrice: 14999,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuQJ-2Z7Bl4_FIIqkyb2xHdyt-g84LMpIcjFfDmQ3FA&s=10",
    featured: false
  },
  {
    id: 61,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 4999,
    oldPrice: 5999,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJfK76nLsqjQ90oYBGzr7WfNZ5zxUZGyx618VlxnWGA&s=10",
    featured: false
  },
  {
    id: 62,
    name: "Tablet",
    category: "Electronics",
    price: 18999,
    oldPrice: 20999,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgCageII7CVx1qEzcAn_mftHKnm0aNZ2vXClTqbUQuw&s=10",
    featured: false
  },
  {
    id: 63,
    name: "Gaming Console",
    category: "Electronics",
    price: 34999,
    oldPrice: 37999,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8A0tjtWegx0tV7kaTASwDeeSZgSGZQsK2s31vS61HQQ&s=10",
    featured: true
  },
  {
    id: 64,
    name: "External Hard Drive",
    category: "Electronics",
    price: 5999,
    oldPrice: 6999,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHO3OlXRyrOQTi_GSj978sJAr9DGxItrqVOFXGF0Zdg&s=10",
    featured: false
  },
  {
    id: 65,
    name: "Digital Camera",
    category: "Electronics",
    price: 25999,
    oldPrice: 28999,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcyPKlgT2_SLdR-Hx-46v8TFIQNY3Y3EjE0Pbt9sqqg&s=10",
    featured: false
  },
  {
    id: 66,
    name: "Power Bank",
    category: "Electronics",
    price: 1999,
    oldPrice: 2499,
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWrxGDFfmySzS-Q5ObbsT6R637VYX6nDK1ADLQhedSA&s=10",
    featured: false
  },


  {
    id: 67,
    name: "Classic Ruled Notebook",
    category: "Notebooks",
    price: 199,
    oldPrice: 249,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdkXTtTgzbbHIt2oyWvfV4Qhiou3T_LHrNjCTP3blyw&s=10",
    featured: false
  },
  {
    id: 68,
    name: "Spiral Bound Notebook",
    category: "Notebooks",
    price: 249,
    oldPrice: 299,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22GSjbOycVnaUSOpdQ1CvezApPvl6xeyFE5CQXPuOdA&s=10",
    featured: false
  },
  {
    id: 69,
    name: "Hardcover Journal",
    category: "Notebooks",
    price: 399,
    oldPrice: 499,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXf24YjOIcs80e30UzNI8EY1ogPlAXabUy59LCEhgUg&s=10",
    featured: false
  },
  {
    id: 70,
    name: "Pocket Notebook",
    category: "Notebooks",
    price: 149,
    oldPrice: 199,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsk5pah9xHvILwio9jgAjZtZeGAgrTh7cPBl6roR7tlQ&s=10",
    featured: false
  },
  {
    id: 71,
    name: "Graph Paper Notebook",
    category: "Notebooks",
    price: 299,
    oldPrice: 349,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVL0GtkGv813QQhlw9WfQ38gPgNvy-Q7d_LfTj-sOfwg&s=10",
    featured: false
  },
  {
    id: 72,
    name: "Leather Bound Notebook",
    category: "Notebooks",
    price: 599,
    oldPrice: 699,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpitPlt1cXjE2kXEMbScQm7LGI-bAKFU8jbS0Eg9p4w&s=10",
    featured: true
  },
  {
    id: 73,
    name: "Eco-Friendly Notebook",
    category: "Notebooks",
    price: 249,
    oldPrice: 299,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuGbJ_nX3ZvvAGDOHvkEGYOR3IQf_MhEoS5fYzVzdbg&s",
    featured: false
  },
  {
    id: 74,
    name: "Dotted Bullet Journal",
    category: "Notebooks",
    price: 349,
    oldPrice: 399,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0JWqtcMnqzfpxhbCQBK_MHZB1akVv9TGZjp2w1Ra1A&s=10",
    featured: false
  },
  {
    id: 75,
    name: "Project Planner Notebook",
    category: "Notebooks",
    price: 449,
    oldPrice: 549,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzi16BhpxnP8Ye5EZoLspzsVTxlpyCpsqldozvpC4pw&s=10",
    featured: false
  },
  {
    id: 76,
    name: "Travel Diary Notebook",
    category: "Notebooks",
    price: 379,
    oldPrice: 479,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Q2AZQhZq1kiX0XtMY1Ooixd25_tkvjCO4q-qap4YzA&s=10",
    featured: false
  }




];

export default products;