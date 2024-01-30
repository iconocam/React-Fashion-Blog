import React from 'react';

function Article() {
const articles = [
    {
    title: 'On the street in Brooklyn',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg',
    },
    {
    title: 'Vintage in Vogue',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg',
    },
];

return (
    <main>
    {articles.map((article, index) => (
        <article key={index}>
        <h2>{article.title}</h2>
        <img src={article.imageUrl} alt={`Description of Image ${index + 1}`} />
        <p>{article.content}</p>

        <p>
            Continues... <a href="#">Read more</a>
        </p>
        </article>
    ))}
    </main>
);
}

export default Article;