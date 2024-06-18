import { Navbar_Item } from "@/components/Types/Nav/navbar";
import { CogIcon, UserIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";



export const NAVBAR_ITEMS_ARRAY: Navbar_Item[] = [
  {
    name: 'Generate',
    path: '/generate',
    icon: <CogIcon className="size-6"/>,
  },
  {
    name: 'Encrypt/Decrypt',
    path: '/function',
    icon: <WrenchScrewdriverIcon className="size-6" />
  },
  // {
  //   name: 'About',
  //   path: '/about',
  //   icon: <UserIcon className="size-6" />
  // }
]