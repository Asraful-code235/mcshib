import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    src: "/images/owl.svg",
    href: "/",
  },
  {
    src: "/images/telegram.svg",
    href: "https://t.me/+4k7UxYskhRBjY2Zk",
  },
  {
    src: "/images/x.svg",
    href: "https://x.com/McShibCoin?s=09",
  },
];

export default function Header() {
  return (
    <header className="h-20 sm:h-24 w-full bg-black px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-24 py-4">
        <Link href={"/"}>
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width={80}
            height={80}
            className="w-12 sm:w-16 h-12 sm:h-16 object-center object-cover aspect-auto rounded-sm"
          />
        </Link>

        <div className="flex items-center gap-4">
          {navItems.map((items, key) => (
            <Link
              href={items.href}
              target="_blank"
              key={key}
              className="flex items-center justify-center transition-all duration-300"
            >
              <Image
                src={items.src}
                width={30}
                height={30}
                alt={key}
                style={{
                  marginTop: key !== 0 ? "8px" : "0px",
                }}
                className="w-full h-full object-center object-cover aspect-auto hover:scale-[1.02] "
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
