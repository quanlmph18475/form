
const Button = ({ className, children, handleClick, type }) => {
    if (type === "active") {
    return (
      <button
        onClick={handleClick}
        className={`lg:text-[25px] md:text-[20px] sm:text-[16px] lg:py-3 md:py-2 rounded-lg font-semibold sm:py-2 bg-[#57C49F] text-white  ${className}`}
      >
        {children}
      </button>
    );
  }
  if (type === "outline") {
    return (
      <button
        onClick={handleClick}
        className={`lg:text-[25px] md:text-[20px] sm:text-[16px] lg:py-3 md:py-2 rounded-lg font-semibold sm:py-2 border-[1px] bg-white  border-[#D0D0D0] text-[#D0D0D0]  ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <>
        <button
      onClick={handleClick}
      className={`lg:text-[25px] md:text-[20px] sm:text-[16px] xs:py-3 lg:py-3 md:py-2 rounded-lg font-semibold sm:py-2 ${className}`}
    >
      {children}
    </button>
    </>
  )
}

export default Button