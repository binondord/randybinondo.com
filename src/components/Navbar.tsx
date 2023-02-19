import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
    {text: "Home", href: "/"},
    {text: "Projects", href: "/projects"},
    {text: "Contact", href:"/contact"},
];

const Navbar = () => {
    const [navActive, setNavActive] = useState<Boolean|null>(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <div className={`bg-gray-100 font-sans w-full m-0`}>
            <div className={`bg-white shadow`}>
            <div className={`container mx-auto px-4`}>
            <div className={`flex items-center justify-between py-3`}>
                <div className={`text-black`}>
                Code With Me
                </div>

                <div className={`hidden sm:flex sm:items-center`}>
                    {MENU_LIST.map((menu, idx)=>(
                        <NavItem 
                            onClick={()=>{
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                            active={activeIdx === idx} {...menu} />
                    ))}
                </div>

                <div className={`hidden sm:flex sm:items-center text-black`}>
                    test
                </div>
                {/*
                
                <a href="#" className={`text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4`}>Sign in</a>
                <a href="#" className={`text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600`}>Sign up</a>
                </div>*/}

                <div className={`sm:hidden cursor-pointer`}>
                Code with me??
                </div>
            </div>
            
            <div className={`block sm:hidden bg-white border-t-2 py-2`}>
                <div className={`flex flex-col`}>
                <a href="#" className={`text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1`}>Products SM</a>
                <a href="#" className={`text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1`}>Marketplace SM</a>
                <a href="#" className={`text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1`}>Partners</a>
                <a href="#" className={`text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1`}>Pricing</a>
                <div className={`flex justify-between items-center border-t-2 pt-2`}>
                    <a href="#" className={`text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4`}>Sign in</a>
                    <a href="#" className={`text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600`}>Sign up</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
            {/*<nav className={`nav relative
w-full
flex flex-wrap
items-center
justify-between
py-4
bg-gray-100
text-gray-500
hover:text-gray-700
focus:text-gray-700
shadow-lg
navbar navbar-expand-lg navbar-light`}>
                <Link legacyBehavior href={"/"}>
                    <h1 className="logo">Code with Randy</h1>
                </Link>
                <div onClick={()=>setNavActive(!navActive)}
                    className={`nav__menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active": ""} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx)=>(
                        <div 
                            onClick={()=>{
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
                        */}
        </header>
    );
}

export default Navbar;