/* eslint-disable @next/next/no-img-element */
'use client'

export default function Header() {
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img alt="Logo" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
        </a>
      </nav>
    </header>
  )
}
