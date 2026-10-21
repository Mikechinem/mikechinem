
const testimonialImages = [
  {
    src: "https://res.cloudinary.com/doatbjjtn/image/upload/v1792600598/d2_htwbzp.png",
    alt: "Customer order and delivery evidence",
  },
  {
    src: "https://res.cloudinary.com/doatbjjtn/image/upload/v1792600771/d5_zbdyxv.png",
    alt: "Customer transaction evidence",
  },
  {
    src: "https://res.cloudinary.com/doatbjjtn/image/upload/v1792600597/d1_lftwcp.png",
    alt: "Customer order confirmation",
  },
  {
    src: "https://res.cloudinary.com/doatbjjtn/image/upload/v1792600598/d4_eoq2wq.png",
    alt: "Customer delivery evidence",
  },
  {
    src: "https://res.cloudinary.com/doatbjjtn/image/upload/v1792600598/d3_a63afi.png",
    alt: "Customer purchase evidence",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#111111] px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="testimonials-heading"
          className="mb-8 text-3xl leading-tight font-black tracking-tight text-white sm:mb-10 sm:text-4xl"
        >
          Real Orders. Real Business Experience.
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialImages.map((image, index) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
