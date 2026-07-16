import Image from "next/image";

const logos = [
  "https://framerusercontent.com/images/JTcLqF2HleWItObWBRpylHX1NjY.svg",
  "https://framerusercontent.com/images/PDMcsAPPWoWapvX8gTR6F61ykU.svg",
  "https://framerusercontent.com/images/Z3orUXUbuHjPxIwqbMCrf8j8PE.svg",
];

export default function BrandTicker() {
  return (
    <section className="bg-bg-1 py-16">
      <div className="flex flex-col items-center gap-8">
        <p className="px-4 text-center text-body-16 font-medium text-body-gray">
          Trusted 200+ corporate partners!
        </p>
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-5 pr-5">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex h-[94px] w-[176px] shrink-0 items-center justify-center rounded-2xl bg-white"
              >
                <Image
                  src={logo}
                  alt="Partner logo"
                  width={110}
                  height={28}
                  className="h-7 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
