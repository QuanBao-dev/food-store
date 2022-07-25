import "./DiscountOption.css";

const DiscountOption = ({
  label,
  isActive,
  index,
  updateDiscountMode,
  updateAmount,
}) => {
  return (
    <div
      className={"discount-option-item" + (isActive ? " active" : "")}
      onClick={() => {
        if (isActive === false) {
          updateDiscountMode(index);
          switch (index) {
            case 0:
              updateAmount(2);
              break;
            case 1:
              updateAmount(3);
              break;
            case 2:
              updateAmount(5);
              break;
            default:
              break;
          }
        }
      }}
    >
      <div></div>
      <div>{label}</div>
    </div>
  );
};

export default DiscountOption;
