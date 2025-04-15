import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { setLanguage, getLanguage } from '~shared/lib/i18n/i18nHelper'
import IntuitLogo from '../../assets/intuit-logo.png'
import { Link } from 'react-router-dom'
import { IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { i18n } = useTranslation()

  useEffect(() => {
    const savedLanguage = getLanguage()
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  const handleLanguageChange = (lng: string) => {
    setLanguage(lng)
    window.location.reload()
  }

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const languageMap: { [key: string]: string } = {
    en: 'English',
    ru: 'Русский',
    ky: 'Кыргызча',
  }

  const currentLanguage = languageMap[i18n.language] || 'Language'

  const headerItems = [
    { label: 'Абитуриентам', link: '/applicants' },
    { label: 'Институты', link: '/institutes' },
    { label: 'Колледжи', link: '/colleges' },
    { label: 'Студентам', link: '/students' },
    { label: 'Об Университете', link: '/about' },
  ]

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 border-b border-gray">
      <div className="container px-6 py-2">
        <nav className="flex gap-2 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1 mr-5">
              <img src={IntuitLogo} alt="Intuit" className="h-[50px]" />
              <p className="text-[10px] font-bold leading-[11px]">
                МЕЖДУНАРОДНЫЙ <br /> УНИВЕРСИТЕТ <br /> ИННОВАЦИОННЫХ <br />
                ТЕХНОЛОГИЙ
              </p>
            </Link>
            <div className="flex gap-3">
              {headerItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="lg:hidden text-black text-sm font-medium hover:text-gray-400 border rounded-full hover:bg-green hover:scale-105 duration-200 hover:border-white hover:text-white border-gray p-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            {/* Desktop language dropdown */}
            <div className="relative hidden lg:flex">
              <button
                className="text-black text-md font-medium hover:text-gray-400 flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {currentLanguage}
                <svg
                  className={`w-5 h-5 ml-2 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 min-w-[120px] bg-white text-gray-800 rounded-md shadow-lg z-50 p-2">
                  <ul className="space-y-1">
                    {Object.entries(languageMap).map(([key, label]) => (
                      <li key={key}>
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-green hover:text-white rounded-md"
                          onClick={() => handleLanguageChange(key)}
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile menu */}
            <div className="hidden lg:block">
              <IconButton onClick={handleMenuOpen}>
                <MenuIcon className="text-black" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                className="mt-12"
              >
                {headerItems.map((item, index) => (
                  <MenuItem key={index} onClick={handleMenuClose}>
                    <Link
                      to={item.link}
                      className="text-black text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>

          {/* Mobile language dropdown */}
          <div className="relative lg:hidden">
            <button
              className="text-black text-md font-medium hover:text-gray-400 flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {currentLanguage}
              <svg
                className={`w-5 h-5 ml-2 transition-transform ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 min-w-[120px] bg-white text-gray-800 rounded-md shadow-lg z-50 p-2">
                <ul className="space-y-1">
                  {Object.entries(languageMap).map(([key, label]) => (
                    <li key={key}>
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-green hover:text-white rounded-md"
                        onClick={() => handleLanguageChange(key)}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
