'use client'
import { NavbarContent, NavbarContext } from '@/components/Context/navbarContext';
import { ReactNode, useState } from 'react';



export default function ContextProvider({ children }: { children: ReactNode }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  return (
    <NavbarContext.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>
      {children}
    </NavbarContext.Provider>
  )
}