// import { ErrorMessage, Field, Form } from 'formik';
import { Button, Typography } from '@mui/material';

const initialUser = {
  name: '',
  phone: null,
  email: '',
};

console.log(initialUser);

export const EnrollForm = () => {
  return (
    <div className="bg-blue  p-5 rounded-lg w-full">
      <Typography component="div" variant="h3" className="font-bold text-white">
        Оставьте заявку на обучение
      </Typography>
      <div>
        <div className="flex items-center gap-2">
          <fieldset className="text-xs flex gap-2">
            <fieldset className="my-5">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Имя"
                className="text-base py-3 px-3 w-[320px] rounded outline-none placeholder:text-base"
              />
              {/* <ErrorMessage name="email" /> */}
            </fieldset>
            <fieldset className="my-5">
              <input
                type="text"
                id="phone"
                name="phone"
                required
                placeholder="Номер телефона"
                className="text-base py-3 px-3 w-[320px] rounded outline-none placeholder:text-base"
              />
              {/* <ErrorMessage name="email" /> */}
            </fieldset>
            <fieldset className="my-5">
              <input
                type="text"
                id="phone"
                name="phone"
                required
                placeholder="Email"
                className="text-base py-3 px-3 w-[320px] rounded outline-none placeholder:text-base"
              />
              {/* <ErrorMessage name="email" /> */}
            </fieldset>
          </fieldset>
          <Button
            variant="contained"
            className="shadow-none h-[51px] w-full bg-green"
          >
            Подать заявку
          </Button>
        </div>
      </div>
    </div>
  );
};
