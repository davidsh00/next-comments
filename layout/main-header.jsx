import Link from "next/link";

import classes from "../styles/main-header.module.css";
function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.header_content}>
          <div>
            <h2>
              <Link href="/">Job Search</Link>
            </h2>
          </div>
          <nav>
            <ul>
              <Link href="/events">View All Events</Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default MainHeader;
