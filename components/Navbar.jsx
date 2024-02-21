"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const currentPath = router.pathname;
    setActiveLink(currentPath);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeLink", link);
    }
  };

  const getLinkClassName = (link) => {
    return link === activeLink
      ? "inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-lg font-bold leading-5"
      : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-lg font-bold leading-5";
  };

  return (
    <nav className="shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="hidden sm:-my-px sm:ml-6 sm:flex space-x-7 text-blue-500">
              <Link href="/" passHref onClick={() => handleLinkClick("/")}>
                <div className={getLinkClassName("/")}>Attribute</div>
              </Link>
              <Link
                href="/ari"
                passHref
                onClick={() => handleLinkClick("/ari")}
              >
                <div className={getLinkClassName("/ari")}>ARI-Details</div>
              </Link>
              <Link
                href="/address"
                passHref
                onClick={() => handleLinkClick("/address")}
              >
                <div className={getLinkClassName("/address")}>
                  Address Details
                </div>
              </Link>
              <Link
                href="/description"
                passHref
                onClick={() => handleLinkClick("/description")}
              >
                <div className={getLinkClassName("/description")}>
                  Description
                </div>
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-white hover:bg-b-700 focus:outline-none focus:bg-blue-700 focus:text-white"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium  hover:text-blue-300 focus:outline-none focus:text-blue-300 focus:bg-blue-700"
          >
            Attribute
          </Link>
          <Link
            href="/ari"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium  hover:text-blue-300 focus:outline-none focus:text-blue-300 focus:bg-blue-700"
          >
            ARI-Details
          </Link>
          <Link
            href="/address"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium  hover:text-blue-300 focus:outline-none focus:text-blue-300 focus:bg-blue-700"
          >
            Address Details
          </Link>
          <Link
            href="/description"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium  hover:text-blue-300 focus:outline-none focus:text-blue-300 focus:bg-blue-700"
          >
            Description
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
