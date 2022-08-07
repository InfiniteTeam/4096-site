import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Animator = dynamic(
  // @ts-ignore
  import('react-scroll-motion').then((it) => it.Animator),
  { ssr: false }
);

import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from 'react-scroll-motion';
import Navbar from '../components/Navbar';
import { IconChevronDown, IconPlus, IconBulb } from '@tabler/icons';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const IntroPageOne = () => (
  <div className="w-screen px-28 bg-[#ed4851] h-screen flex justify-center items-center">
    <div className="w-3/4 mr-auto">
      <h1 className="text-5xl font-bold tracking-wide mb-10">
        2048 게임을 디스코드 안에서.
      </h1>

      <div
        className="text-xl w-3/4 leading-relaxed"
        style={{ wordBreak: 'keep-all' }}
      >
        단순하면서도 은근히 머리를 써야 하는 게임. 디스코드에서 즐겨보세요.
        깔끔하고 미니멀한 디자인, 서버 리전 최적화를 통한 낮은 레이턴시와 버튼
        인터랙션을 이용해 빠르고 간단하게 조작이 가능하죠.
      </div>
    </div>
  </div>
);

const IntroImageOne = () => (
  <div className="w-screen flex justify-end pr-32">
    <div className=" bg-[#2A2B30] px-2 pt-2 pb-0.5 rounded-lg">
      <Image
        src="/assets/screenshot-1.png"
        alt="logo"
        width={320}
        height={320}
        priority
      />
    </div>
  </div>
);

const IntroPageTwo: React.FC<{
  videoRef: React.RefObject<HTMLVideoElement>;
}> = ({ videoRef }) => (
  <div
    className="w-screen px-28 bg-[#5048ed] flex justify-center gap-8 items-center text-right -mt-5"
    style={{
      height: 'calc(100vh + 1.25rem)',
    }}
  >
    <div>
      <video
        ref={videoRef}
        className="w-full"
        loop
        muted
        playsInline
        src="/assets/play.mp4"
      />
    </div>
    <div>
      <h1 className="text-5xl font-bold tracking-wide mb-10">
        심플, 하지만 풍부하게.
      </h1>

      <div
        className="ml-auto text-xl w-3/4 leading-relaxed"
        style={{ wordBreak: 'keep-all' }}
      >
        명령어는 필요한 것만 최소한으로 줄였습니다. 여러분이 굳이 명령어를
        입력하지 않아도 자동으로 진행 상황을 저장해주고 똑똑하게 처리해주죠.
        최상의 게임 완성도와 디자인 퀄리티를 제공합니다.
      </div>
    </div>
  </div>
);

const Home: NextPage = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      let videoPositon = window.scrollY / window.innerHeight - 9 || 0;
      let nextTime = videoPositon * videoRef.current!.duration;

      videoRef.current!.currentTime = nextTime;
    };

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>메인 - 4096</title>
      </Head>

      <Navbar />

      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveOut(0, -100), Fade())}>
            <div className="text-center">
              <div className="flex gap-5 justify-center items-center pb-4">
                <div className="flex-shrink-0 drop-shadow-2xl">
                  <Image
                    className="rounded-full"
                    src="/4096.png"
                    width={80}
                    height={80}
                  />
                </div>
                <h1 className="text-8xl font-bold tracking-wide pb-1">4096</h1>
              </div>

              <h3 className="text-2xl font-medium pb-12 pt-4">
                디스코드에서 즐기는 2048 게임봇
              </h3>

              <button
                type="button"
                className="px-5 py-3 bg-zinc-900/50 shadow-xl rounded-xl text-lg mx-auto hover:bg-zinc-600/40 transition-all duration-300"
              >
                <a
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    alert('아직 준비중입니다!');
                  }}
                >
                  <IconPlus className="inline-block" /> 서버에 초대하기
                </a>
              </button>
            </div>
          </Animator>
          <Animator animation={batch(Sticky(), Fade())}>
            <div className="relative w-screen">
              <div
                className="absolute left-0 right-0 text-center brightness-75 animate-bounce text-lg font-light"
                style={{
                  top: '42vh',
                }}
              >
                <IconChevronDown className="inline-block mr-2" />
                <span>스크롤하여 봇 소개 보기</span>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <></>
        </ScrollPage>

        <ScrollPage>
          <Animator
            animation={batch(Sticky(), FadeIn(), MoveIn(50, 0), ZoomIn())}
          >
            <h1 className="text-[180px] font-bold tracking-wide  mb-10">2¹²</h1>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Sticky())}>
            <h1 className="text-[180px] font-bold tracking-wide mb-10">2¹²</h1>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Sticky(), FadeIn())}>
            <h1 className="text-3xl font-medium tracking-wide mt-64">
              디스코드 미니 게임봇.
            </h1>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(StickyIn())}>
            <h1 className="text-[180px] font-bold tracking-wide mb-10">2¹²</h1>
          </Animator>
          <Animator animation={batch(StickyIn())}>
            <h1 className="text-3xl font-medium tracking-wide mt-64">
              디스코드 미니 게임봇.
            </h1>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(StickyIn(), Fade(), MoveIn(0, 700))}>
            <IntroPageOne />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(StickyIn())}>
            <IntroPageOne />
          </Animator>
          <Animator
            animation={batch(StickyIn(), MoveIn(800, 0), MoveOut(800, 0))}
          >
            <IntroImageOne />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Sticky())}>
            <IntroPageOne />
          </Animator>
          <Animator animation={batch(Sticky())}>
            <IntroImageOne />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(StickyIn(), MoveIn(innerWidth, 0))}>
            <IntroPageTwo videoRef={videoRef} />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(StickyIn())}>
            <IntroPageTwo videoRef={videoRef} />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Sticky(), FadeIn(), MoveIn(0, 600))}>
            <div className="flex flex-col gap-12 w-screen h-screen justify-center items-center">
              <Image
                src="/assets/question-block.png"
                width={100}
                height={100}
                priority
              />
              <div className="text-center">
                <h1 className="text-6xl font-light tracking-wide mb-6">
                  <span className="font-extrabold mr-1">다음 게임</span>은
                  무엇일까요?
                </h1>
                <div className="text-xl mb-12">
                  여러분의 아이디어를 알려주세요!
                </div>

                <button
                  type="button"
                  className="px-5 py-3 bg-zinc-900/50 shadow-xl rounded-xl text-lg hover:bg-zinc-600/40 transition-all duration-300"
                >
                  <a
                    className="flex items-center gap-2"
                    href="https://forms.gle/378ndyqLv9nhccwV6"
                    target="_blank"
                  >
                    <IconBulb className="inline-block" /> 아이디어 제안
                    설문하기!
                  </a>
                </button>
              </div>
            </div>

            <div className="mt-auto w-full text-zinc-400 font-semibold z-50">
              <div className="px-8 flex justify-between">
                <span>Copyright © 2022 InfiniteTeam All rights reserved.</span>
                <a
                  className="hover:text-white mr-3"
                  href="https://inft.kr"
                  target="_blank"
                >
                  Designed by InfiniteTeam
                </a>
              </div>
            </div>
            <div className="h-16" />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

export default Home;
