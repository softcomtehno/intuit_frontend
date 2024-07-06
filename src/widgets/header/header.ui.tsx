import { AppBar, Button, Paper, Toolbar } from '@mui/material';
import IntuitLogo from '../../assets/intuit-logo.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';
import { degreeQueries } from '~entities/degree';
import { useState, useRef, useEffect } from 'react';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const universitySections = [
  { title: 'Абитуриентам', route: '/enroll' },
  { title: 'Институты', route: '/institutes' },
  { title: 'Специальности', route: '/specialization' },
  { title: 'Курсы', route: '/courses' },
  { title: 'Студентам', route: '/students' },
  { title: 'Об Университете', route: '/about' },
];

const institutes = [
  { name: 'ИНСТИТУТ ЦИФРОВОЙ ТРАНСФОРМАЦИИ И ПРОГРАММИРОВАНИЯ', programs: 15 },
  { name: 'ИНСТИТУТ ДИЗАЙНА, АРХИТЕКТУРЫ И ТЕКСТИЛЯ', programs: 9 },
  { name: 'ИНСТИТУТ СТРОИТЕЛЬСТВА И ИННОВАЦИОННЫХ ТЕХНОЛОГИЙ', programs: 18 },
  { name: 'ИНСТИТУТ ЭНЕРГЕТИКИ И ТРАНСПОРТА', programs: 5 },
  { name: 'ИНСТИТУТ ЭКОНОМИКИ И МЕНЕДЖМЕНТА', programs: 6 },
  {
    name: 'РОССИЙСКО - КЫРГЫЗСКИЙ ИНСТИТУТ АВТОМАТИЗАЦИИ УПРАВЛЕНИЯ БИЗНЕСА',
    programs: 11,
  },
  { name: 'ИНСТИТУТ МЕЖКУЛЬТУРНОЙ КОММУНИКАЦИИ И ПСИХОЛОГИИ', programs: 5 },
  { name: 'ИНСТИТУТ МАРКЕТИНГА И ЭЛЕКТРОННОЙ КОММЕРЦИИ', programs: 0 },
];

export function Header() {
  const {
    data: degreeData,
    isLoading,
    isError,
  } = degreeQueries.useGetDegrees();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <AppBar
        position="sticky"
        className="bg-white text-black shadow py-1 border-b border-gray"
      >
        <header>
          <Toolbar
            disableGutters
            className="flex justify-between max-w-[85%] mx-auto "
          >
            <Link to="/" className="flex items-center gap-1">
              <img src={IntuitLogo} alt="Intuit" className="h-[50px]" />
              <p className="text-[10px] font-bold leading-[11px]">
                МЕЖДУНАРОДНЫЙ <br /> УНИВЕРСИТЕТ <br /> ИННОВАЦИОННЫХ <br />
                ТЕХНОЛОГИЙ
              </p>
            </Link>
            <div className="flex gap-3">
              <Button
                variant="outlined"
                size="small"
                className="px-10 duration-300 border-green text-green hover:bg-green hover:text-white"
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
                ? 'opacity-100 visible translate-y-[1px] max-h-screen'
                : 'opacity-0 invisible translate-y-[-10px] max-h-0'
            }`}
          >
            <Paper
              elevation={0}
              className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-7 min-w-[85%] max-w-[85%] bg-white rounded-xl flex gap-20 shadow-xl z-50"
            >
              <ul>
                <h2 className="font-bold mb-3">Университет</h2>
                {universitySections.map((degree, index) => (
                  <li className="mb-2" key={index}>
                    {degree.title}
                  </li>
                ))}
              </ul>
              <ul>
                <h2 className="font-bold mb-3">Уровни</h2>
                {degreeData?.data.map((degree, index) => (
                  <li className="mb-2" key={index}>
                    <Link onClick={toggleMenu} to={`degree/${degree.slug}`}>
                      {degree.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                <h2 className="font-bold mb-3">Институты</h2>
                {institutes.map((section, index) => (
                  <li className="mb-2" key={index}>
                    {section.name}
                  </li>
                ))}
              </ul>
            </Paper>
          </div>
        </header>
      </AppBar>
    </>
  );
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
