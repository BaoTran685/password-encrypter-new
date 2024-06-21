import Link from "next/link";


const oldPasswordEncrypter = process.env.OLD_PASSWORD_ENCRYPTER ? process.env.OLD_PASSWORD_ENCRYPTER : ''

const AboutSection = () => {
  return (
    <section className="my-8">
      <div className="flex flex-col justify-center">
        <div className="text--content leading-relaxed">
          Hello...!
          This app is the upgrade or (maybe an simplified) version of <Link href={oldPasswordEncrypter} rel='noopener noreferrer' target='_blank' className="text-[var(--dark-blue-color)] underline">the other one</Link>.
        </div>
        <div className="text--content leading-relaxed mt-2">
          <span className="text-[var(--orange-color)] font-semibold">- For the Generator, </span>
          it uses the crypto module to generate some random bytes depending on the length input and then
          convert them to string using "base91" which are the 91 printable characters of the ASCII table.
        </div>
        <div className="text--content leading-relaxed mt-2">
          <span className="text-[var(--red-color)] font-semibold">- For the Encrypter/Decrypter, </span>
          it uses the sha-256 method to hash the key, then use that hash to encrypt and decrypt the password by the rsa-256-cbc algorithm.
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-8'>
        <div className='scroll-down' />
      </div>
    </section>
  )
}

export default AboutSection;