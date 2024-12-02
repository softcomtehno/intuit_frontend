import { Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

export const EnrollForm = () => {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>() // Получаем slug из параметров маршрута

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })
  console.log(window.location);
  
  // Мутация с использованием tanstack/react-query
  const mutation = useMutation({
    mutationFn: () =>
      axios.post(
        'https://intuit.makalabox.com/api/university/user-application/',
        {
          user: formData.name,
          phone: formData.phone,
          email: formData.email,
          slug: `${window.location}`, // Передаем slug в теле запроса
        }
      ),
    onSuccess: () => {
      alert(t('homepage.enrollForm.successMessage')) // Сообщение об успешной отправке
      setFormData({ name: '', phone: '', email: '' }) // Сброс формы
    },
    onError: () => {
      alert(t('homepage.enrollForm.errorMessage')) // Сообщение об ошибке
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    mutation.mutate()
  }

  return (
    <div className="bg-blue p-5 rounded-lg w-full">
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                className="text-base py-3 px-3 w-[320px] rounded outline-none placeholder:text-base lg:w-full"
              />
            </fieldset>
          </fieldset>
          <Button
            variant="contained"
            className="shadow-none h-[51px] w-full bg-green"
            onClick={handleSubmit}
            disabled={mutation.isLoading}
          >
            {mutation.isLoading
              ? t('homepage.enrollForm.buttons.submitting')
              : t('homepage.enrollForm.buttons.submit')}
          </Button>
        </div>
      </div>
    </div>
  )
}
