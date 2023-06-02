import './Button.css';

export const Button = ({ children, isActive, onClick }) => {
  return (
    <button
      //shorthand if in JS
      className={`button ${isActive ? 'button-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
