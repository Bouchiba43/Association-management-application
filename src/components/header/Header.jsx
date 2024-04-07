import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header>
                <div className="topNav">
                    <Image src="/images/BouchibaLogo.jpeg" alt="image" width={50} height={50} className="logo" />
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="/events">Events</Link>
                            </li>
                            <li>
                                <Link href="/news">News</Link>
                            </li>
                            <li>
                                <Link href="/aboutUs">About Us</Link>
                            </li>
                        </ul>
                            <p className="title">Association Management Application</p>
                    </nav>
                </div>
        </header>
    );
}
