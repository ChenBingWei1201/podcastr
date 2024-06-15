'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from "@/lib/utils"
import { sidebarLinks } from '@/constants/index'
import { usePathname, useRouter } from 'next/navigation'

function LeftSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
          <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">Podcastr</h1>
        </Link>
        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActice = pathname === route || pathname.startsWith(`${route}/`);
          return <Link href={route} key={label} className={cn("flex max-lg:px-4 items-center gap-3 justify-center py-4 lg:justify-start", {
            'bg-nav-focus border-r-4 border-orange-1': isActice,
          })}>
            <Image src={imgURL} alt={label} width={24} height={24} />
            <p>{label}</p>
          </Link>
        })}
      </nav>
    </section>
  )
}

export default LeftSidebar
