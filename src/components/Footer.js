import React from "react";

function Footer() {
const footerNavItems = [
    { label: "Women's", link: "/womens" },
    { label: "Men's", link: "/mens" },
    { label: "On the Street", link: "/on-the-street" },
    { label: "The Catwalk", link: "/catwalk" },
    { label: "Ad Watch", link: "/ad-watch" },
    { label: "About", link: "/about" },
];

return (
    <footer>
    <nav aria-label="Footer Navigation" role="navigation">
        <ul>
        {footerNavItems.map((item, index) => (
            <li key={index}>
            <a href={item.link}>{item.label}</a>
            </li>
        ))}
        </ul>
    </nav>
    <p>&copy; 2024 Your Website. All Rights Reserved.</p>
    </footer>
);
}

export default Footer;
