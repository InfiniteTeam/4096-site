import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        marginTop: 74.5,
      }}
    >
      <Navbar />
      {children}

      <div className="w-full text-zinc-400 z-50 pb-8">
        <div className="px-8 flex gap-8 items-center">
          <span className="font-semibold text-sm">
            Copyright © 2022 InfiniteTeam All rights reserved.
          </span>
          <Link href="/tos">
            <a className="hover:text-white transition-all duration-300">
              이용약관
            </a>
          </Link>
          <a
            className="hover:text-white transition-all duration-300"
            href="https://inft.kr/privacy"
            target="_blank"
          >
            개인정보 처리방침
          </a>
          <a
            className="hover:text-white ml-auto mr-3 font-semibold"
            href="https://inft.kr"
            target="_blank"
          >
            Designed by InfiniteTeam
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
