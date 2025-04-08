'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, BarChart2, User, Settings } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex md:flex-col w-64 h-screen bg-zinc-900 text-white fixed top-0 left-0 p-4">
      <h1 className="text-2xl font-bold mb-8">FreeLancer</h1>
      <nav className="flex flex-col gap-4">
        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className={cn(
              'flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800 transition-all',
              pathname === href && 'bg-zinc-800'
            )}
          >
            <Icon size={20} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}