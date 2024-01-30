function Nav() {
    const navItems = [
    { label: "Women's", link: "/womens" },
    { label: "Men's", link: "/mens" },
    { label: "On the Street", link: "/on-the-street" },
    { label: "The Catwalk", link: "/catwalk" },
    { label: "Ad Watch", link: "/ad-watch" },
    { label: "About", link: "/about" },
    ];

    return (
    <nav aria-label="Main Navigation" role="navigation">
        <ul className="main_nav">
        {navItems.map((item, index) => (
            <li key={index}>
            <a href={item.link}>{item.label}</a>
            </li>
        ))}
        </ul>
    </nav>
    );
}

export default Nav;
