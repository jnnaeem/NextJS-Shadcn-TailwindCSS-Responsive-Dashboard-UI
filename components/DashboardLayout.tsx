'use client';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />

      <div className={`xl:ml-[268px] w-full transition-margin duration-300`}>
        <div className="flex flex-col justify-between w-full min-h-svh">
          <Header isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />
          <main className="flex-1 sm:mt-6 mt-3 overflow-y-auto sm:px-6 px-3">{children}</main>
        </div>
      </div>
    </div>
  );
}
