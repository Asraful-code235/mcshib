import Image from "next/image";

const tokeItems = [
  {
    title: "Total Supply",
    count: "1’000’000’000",
  },
  {
    title: "LP Burned",
    count: "100%",
  },
  {
    title: "Tax",
    count: "0%",
  },
];
export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center p-4 gap-8">
      <Image
        src={"/images/herotitle.svg"}
        width={890}
        height={156}
        alt="hero title"
        className="w-full h-[156px]"
      />
      <Image
        src={"/images/hero.svg"}
        width={400}
        height={400}
        alt="hero title"
        className="max-w-[200px] sm:max-w-[400px] h-full  sm:h-[350px] max-h-[400px] -mt-20 sm:-mt-14"
      />
      <div className="max-w-7xl w-full p-4 bg-[#ffe498] rounded-md text-[#DA291C] sm:mt-8 text-base sm:text-2xl md:text-3xl lg:text-4xl flex flex-col gap-1 font-bold text-center">
        <span> I mean, Look at this GUY</span>
        <span>he lost it all trading cryptocurrency</span>
        <span>market and now back to his old job</span>
      </div>
      <h1 className="font-bold text-center text-[10.5px] md:text-2xl">
        CA: 3tXuBBb7id86iGY4vcS6cXsLPwFxwdeSTN5aHFBnpump
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 md:justify-between max-w-lg w-full">
        <button className="flex bg-white items-center gap-4 text-sm sm:text-lg text-[#DA291C] px-6 py-3 md:px-8  rounded-md">
          BUY NOW
          <Image
            src={"/images/buy icon.svg"}
            width={40}
            height={40}
            alt="buy icon"
            className="w-7 h-7 sm:w-10 sm:h-10"
          />
        </button>
        <button className="flex items-center gap-4 font-bold text-sm sm:text-lg text-[#DA291C] bg-[#ffe498] px-6 py-3 md:px-8 md:py-5 rounded-md">
          McShib PFP MAKER
        </button>
      </div>
      <section className="mt-4 sm:mt-16 w-full text-3xl md:text-6xl flex flex-col pt-4 items-center justify-center max-w-screen-2xl mx-auto bg-[#644e11] rounded-xl border-2 border-white shadow-md">
        Memes
        <div className="max-w-md w-full mx-auto bg-white h-[1.5px] rounded-lg mb-0.5"></div>
      </section>
      <div className="grid grid-cols-3 max-w-7xl mx-auto px-4">
        {Array.from({ length: 9 }).map((item, key) => (
          <Image
            key={key}
            width={256}
            height={256}
            alt="logo"
            src={"/images/hero.svg"}
            className="w-full h-full max-w-[256px] max-h-[256px] aspect-auto object-center object-cover"
          />
        ))}
      </div>
      <p className="text-4xl md:text-8xl font-bold text-center">Tokenomics</p>
      <div className="flex flex-wrap gap-14 md:gap-20 items-center justify-center mt-6">
        {tokeItems.map((item, key) => {
          return (
            <div
              key={key}
              className="flex items-center flex-col gap-5 text-5xl font-bold"
            >
              <Image
                src={"/images/hero.svg"}
                width={200}
                height={200}
                alt="tokenomics"
                className="w-[200px] h-[200px] rounded-full object-center object-cover aspect-auto"
              />
              <p>{item.title}</p>
              <span className="text-[#454545]">{item.count}</span>
            </div>
          );
        })}
      </div>
      <footer className="text-center text-lg mt-24">
        ©2024 $McSHIB, All Right Reserved.
      </footer>
    </section>
  );
}
