import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';

const Navbar: React.FC = () => {
  const router = useRouter();

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
    <nav className="fixed top-0 left-0 right-0 px-5 py-3 flex items-center bg-transparent backdrop-blur-lg z-[99999] transition-all duration-300">
      <a
        className="font-extrabold text-3xl cursor-pointer px-2 py-1"
        onClick={() => {
          if (router.pathname === '/') {
            animateScroll.scrollToTop();
          } else {
            router.push('/');
          }
        }}
      >
        <Image src="/4096.svg" width={35} height={35} />
      </a>
      <a
        className="ml-auto flex items-center gap-3 text-lg font-semibold px-4 py-2 hover:bg-white/5 transition-all duration-300 rounded-2xl"
        href="https://inft.kr"
        target="_black"
        rel="norefferrer"
      >
        <span className="font-light">By</span>
        <Image src="/infiniteteam.svg" priority width={20} height={20} />
        <span className="text-xl">InfiniteTeam</span>
      </a>
    </nav>
  );
};

export default Navbar;
