import DoneIcon from "@mui/icons-material/Done";
import ButtonBlackBorder from "../ButtonBlackBorder";

function DiscountTabPanel({
  title,
  subtitle,
  description,
  listItems,
  buttonText,
}) {
  return (
    <div className="flex items-center gap-[80px]">
      <div className="flex max-w-[530px] flex-col gap-6">
        <h3 className="text-[36px] font-bold text-textPrimary">{title}</h3>
        <h4 className="text-[22px] font-bold text-primary">{subtitle}</h4>
        <p className="text-grey-3 text-[18px] font-light">{description}</p>

        <ul className="grid grid-cols-2 grid-rows-2 gap-6">
          <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
            <DoneIcon />
            {listItems[0]}
          </li>
          <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
            <DoneIcon />
            {listItems[1]}
          </li>
          <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
            <DoneIcon />
            {listItems[2]}
          </li>
          <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
            <DoneIcon />
            {listItems[3]}
          </li>
        </ul>
        <ButtonBlackBorder>{buttonText}</ButtonBlackBorder>
      </div>
      <img
        src="./assets/discount-item/headphones.png"
        alt="headphones"
        className="h-[568px] w-[638px]"
      />
    </div>
  );
}

export default DiscountTabPanel;
