import ExternalLinks from "./components/ExternalLinks"

const links = [
    {
        name: "GitHub",
        url: "https://github.com/stevenfojas670",
        icon: "fab fa-github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/steven-fojas-8a1516241",
        icon: "fab fa-linkedin",
    }
]

export default function Links() {
    return (
        <>
            {links.map((links) => (
                <ExternalLinks item={links} key={links.name} />
            ))}
        </>
    )
}