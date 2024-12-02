export const EducationFormCard = ({ title, text}) => {
  return (
    <div className="p-5 w-[350px] h-[320px] bg-gray rounded-lg flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h4 className="text-3xl font-bold">{title}</h4>
        <img src="icons8-солнце-50.png" alt="" />
      </div>
      <p>
        {text}
      </p>
    </div>
  )
}
