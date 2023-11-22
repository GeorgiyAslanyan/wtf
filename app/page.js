import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-[100vw] md:w-[70vw] xl:w-[54vw] min-h-screen flex-col items-center text-center justify-between gap-8">
      <h1 className=" text-xl ">
        <span className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-green-500 to-green-800">
          WTF
        </span>{" "}
        is this market...?!
      </h1>
      <div className="w-full relative overflow-hidden rounded-2xl shadow-[inset_0px_0px_20px_29px_#141414]">
        <div className="shadow-[inset_0px_0px_20px_29px_#141414] absolute w-full h-full z-10 top-0"></div>
        <video
          src="/background.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="z-0 border border-[#141414] hidden w-full lg:flex rounded-2xl">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <video autoPlay loop playsInline muted className="z-0 border border-[#141414]  flex w-full lg:hidden rounded-2xl">
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
      <p>
        AI is dope, the whole world is watching the GROK and Chat GPT rivalry.
        However, in my kingdom of DeFi, together you and I are a huge active
        community that has made pretty big memes many times...and we're about to
        do it again! Let’s fucking do it!
      </p>
      <p>0XB2FD1E0478DBF61772996BCCE8A2F1151EEEDA37</p>
      <a
        className="bg-green-500 hover:bg-white text-black ease-linear duration-100 transition-all px-4 py-2 rounded-xl"
        href="http://"
        target="_blank"
        rel="noopener noreferrer">
        FUCKING BUY
      </a>
      <p>Tokenomics</p>
      <p>SUPPLY : 420.69 MILLION</p>
      <p>Liquidity 100% (Uniswap V2)</p>
      <div className="flex gap-10">
        <p>NO PRESALE</p>
        <p>NO TEAM TOKENS</p>
        <p>NO TAX</p>
      </div>
      <a className="bg-green-500 hover:bg-white text-black ease-linear duration-100 transition-all px-4 py-2 rounded-xl"
        href="http://"
        target="_blank"
        rel="noopener noreferrer">JOIN COMMUNITY</a>
      <p className="text-xs text-gray-200">COPYRIGHT © 2023 WRAPPED PEPE</p>
    </main>
  );
}
