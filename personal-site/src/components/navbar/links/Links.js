import NavLink from "./navLink/NavLink" 

const links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Experience',
        path: '/experience'
    },
    {
        title: 'Projects',
        path: '/projects'
    },
    {
        title: 'Hobbies',
        path: '/hobbies'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]

export default function Links(){
    return (
        <div className="flex items-center gap-[5rem]">
            {links.map((links) => (
                <NavLink item={links} key={links.title} />
            ))}
        </div>
    )
}