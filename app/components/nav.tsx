import Link from 'next/link'

const navItems = {
  '/': {
    name: 'About',
  },
  '/projects': {
    name: 'Projects',
  },
  '/contact': {
    name: 'Contact',
  },
}

export function Navbar() {
  return (
    <header className="px-6 md:px-12 lg:px-24 xl:px-32 py-8">
      <div className="flex justify-between items-center">
        {/* Logo/Name */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="font-medium text-lg">Thi Minh Nguyet Duong</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
