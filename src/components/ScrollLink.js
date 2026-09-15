'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * A drop-in replacement for next/link that scrolls to the top of the page
 * when the clicked link points to the page the user is already on.
 * (Cross-page navigation is handled separately by <ScrollToTop />.)
 */
export default function ScrollLink({ href, children, onClick, ...props }) {
  const pathname = usePathname()

  const handleClick = (e) => {
    if (pathname === href) {
      e.preventDefault()
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    if (onClick) onClick(e)
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
