const ButtonComponent = ({ style, text }) => (
  <button className={`shop__button-${style}-to-check`}>{text}</button>
);

export default ButtonComponent;
