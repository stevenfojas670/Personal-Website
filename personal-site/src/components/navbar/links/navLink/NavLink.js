import Link from "next/link";

export default function NavLink({item}){
    return (
        <Link href={item.path}>
            <p className="hover:text-[#399736]">
                {item.title}
            </p>
        </Link> 
    )
}