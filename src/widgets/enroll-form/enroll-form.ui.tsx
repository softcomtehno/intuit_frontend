import { Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const initialUser = {
  name: '',
  phone: null,
  email: '',
}

console.log(initialUser)

export const EnrollForm = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-blue p-5 rounded-lg w-full ">
      <Typography component="div" variant="h3" className="font-bold text-white">
        {t('homepage.enrollForm.title')}
      </Typography>
      <div>
        <div className="flex items-center gap-2 lg:flex-col">
          <fieldset className="text-xs flex gap-2 lg:flex-col">
            <fieldset className="my-5">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t('homepage.enrollForm.placeholders.name')}
                className="text-base py-3 px-3 w-[320px] rounded outline-none placeholder:text-base lg:w-full"
              />
            </fieldset>
            <fieldset className="my-5">
              <input
                type="text"
                id="phone"
                name="phone"
                required
                placeholder={t('homepage.enrollForm.placeholders.phone')}
                className="text-base py-3 px-3 w-[320px] rounded outline-none placeholder:text-base lg:w-full"
              />
            </fieldset>
            <fieldset className="my-5">
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder={t('homepage.enrollForm.placeholders.email')}
                className="text-base py-3 px-3 w-[320px] rounded outline-none placeholder:text-base lg:w-full"
              />
            </fieldset>
          </fieldset>
          <Button
            variant="contained"
            className="shadow-none h-[51px] w-full bg-green"
          >
            {t('homepage.enrollForm.buttons.submit')}
          </Button>
        </div>
      </div>
    </div>
  )
}
