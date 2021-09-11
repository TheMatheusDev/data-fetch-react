import './styles.css';

export const Button = ({ text, handleClick, disabled }) => (
    <button className="button" onClick={handleClick} disabled={disabled}>
        {text}
    </button>
);
