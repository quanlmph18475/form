import Form from './Form'

const Footer = () => {
  return (
    <>
      <h2 className="xs:my-3 md:mt-5  lg:mt-7 sm:mt-3 lg:text-[28px] md:text-[25px] sm:text-[20px] font-bold">
        From Your Essay
      </h2>
      <Form />
      <div className="px-[4.5%] py-9 border-[1.5px] border-[#D0D0D0] sm:mt-6 xs:mt-5 rounded-lg bg-white">
        <div className="flex lg:gap-15 md:gap-10 sm:gap-2 xs:gap-3 xs:flex-col sm:flex-row justify-between">
          <div className="flex items-center justify-center">
            <img className="object-cover w-24" src={'./src/assets/tai voi.png'} alt="" />
          </div>
          <p className="xs:px-5 xs:text-center sm:text-left xs:mt-2 xs:text-[14px] lg:text-[23px] md:text-[16px] sm:text-[15px] mt-1 font-bold">
            Excess to 20 or more tools to convert PDF to Word....
          </p>
        </div>
        <p className="lg:text-[24px] md:text-[20px] sm:text-[15px]  lg:leading-[35px]  md:leading-[30px] sm:leading-[25px] lg:mt-5 mx-5 lg:mb-20 md:mt-5 sm:mt-4 xs:mt-4 sm:mb-5">
          Before you know what kindness really is you must lose things,feel the
          future dissolve in a momentlike salt in a weakened broth.What you held
          in your hand,what you counted and carefully saved...
        </p>
      </div>
    </>
  )
}

export default Footer