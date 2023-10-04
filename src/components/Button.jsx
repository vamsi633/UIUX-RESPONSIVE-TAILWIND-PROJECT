import styles from "../styles";

const Button = () => {
  return (
    <button
      type="button"
      className={` m-3 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      <p>Get Started</p>
    </button>
  );
};

export default Button;
