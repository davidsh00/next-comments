import Layout from "../layout/layout";
import "../scss/styles.scss";
export default function MyApp({ Component, props }) {
  return (
    <>
      <Layout>
        <Component {...props} />
      </Layout>
    </>
  );
}
