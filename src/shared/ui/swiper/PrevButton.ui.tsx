import { CircleArrowLeft } from "lucide-react";
import { SwiperButtonProps } from "./NextButton.ui";
import clsx from "clsx"; 

const PrevButton = ({ swiperRef, className }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slidePrev()}
      className={clsx(
        "bg-blue text-white py-2 px-4 rounded hover:bg-purple-700 transition",
        className
      )}
    >
<CircleArrowLeft />
    </button>
  );
};

export default PrevButton;
