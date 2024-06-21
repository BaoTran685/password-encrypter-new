import Link from "next/link"



const baoWebsite = process.env.BAO_WEBSITE ? process.env.BAO_WEBSITE : ''
const Footer = () => {
  return (
    <section>
      <div className="flex row items-center justify-center my-8">
        <span className="text-base font-medium">
          2024 Copyright{' '}
          <Link href={baoWebsite} rel='noopener noreferrer' target='_blank' className="text-[var(--dark-blue-color)] underline">
            Bao Tran
          </Link>
        </span>
      </div>
    </section>
  )
}

export default Footer;