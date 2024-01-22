import Link from "next/link";

export default function ExternalLinks({item}){
   return (
        <Link href={item.url}>
            <p target="_blank" className="hover:text-[#399736]">
                {item.name}
            </p>
        </Link>
   ) 
}