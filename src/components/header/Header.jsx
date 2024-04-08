import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export const Header = () => {
    return (
        <>
            <Head>
                <title>Association Management Application</title>
            </Head>
            <header>
                    <div className="topNav">
                        <Image src="/images/BouchibaLogo.jpeg" alt="logo" width={50} height={50} className="logo" />
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/admin">Dashboard</Link>
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
                            <h1 className="title">Association Management Application</h1>
                        </nav>
                    </div>
            </header>
        </>
    );
}
