import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative z-[1] w-[100vw] md:w-[70vw] text-xl xl:w-[54vw] min-h-svh flex-col items-center text-center justify-between gap-6">
      <p className="jag text-white text-4xl flex gap-4"><span className="text-[#528D27]">WTF</span><span> is </span> <span> this  </span> <span>market ..?!</span></p>
      <div className="w-full flex items-center justify-center relative overflow-hidden rounded-2xl ">
      <img
            src="/vingete.svg"
            alt="vingete"
            className="absolute w-full h-full z-10 top-0"
          />
        <video
          src="/background.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="z-0 p-[2px] bg-[#141414] h-auto sm:h-[80vh] w-full sm:w-auto flex rounded-2xl"
        >
          <source src="/background.mp4" type="video/mp4" />

        </video>
      </div>
      
      <p
        className="flex gap-2 flex-wrap px-2 items-center justify-center"
        href="https://t.me/FROGE2VIP"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>WTF</span> <span> is</span><span> up</span><span> with</span><span> all</span><span> these</span>
        <span> AI</span><span> agents..</span><span>  all</span><span> u</span><span> need</span>
        <span> is </span><span>frogs</span><span> and </span><span>dogs </span><span>and</span>
        <span> cats..</span><span> Memes</span><span> don't</span><span> need AI.. WTF!</span>
        <span> need</span> <span> AI..</span> <span> WTF!</span>
        
      </p>
      <p className="break-all w-[95%] text-[#528D27]">
      7arBocv8poaTincPX7y586eAHJuhYxiNgUa18iDWpump
      </p>
      <a
        className="bg-[#528D27] text-[#141414] px-8 ease-linear duration-100 transition-all py-2 rounded-xl"
        href="https://pump.fun/board"
        target="_blank"
        rel="noopener noreferrer"
      >
        BUY NOW
      </a>
      <p className="text-[#528D27]">Tokenomics</p>
      <p className="flex gap-2 flex-wrap"> <span>Supply:</span> <span> 1,000,000,000</span></p>
      <a
        className="bg-[#528D27] text-[#141414] flex gap-2 px-8 ease-linear duration-100 transition-all py-2 rounded-xl"
        href="https://pump.fun/board"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>JOIN </span><span>COMMUNITY</span>
      </a>
      <p className="text-xs text-gray-200 flex gap-1 flex-wrap"><span>COPYRIGHT © 2024 </span> <span> WTF</span></p>
    </main>
  );
}
