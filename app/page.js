import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative z-[1] w-[100vw] md:w-[70vw] text-xl xl:w-[54vw] min-h-svh flex-col items-center text-center justify-between gap-8">
      <p className="jag text-[#528D27] text-4xl flex gap-4"><span>Gud</span> <span>Meme</span></p>
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
      <p className="jag flex gap-4 text-[#528D27] text-center text-4xl px-2 sm:px-0">
      <span>HI,</span><span> Fren!</span> <span> I’m </span> <span>GM</span>
      </p>
      <p className="break-all w-[95%]">
          0x420690...........
      </p>
      <a
        className="bg-[#528D27] hover:bg-[#D9EA81] text-black px-8 ease-linear duration-100 transition-all  py-2 rounded-xl"
        href="https://app.uniswap.org/#/swap?outputCurrency=0xDA115F774b285FC345F18a5Ea451E560CB699E11"
        target="_blank"
        rel="noopener noreferrer"
      >
        BUY NOW
      </a>
      <p>Tokenomics</p>
      <p>Supply: 420,690,000,000,000</p>
      <p>Liquidity Burned</p>
      <div className="flex sm:gap-10 gap-5">
        <p>NO PRESALE</p>
        <p>NO TEAM TOKENS</p>
        <p>NO TAX</p>
      </div>
      <a
        className="bg-[#528D27] hover:bg-[#D9EA81] text-black ease-linear duration-100 transition-all px-4 py-2 rounded-xl"
        href="https://t.me/FROGE2VIP"
        target="_blank"
        rel="noopener noreferrer"
      >
       Join &quot;GM Squad&quot; and ape into $GM for a fun NOW FREN!
      </a>
      <div className="flex items-center sm:gap-10 gap-5">
        <a
          className="scale-100 hover:scale-110 ease-linear duration-150 transition-all"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="dextools" src={"/dextools.png"} width={40} height={40} />
        </a>
        <a
          className="scale-100 hover:scale-110  ease-linear duration-150 transition-all"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="etherscan"
            src={"/etherscan.png"}
            width={40}
            height={40}
          />
        </a>
      </div>
      <p className="text-xs text-gray-200">COPYRIGHT © 2024 GM Squad</p>
    </main>
  );
}
