import { Fragment } from "react";

import MainHeader from "./main-header";
import classes from '../styles/layout.module.css'

function Layout({ children }) {
  return (
    <Fragment>
      <MainHeader />
      <main className={classes.main}>{children}</main>
    </Fragment>
  );
}
export default Layout;
