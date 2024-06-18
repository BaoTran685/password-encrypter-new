'use client'
import { createContext, useContext } from "react";

export type NavbarContent = {
  isNavbarOpen: boolean,
  setIsNavbarOpen: (c: boolean) => void
}
export const NavbarContext = createContext<NavbarContent>({
  isNavbarOpen: true,
  setIsNavbarOpen: () => {},
});

export const useNavbarContext = () => useContext(NavbarContext)