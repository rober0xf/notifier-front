import HeroImage from "/assets/images/hero.png";

export const HeroComponent = () => {
  return (
    <div className="container">
      <div className="grid min-h-150 grid-cols-1 md:grid-cols-2">
        {/* text content section */}
        <div className="flex flex-col items-center justify-center space-y-5 px-10 py-20 text-center md:items-start md:px-0 md:py-0 md:pr-24 md:text-left">
          <h1 className="text-4xl font-bold xl:text-5xl">
            Track your payments with{" "}
            <span className="font-medium text-yellow-300">Notifier</span>
          </h1>
          <p className="text-lg text-gray-700">
            Keep an eye on your upcoming payments. <br />
            Track your bills, subscriptions, and purchases.
          </p>
          <a
            href="/register"
            className="primary-btn bg bg-gray-900 text-lg text-white transition duration-300 hover:bg-[#fcc61d] hover:text-gray-700"
          >
            Sign Up Now
          </a>
        </div>

        {/* hero image section */}
        <div className="flex items-center justify-center">
          <img
            src={HeroImage}
            alt="Hero image"
            className="w-[80%] select-none md:w-137.5 xl:max-w-150"
          />
        </div>
      </div>
    </div>
  );
};
