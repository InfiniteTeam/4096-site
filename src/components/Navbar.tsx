import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';

const Navbar: React.FC = () => {
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      window.scrollTo({
        top: window.scrollY + 1,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 px-5 py-4 flex bg-transparent backdrop-blur-xl z-[99999] transition-all duration-300">
      <a
        className="font-extrabold text-3xl cursor-pointer px-2 py-1"
        onClick={() => {
          animateScroll.scrollToTop();
        }}
      >
        4096
      </a>
    </nav>
  );
};

export default Navbar;
