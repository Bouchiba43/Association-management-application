import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <nav>
                <Image src="" alt="image" />
                <Link href='/'>Home</Link>
                <Link href='/events'>Events</Link>
                <Link href='/dashboard'>Dashboard</Link>
                <Link href='/aboutUs'>About Us</Link>
            </nav>
        </header>
    );
}
