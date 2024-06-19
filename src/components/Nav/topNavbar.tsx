'use client'
import Link from "next/link";
import { NAVBAR_ITEMS_ARRAY } from "../Constants/Nav/navbar";
import { Navbar_Item } from "../Types/Nav/navbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/tailwind-merge";
import { useNavbarContext } from "../Context/navbarContext";
import { motion } from "framer-motion";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";


const TopNavbar = () => {
  const pathName = usePathname();
  const { isNavbarOpen, setIsNavbarOpen } = useNavbarContext();
  return (
    <section>
      <div className="flex flex-row justify-between px-3 pt-10">
        <Link
          href={'/'}
          className='flex items-center w-fit'
        >
          <span className="text--header font-semibold">Password Encrypter</span>
        </Link>

        <div className="flex flex-row space-x-4">
          <div className={cn("flex flex-row items-center justify-center space-x-2 pointer-events-none opacity-0 translate-x-20 transition-all ease-in-out duration-500",
            {
              'opacity-100 pointer-events-auto translate-x-0': isNavbarOpen
            }
          )}>
            {NAVBAR_ITEMS_ARRAY.map((item, index) => (
              <NavbarItem key={index} item={item} pathName={pathName} />
            ))}
          </div>
          <motion.div
            initial={isNavbarOpen}
            animate={isNavbarOpen ? 'open' : 'closed'}
            className='flex items-center justify-center'
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setIsNavbarOpen(!isNavbarOpen)
              }}
            >
              <motion.div
                variants={{
                  open: { rotate: 180, color: '#b91c1c' },
                  closed: { rotate: 0, color: '#37352F' }
                }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDoubleRightIcon className="size-6" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

      </div>
      <div className="w-full h-0.5 rounded-lg bg-[#ddd] mt-2" />
    </section>
  )
}

export default TopNavbar;

const NavbarItem = ({ item, pathName }: { item: Navbar_Item, pathName: string }) => {
  return (
    <Link
      href={item.path}
      className='flex items-center w-fit '
    >
      <div className={cn("text-[var(--text-gray-color)] hover:text-[var(--text-black-color)] rounded-lg transition-colors duration-500",
        {
          'text-[var(--text-black-color)]': pathName.startsWith(item.path)
        }
      )}>
        <span className="hidden sm:block text--sub--header font-medium p-1">{item.name}</span>
        <span className="block sm:hidden">{item.icon}</span>
      </div>
    </Link>
  )
}