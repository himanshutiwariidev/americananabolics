export default function Video() {
  return (
    <section className="relative isolate h-[47vh] min-h-[220px] md:h-[735px] overflow-hidden bg-slate-950">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      
    </section>
  );
}