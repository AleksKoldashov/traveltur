import './Button.scss';

interface IButtonProps {
  type: 'primary' | 'secondary' | 'tertiary';
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  icon?: React.ReactNode;
  link?: string;
}

function Button({
  type,
  text,
  onClick,
  width,
  height,
  padding,
  borderRadius,
  link,
  icon,
}: IButtonProps) {
  return (
    <>
      {link ? (
        <a
          href={link}
          rel="noopener noreferrer"
          className={`btn ${type}`}
          style={{ width, height, padding, borderRadius }}
        >
          {icon}
          {text}
        </a>
      ) : (
        <button
          className={`btn ${type}`}
          onClick={onClick}
          style={{ width, height, padding, borderRadius }}
        >
          {icon}
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
