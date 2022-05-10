import Link from "next/link";
import classes from "../styles/button.module.css";
function Button({ href, children }) {
  if (href) {
    return (
      <Link href={href}>
        <div className={classes.btn}>{children}</div>
      </Link>
    );
  }
  return <button className={classes.btn}>{children}</button>;
}
export default Button;
