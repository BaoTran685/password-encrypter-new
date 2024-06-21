'use client'
import Link from "next/link";
import Header from "../header";
import Bar from "../bar";


const TopNavbar = () => {
  return (
    <section>
      <div className="flex items-center justify-center my-8">
        <Link
          href={'/'}
          className='flex items-center w-fit'
        >
          <Header text={'Text Encrypter'} className='text-[var(--text-less-black-color)]' />
        </Link>
      </div>
      <Bar />
    </section>
  )
}

export default TopNavbar;
