import { Button, Paper, Toolbar } from '@mui/material'
import IntuitLogo from '../../assets/intuit-logo.png'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Link } from 'react-router-dom'
import { degreeQueries } from '~entities/degree'
import { useState, useRef, useEffect } from 'react'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'

const universitySections = [
  { title: 'Абитуриентам', route: '/enroll' },
  { title: 'Институты', route: '/institutes' },
  { title: 'Специальности', route: '/specialization' },
  { title: 'Курсы', route: '/courses' },
  { title: 'Студентам', route: '/students' },
  { title: 'Об Университете', route: '/about' },
]

const institutes = [
  { name: 'ЦИФРОВАЯ ТРАНСФОРМАЦИЯ И ПРОГРАММИРОВАНИЕ', programs: 15 },
  { name: 'ДИЗАЙН, АРХИТЕКТУРА И ТЕКСТИЛЬ', programs: 9 },
  { name: 'СТРОИТЕЛЬСТВО И ИННОВАЦИОННЫЕ ТЕХНОЛОГИЕ', programs: 18 },
  { name: 'ЭНЕРГЕТИКА И ТРАНСПОРТ', programs: 5 },
  { name: 'ЭКОНОМИКА И МЕНЕДЖМЕНТ', programs: 6 },
  {
    name: 'АВТОМАТИЗАЦИЯ УПРАВЛЕНИЕ БИЗНЕСОМ (РОССИЙСКО - КЫРГЫЗСКИЙ)',
    programs: 11,
  },
  { name: 'МЕЖКУЛЬТУРНАЯ КОММУНИКАЦИЯ И ПСИХОЛОГИЯ', programs: 5 },
  { name: 'МАРКЕТИНГ И ЭЛЕКТРОННАЯ КОММЕРЦИЯ', programs: 0 },
]

export function Header() {
  const { data: degreeData, isLoading, isError } = degreeQueries.useGetDegrees()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [activeList, setActiveList] = useState('institutes')
  const [activeButton, setActiveButton] = useState('institutes')

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const displayList = (listName: string, buttonName: string) => {
    setActiveList(listName)
    setActiveButton(buttonName)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="bg-white text-black shadow py-1 border-b border-gray sticky  top-0 z-50 ">
        <header>
          <Toolbar
            disableGutters
            className="flex justify-between max-w-[85%] mx-auto "
          >
            <Link to="/" className="flex items-center gap-1">
              <img src={IntuitLogo} alt="Intuit" className="h-[50px]" />
              <p className="text-[10px] font-bold leading-[11px] ">
                МЕЖДУНАРОДНЫЙ <br /> УНИВЕРСИТЕТ <br /> ИННОВАЦИОННЫХ <br />
                ТЕХНОЛОГИЙ
              </p>
            </Link>
            <div className="flex gap-3">
              <Button
                variant="outlined"
                size="small"
                className="px-10 duration-300 border-green text-green hover:bg-green hover:text-white md:hidden"
              >
                Подобрать программу
              </Button>
              <Button
                variant="contained"
                className="text-white shadow-none bg-green"
                size="medium"
                endIcon={
                  isMenuOpen ? <CancelRoundedIcon /> : <MenuRoundedIcon />
                }
                onClick={toggleMenu}
                ref={buttonRef}
              >
                Меню
              </Button>
            </div>
          </Toolbar>

          <div
            ref={menuRef}
            className={`transition-all duration-300 ${
              isMenuOpen
                ? 'opacity-100 visible translate-y-[1px] max-h-screen '
                : 'opacity-0 invisible translate-y-[-10px] max-h-0'
            }`}
          >
            <Paper
              elevation={0}
              className="absolute left-1/2 transform -translate-x-1/2 mt-2 md:mt-1 p-7 min-w-[85%] md:min-w-[95%] max-w-[85%] min-h-[400px] max-h-[400px] overflow-y-auto bg-white rounded-lg flex md:flex-col md:gap-10 md:pb-20 gap-20 shadow-xl z-50"
            >
              <div className="flex flex-col gap-3">
                <Button
                  variant="outlined"
                  className={`px-10 py-1 transition duration-300 border border-green shadow-none font-medium hover:bg-green hover:text-white ${
                    activeButton === 'institutes'
                      ? 'bg-green text-white'
                      : 'text-black bg-white '
                  }`}
                  onClick={() => displayList('institutes', 'institutes')}
                >
                  Институты
                </Button>
                <Button
                  variant="outlined"
                  className={`px-10 py-1 transition duration-300 border border-green  shadow-none font-medium  hover:bg-green hover:text-white ${
                    activeButton === 'abituri'
                      ? 'bg-green text-white'
                      : 'text-black bg-white '
                  }`}
                  onClick={() => displayList('abituri', 'abituri')}
                >
                  Абитуриентам
                </Button>
                <Button
                  variant="outlined"
                  className={`px-10 py-1 transition duration-300 border border-green  shadow-none font-medium  hover:bg-green hover:text-white ${
                    activeButton === 'students'
                      ? 'bg-green text-white'
                      : 'text-black bg-white '
                  }`}
                  onClick={() => displayList('students', 'students')}
                >
                  Студентам
                </Button>
                <Button
                  variant="outlined"
                  className={`px-10 py-1 transition duration-300 border border-green  shadow-none font-medium  hover:bg-green hover:text-white ${
                    activeButton === 'about'
                      ? 'bg-green text-white'
                      : 'text-black bg-white '
                  }`}
                  onClick={() => displayList('about', 'about')}
                >
                  Об Университете
                </Button>
              </div>
              {activeList === 'institutes' && (
                <ul>
                  <h2 className="font-bold mb-3">Институты</h2>
                  {institutes.map((section, index) => (
                    <li onClick={toggleMenu} className="mb-2" key={index}>
                      <Link
                        to={`/institutes/${section.name}`}
                        onClick={toggleMenu}
                      >
                        {section.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {activeList === 'abituri' && (
                <ul>
                  <h2 className="font-bold mb-3">Уровни</h2>
                  {degreeData?.data.map((degree, index) => (
                    <li onClick={toggleMenu} className="mb-2" key={index}>
                      <Link onClick={toggleMenu} to={`degree/${degree.slug}`}>
                        {degree.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {activeList === 'students' && (
                <ul>
                  <h2 className="font-bold mb-3">Для студентов</h2>
                </ul>
              )}
              {activeList === 'about' && (
                <ul>
                  <h2 className="font-bold mb-3">Об Университете</h2>
                </ul>
              )}
            </Paper>
          </div>
        </header>
      </header>
    </>
  )
}

{
  /* <div className="sticky top-0 bg-white z-50">
  <Toolbar
    disableGutters
    className="flex justify-between min-h-[29px] max-w-[80%] mx-auto"
  >
    {universitySections.map((univer) => (
      <Link className="text-base font-medium" to={univer.route}>
        {univer.title}
      </Link>
    ))}
  </Toolbar>
  <Divider className="h-[2px]" />
  <Toolbar
    disableGutters
    className="flex justify-between min-h-[0px] py-2 max-w-[80%] mx-auto"
  >
    {degreeData?.data.map((univer) => (
      <Link className="text-xs font-bold text-black/70" to={`degree/${univer.slug}`}>
        {univer.title}
      </Link>
    ))}
  </Toolbar>
  <Divider className="h-[2px]" />
</div> */
}
