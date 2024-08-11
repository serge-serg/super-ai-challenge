'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import menuItems from '@/components/menuItems'
import img13Floor from '@/assets/images/13th-floor.png'
import imgRobotAndPeople from '@/assets/images/robot-ai-leadership-crowd.jpg'

const Navigation = () => {
  const currentPath = usePathname()

  let bgImg = img13Floor

  switch (currentPath) {
    case '/why-we-will-not-refuse':
      bgImg = imgRobotAndPeople
      break
    default:
      break
  }

  const style = {
    bgImage: {
      backgroundImage: `url(${bgImg.src})`
    }
  }


  const ww = 1200
  const windowIsWide = window.innerWidth > ww
  const [isOpen, setIsOpen] = useState(windowIsWide)
  const navRef = useRef<HTMLElement>(null)
  const asideRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const savedIsOpen = localStorage.getItem('menuIsOpen')
    setIsOpen(savedIsOpen === 'true' || windowIsWide)

    const handleResize = () => {
      const newIsOpen = windowIsWide
      setIsOpen(newIsOpen)
      localStorage.setItem('menuIsOpen', newIsOpen.toString())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (windowIsWide) setIsOpen(true)
    localStorage.setItem('menuIsOpen', (true).toString())
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current !== null && asideRef.current !== null) {
        const asideTop = asideRef.current.getBoundingClientRect().top
        const navRect = navRef.current.getBoundingClientRect()
        const topLimit = (window.innerHeight - navRect.height) / 2
        if ((asideTop) * -1 > topLimit) { // after sticky
          if (navRef.current.style.position === 'fixed') return
          navRef.current.style.position = 'fixed'
          navRef.current.style.top = `${topLimit}px`
        } else { // before sticky
          if (navRef.current.style.position !== 'fixed') return
          navRef.current.style.position = 'static'
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const LogoText = () => <Link href="/" className="logo-text">/ <span style={{ fontWeight: 600 }}>Super-AI Challenge</span> /</Link>

  const renderMenuItem = (item: string | (string | JSX.Element)[]) => {
    if (Array.isArray(item)) {
      return item.map((textPart, index) => (
        <React.Fragment key={index}>{textPart}</React.Fragment>
      ))
    }
    return item
  }

  return (
    <div className="lg+:max-w-[500px] sidebar-container">
      <div className="lg+:hidden p-4 flex justify-between items-center bg-[#333]">
        <LogoText />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <aside ref={asideRef} style={style.bgImage} className={`sidebar ${isOpen ? 'flex' : 'hidden'}`}>
        <div className="sidebar-header">
          <LogoText />
        </div>
        {
          isOpen &&
          <nav ref={navRef} className="lg+:max-w-[500px]">
            <ul>
              {menuItems.map((item) => (
                <li key={item.href} className={currentPath === item.href ? 'selected' : ''}>
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {renderMenuItem(item.text)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        }
      </aside>
    </div>
  )
}

export default Navigation