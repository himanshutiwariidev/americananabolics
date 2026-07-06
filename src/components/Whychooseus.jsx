import Image from "next/image";

export default function WhyChooseUsBanner() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="">
        {/* Desktop Banner */}
        <div className="hidden md:block">
          <Image
            src="/whychoose.png"
            alt="Why Choose Us"
            width={1700}
            height={800}
            priority
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Mobile Banner */}
        <div className="block md:hidden">
          <Image
            src="/whychoosemobile.png"
            alt="Why Choose Us"
            width={1080}
            height={1320}
            priority
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}