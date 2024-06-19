import React from 'react';
import styles from './Blog.module.css';

const cardsData = [
  {
    id: 1,
    tags: ["Aging at Home", "Home Care","Safety"],
    title: "Digital Modern Caregivers",
    date: "Oct 06, 2018",
    image: "/banner1.jpg",
    author: "niko",
  },
  {
    id: 2,
    tags: ["Caregivers"],
    title: "Broad Clinical Interviews",
    date: "Oct 06, 2018",
    image: "/banner1.jpg",
    author: "niko",
  },
  {
    id: 3,
    tags: ["Caregivers"],
    title: "Broad Clinical Interviews",
    date: "Oct 06, 2018",
    image: "/banner1.jpg",
    author: "niko",
  },
  {
    id: 4,
    tags: ["Caregivers"],
    title: "Broad Clinical Interviews",
    date: "Oct 06, 2018",
    image: "/banner1.jpg",
    author: "niko",
  },
  // Add more cards as needed
];

const Card = ({ tags, title, date, image, author }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img_container}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.tagcontainer}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{date}</div>
        <div className={styles.author}>-{author}</div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className={styles.container}>
      {cardsData.map(card => (
        <Card
          key={card.id}
          tags={card.tags}
          title={card.title}
          date={card.date}
          image={card.image}
          author={card.author}
        />
      ))}
    </div>
  );
};

export default Page;
