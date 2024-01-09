import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <>
      <form action="" className="flex flex-col">
      <div className="relative w-100 flex flex-col">
        <textarea
          className="xs:p-3 lg:mt-5 lg:mb-5 sm:mt-3 sm:mb-3 lg:border-[3px] xs:border-[1px] xs:border-[#D4D4D8] rounded-lg outline-none md:px-3 sm:px-2 sm:py-2  lg:text-[20px] md:text-[18px] sm:text-[16px]"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Type or paste your topic here"
        ></textarea>
        <div className="absolute xs:bottom-2  lg:bottom-7 sm:bottom-5 left-4 flex items-start  justify-between w-full">
         
          <div className="flex gap-2">
            <span className="rounded-md bg-[#D9D9D973] px-2.5 lg:py-1 sm:py-1 flex items-center ">
              <img
                src={'./src/assets/copy.png'}
                className="lg:w-[15px] md:w-3 sm:w-3 xs:w-[10px] h-fit"
                alt=""
              />
            </span>
            <span className="rounded-md text-[#6A6A6A] bg-[#D9D9D973] xs:px-3 lg:px-4 sm:px-3 lg:py-1 sm:py-1 flex text-[14px]">
              (0) Sửa lỗi
            </span>
          </div>

          <span className="flex mr-8 items-center sm:text-xl xs:text-sm text-[#D0D0D0]">
            0/50
          </span>
        </div>
      </div>

      <button className={"bg-[#57C49F] w-100 text-white sm:mt-1 xs:mt-5"}>
        Generate Quizz
      </button>
    </form>
    </>
  )
}

export default Form