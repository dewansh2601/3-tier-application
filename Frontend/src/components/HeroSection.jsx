import React from 'react';

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <section className="relative h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 overflow-hidden">
  <img
    src="/burger.png"
    alt="Burger"
    className="absolute right-[8%] bottom-[10%] left-[15%] w-[1200px] h-[1200px] object-contain pointer-events-none select-none"
    style={{ animationDelay: "1s" }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
    <div className="text-white max-w-2xl">
      <h1 className="text-7xl font-extrabold mb-6 leading-tight animate-fade-in">
        Delicious Burgers <br />
        <span className="text-yellow-300 animate-pulse">Made Fresh</span>
      </h1>
      <p
        className="text-2xl mb-10 opacity-90 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        Experience the perfect blend of flavors with our handcrafted burgers and sides
      </p>
      <button
        className="bg-white text-orange-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-fade-in shadow-2xl"
        style={{ animationDelay: "1s" }}
        onClick={scrollToMenu}
      >
        Order Now
      </button>
    </div>
              <img
                  src="/burger.png"
                  alt="Burger"
                  className="absolute top-[2%] right-[5%] bottom-[8%] left-[9%] w-[1200px] h-[1200px] object-contain pointer-events-none select-none "
                  style={{ animationDelay: "1s" }}
         />
  </div>
</section>


  );
};

export default HeroSection;