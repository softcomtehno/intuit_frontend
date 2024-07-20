import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const questions = [
  {
    question: 'Вы склонны больше к профессиям?',
    options: ['Гуманитарным', 'Техническим'],
  },
  {
    question: 'Какое направление обучения вас интересует?',
    options: [
      'Колледж',
      'Бакалавриат',
      'Магистратура',
      'Аспирантура',
      'Бизнес образование',
      'Курсы',
    ],
  },
  {
    question: 'Какой формат обучения вам подходит?',
    options: ['Очно', 'Заочно'],
  },
  {
    question: 'Вас интересуют бюджетные места?',
    options: ['Да', 'Нет'],
  },
  {
    question: 'Нужно ли трудоустройство?',
    options: ['Да', 'Нет'],
  },
]


export const Quizizz = () => {
  const [value, setValue] = React.useState(0)
  const [answers, setAnswers] = React.useState(questions.map(() => ''))
  const [hoveredOption, setHoveredOption] = React.useState('')
  const [contactInfo, setContactInfo] = React.useState({
    phoneNumber: '',
    emailAddress: '',
    whatsappNumber: '',
  })

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (answers[value] !== '') {
      setValue(newValue)
    }
  }

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target
    const updatedAnswers = [...answers]
    updatedAnswers[index] = value
    setAnswers(updatedAnswers)
    if (value !== '' && index < questions.length - 1) {
      setValue(index + 1)
    } else if (index === questions.length - 1) {
      setValue(questions.length)
    }
  }

  const handleMouseEnter = (option: string) => {
    setHoveredOption(option)
  }

  const handleMouseLeave = () => {
    setHoveredOption('')
  }

  const handleContactInfoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Submitted Answers:', answers)
    console.log('Contact Information:', contactInfo)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {questions.map((_, index) => (
            <Tab key={index} label={index + 1} {...a11yProps(index)} />
          ))}
          <Tab
            key="contact"
            label="Contact"
            disabled={answers.includes('')}
            {...a11yProps(questions.length)}
          />
        </Tabs>
      </Box>
      {questions.map((question, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <FormControl component="fieldset">
            <RadioGroup
              name={`question${index}`}
              value={answers[index]}
              onChange={(e) => handleOptionChange(e, index)}
            >
              {question.options.map((option, optIndex) => (
                <FormControlLabel
                  key={optIndex}
                  value={option}
                  control={
                    <Radio
                      sx={{
                        '&:hover': { color: 'primary.main' },
                        color:
                          hoveredOption === option ? 'primary.main' : 'default',
                      }}
                      onMouseEnter={() => handleMouseEnter(option)}
                      onMouseLeave={handleMouseLeave}
                    />
                  }
                  label={option}
                  sx={{
                    '&:hover .MuiTypography-root': {
                      color: 'primary.main',
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CustomTabPanel>
      ))}
      <CustomTabPanel value={value} index={questions.length}>
        <Box sx={{ p: 3 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              name="phoneNumber"
              label="Phone Number"
              value={contactInfo.phoneNumber}
              onChange={handleContactInfoChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="emailAddress"
              label="Email Address"
              value={contactInfo.emailAddress}
              onChange={handleContactInfoChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="whatsappNumber"
              label="WhatsApp Number"
              value={contactInfo.whatsappNumber}
              onChange={handleContactInfoChange}
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </CustomTabPanel>
    </Box>
  )
}
