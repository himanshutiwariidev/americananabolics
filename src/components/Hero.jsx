import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Banner */}
      <div className="hidden md:block">
        <Image
          src="/desktopbanner.png"
          alt="CAN Series Banner"
          width={1920}
          height={750}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden">
        <Image
          src="/mobilebanner.png"
          alt="CAN Series Banner"
          width={1080}
          height={1350}
          priority
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}