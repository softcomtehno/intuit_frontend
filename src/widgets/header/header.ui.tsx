import { AppBar, Button, Divider, Toolbar } from '@mui/material';
import IntuitLogo from '../../assets/intuit-logo.png';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

const universitySections = [
  'Абитуриентам',
  'Институты',
  'Специальности',
  'Курсы',
  'Студентам',
  'Об Университете',
];

const degreeSections = [
  'Институты',
  'Бакалавриат',
  'Магистратура',
  'Колледж',  
  'Аспирантура',
  'Креатив',
  'Курсы',
];

export function Header() {
  return (
    <AppBar position="sticky" className="bg-white text-black shadow-none py-3">
      <header>
        <Toolbar
          disableGutters
          className="flex justify-between pb-2 max-w-[80%] mx-auto"
        >
          <div className="flex items-center gap-1">
            <img src={IntuitLogo} alt="Intuit" className="h-[58px]" />
            <p className="text-xs font-semibold leading-3">
              МЕЖДУНАРОДНЫЙ <br /> УНИВЕРСИТЕТ <br /> ИННОВАЦИОННЫХ <br />
              ТЕХНОЛОГИЙ
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outlined"
              size="small"
              className="px-12 py-[5px] duration-300 border-green text-green hover:bg-green hover:text-white"
            >
              Подобрать программу
            </Button>

            <Button className="text-blue" startIcon={<LocalPhoneRoundedIcon />}>
              +996 (312) 88-26-84
            </Button>

            <Button className="text-green" endIcon={<MenuRoundedIcon />}>
              Меню
            </Button>
          </div>
        </Toolbar>
        <Toolbar
          disableGutters
          className="flex justify-between min-h-[29px] max-w-[80%] mx-auto"
        >
          {universitySections.map((univer) => (
            <Link className="text-base font-medium" to="/">
              {' '}
              {univer}
            </Link>
          ))}
        </Toolbar>
        <Divider className="h-[2px]" />
        <Toolbar
          disableGutters
          className="flex justify-between min-h-[0px] py-2 max-w-[80%] mx-auto"
        >
          {degreeSections.map((univer) => (
            <Link className="text-xs font-bold text-black/70" to="/">
              {' '}
              {univer}
            </Link>
          ))}
        </Toolbar>
        <Divider className="h-[2px]" />
      </header>
    </AppBar>
  );
}
