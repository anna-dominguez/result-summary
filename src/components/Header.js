const Header = () => (
  <header
    className="w-full bg-gradient1 rounded-b-[32px] lg:rounded-[32px]
                    pt-6 lg:pt-[38px] pb-10 lg:pb-14 px-14 flex flex-col
                    items-center text-center
                    max-md:shadow-[0_30px_60px_rgba(61, 108, 236, 0.15)]"
  >
    <h2 className="text-lightBlue text-body lg:text-headingS font-bold mb-6 lg:mb-9">
      Your Result
    </h2>
    <div className="bg-gradient2 rounded-full mb-6 lg:mb-7 py-6 lg:py-12 px-10 lg:px-14">
      <h1 className="text-white text-headingL lg:text-headingXL font-extrabold">
        76
      </h1>
      <p className="text-lightBlue text-bodyS lg:text-body opacity-50">
        of 100
      </p>
    </div>
    <h3 className="text-white font-bold text-headingS lg:text-headingM mb-2 lg:mb-3.5">
      Great
    </h3>
    <p className="text-lightBlue text-bodyS lg:text-body w-[260px]">
      You scored higher than 65% of the people who have taken these tests.
    </p>
  </header>
)

export default Header
