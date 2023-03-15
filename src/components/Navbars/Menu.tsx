import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

const Menu = () => {
  const links = [
    { label: 'Home', href: '/', icon: 'fa-file-alt'},
    { label: 'Quiz Bank', href: '/', icon: 'fa-file-alt'},
    { label: 'Free Courses', href: '/', icon: 'fa-file-alt'},
    { label: 'Tech Guides', href: '/', icon: 'fa-file-alt'},
    { label: 'Tinker', href: '/', icon: 'fa-file-alt'},
    { label: 'Blog', href: '/', icon: 'fa-file-alt'},
    { label: 'About', href: '/', icon: 'fa-file-alt'},
  ];
  const router = useRouter()
  console.log(router.asPath);
    return (
        <>
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              {links.map((link, idx) => 
                <li key={idx} className="flex items-center active">
                  <Link
                    className="hover:text-blueGray-500 active text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href={link.href}
                  >
                    <i className={['text-blueGray-400', 'far', link.icon, 'text-lg', 'leading-lg', 'mr-2'].join(' ')} />{" "}
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
        </>
    );
};

export default Menu;