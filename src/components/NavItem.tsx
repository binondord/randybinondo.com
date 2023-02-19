import Link from 'next/link';

const NavItem = ({text, href, active}:any) => {
    return (
        <Link className={`nav__item text-gray-800 text-sm font-semibold hover:text-purple-600 mr-8 ${
            active ? "active" : ""
        }`} href={href}>{text}
        </Link>
    );
};

export default NavItem;