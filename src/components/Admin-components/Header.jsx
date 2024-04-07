import Link from 'next/link';

export default function AdminHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/admin/dashboard">Dashboard</Link></li>
          <li><Link href="/admin/members">Members</Link></li>
          <li><Link href="/admin/events">Events</Link></li>
          <li><Link href="/admin/news">News</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}
