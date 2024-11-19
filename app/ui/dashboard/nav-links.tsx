'use client'

import { HomeIcon, Hospital ,BriefcaseMedical,ShieldPlus,Podcast,Package,ClipboardPlus ,ClipboardMinus ,MessageCircleQuestion ,Phone      } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Doctors',
    href: '/dashboard/doctors',
    icon: BriefcaseMedical,
  },
  {
    name: 'Hospitals',
    href: '/dashboard/hospitals',
    icon: Hospital,
  },
  {
    name: 'Procedure',
    href: '/dashboard/proceduers',
    icon: ShieldPlus ,
  },
  {
    name: 'Subscriptions',
    href: '/dashboard/subscriptions',
    icon: Podcast ,
  },
  {
    name: 'Packages',
    href: '/dashboard/packages',
    icon: Package ,
  },
  {
    name: 'Types of Report',
    href: '/dashboard/typesOfReport',
    icon: ClipboardPlus ,
  },
  {
    name: 'Privacy & Policy',
    href: '/dashboard/privacy',
    icon: ClipboardMinus ,
  },
  {
    name: 'FAQs',
    href: '/dashboard/faqs',
    icon: MessageCircleQuestion ,
  },
  {
    name: 'Contact Us',
    href: '/dashboard/contactus',
    icon: Phone ,
  }
   
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
            ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}
            `}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
