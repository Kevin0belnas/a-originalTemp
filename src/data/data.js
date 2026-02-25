// src/data/data.js

const author = {
  name: "A.J. Sinclair",
  genre: "Fantasy",
  bio: "A.J. Sinclair is a bestselling fantasy author known for epic world-building and unforgettable adventures. His stories transport readers into realms of dragons, magic, and heroism.",
  longBio:
    "Born with a passion for storytelling, A.J. Sinclair has spent years crafting immersive fantasy worlds. From dragons to ancient prophecies, his novels blend adventure, suspense, and heart. When not writing, Sinclair enjoys reading classic myths, traveling, and mentoring aspiring writers.",
  location: "United Kingdom",
  email: "contact@ajsinclair.com",
  website: "www.ajsinclairbooks.com",
  social: {
    twitter: "https://twitter.com/ajsinclair",
    instagram: "https://instagram.com/ajsinclair",
    facebook: "https://facebook.com/ajsinclair"
  },
  image: "/images/author.png"
};

const books = [
  {
    id: 1,
    title: "The Dragon’s Oath",
    description:
      "A young warrior forms a sacred bond with an ancient dragon to save a kingdom on the brink of destruction.",
    releaseYear: 2021,
    image: "/images/dragons-oath.png"
  },
  {
    id: 2,
    title: "Crown of Embers",
    description:
      "As war spreads across the realm, a hidden heir must rise and claim the throne before darkness consumes the empire.",
    releaseYear: 2022,
    image: "/images/crown-of-embers.png"
  },
  {
    id: 3,
    title: "Rise of the Eternal Flame",
    description:
      "An ancient prophecy awakens, threatening to burn the world unless a forbidden power is mastered.",
    releaseYear: 2023,
    image: "/images/eternal-flame.png"
  },
  {
    id: 4,
    title: "Shadow of the Fallen King",
    description:
      "A long-dead ruler returns from myth, bringing chaos and a terrifying new order.",
    releaseYear: 2020,
    image: "/images/fallen-king.png"
  },
  {
    id: 5,
    title: "Beyond the Ashes",
    description:
      "After devastating loss, unlikely heroes unite to rebuild what was destroyed.",
    releaseYear: 2019,
    image: "/images/beyond-ashes.png"
  },
  {
    id: 6,
    title: "The Last Dragon Rider",
    description:
      "The final rider must confront destiny in a battle that will determine the fate of dragons and men alike.",
    releaseYear: 2024,
    image: "/images/last-dragon-rider.png"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Book Reviewer, Literary Weekly",
    message:
      "A.J. Sinclair delivers a breathtaking fantasy experience. The Dragon’s Oath is a masterpiece of modern epic storytelling."
  },
  {
    id: 2,
    name: "James Carter",
    role: "Amazon Verified Reader",
    message:
      "I couldn’t put it down. The world-building is phenomenal and the characters feel incredibly real."
  },
  {
    id: 3,
    name: "Emily Roberts",
    role: "Bestselling Author",
    message:
      "Sinclair’s writing reminds me why I fell in love with fantasy in the first place. Powerful, emotional, and unforgettable."
  }
];

export { author, books, testimonials };