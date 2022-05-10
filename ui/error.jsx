import classes from "../styles/error.module.css";
const Error = ({ children }) => {
  return (
    <div className="container">
      <div className={classes.errorBox}>{children}</div>
    </div>
  );
};
export default Error;
