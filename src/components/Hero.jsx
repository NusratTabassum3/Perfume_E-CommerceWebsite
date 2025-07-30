import React from "react";

function Hero() {
  return (
    <section id="home" className="bg-amber-50 scroll-mt-20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-950 leading-tight mb-4">
            Discover The Best Deals on Top Products
          </h1>

          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            rerum suscipit explicabo id aperiam ut possimus, vel temporibus
            provident iure minima repudiandae. Aut hic quidem aliquid
            accusantium iusto laudantium at.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="/products"
              className="px-6 py-3 bg-pink-900 text-white text-sm font-semibold rounded-lg shadow hover:bg-pink-600 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
