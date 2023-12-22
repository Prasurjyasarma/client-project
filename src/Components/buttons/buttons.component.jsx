import "./buttons.style.scss";

export const BUTTON_TYPE_CLASSES = {
  black: "black-button",
  red: "red-button",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
