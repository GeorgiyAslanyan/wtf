import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-[100vw] md:w-[70vw] xl:w-[54vw] min-h-screen flex-col items-center text-center justify-between gap-8">
      <h1 className=" text-xl ">
        Missed <span className="font-bold text-[#619e4e]">$FROGE</span>? Here is
        your second chance.
      </h1>
      <div className="w-full relative overflow-hidden rounded-2xl ">
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
          className="z-0 p-[2px] bg-[#141414] w-full flex rounded-2xl">
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="text-center px-2 sm:px-0">
        When life gives you a second chance you take it!
      </p>
      <p className="break-words w-[95%]">0x0F2552695aB86b5B8276dD03F0e227DF849Fb058</p>
      <a
        className="bg-[#528D27] hover:bg-[#D9EA81] text-black px-8 ease-linear duration-100 transition-all  py-2 rounded-xl"
        href="https://app.uniswap.org/#/swap?outputCurrency=0x0F2552695aB86b5B8276dD03F0e227DF849Fb058"
        target="_blank"
        rel="noopener noreferrer">
        BUY NOW
      </a>
      <p>Tokenomics</p>
      <p>Supply: 690,420,000,000,000</p>
      <p>Liquidity Locked (Uniswap V2)</p>
      <div className="flex sm:gap-10 gap-5">
        <p>NO PRESALE</p>
        <p>NO TEAM TOKENS</p>
        <p>NO TAX</p>
      </div>
      <a
        className="bg-[#528D27] hover:bg-[#D9EA81] text-black ease-linear duration-100 transition-all px-4 py-2 rounded-xl"
        href="https://t.me/FROGE2VIP"
        target="_blank"
        rel="noopener noreferrer">
        JOIN COMMUNITY
      </a>
      <p className="text-xs text-gray-200">COPYRIGHT © 2023 FROGE 2.0</p>
    </main>
  );
}
