import { Fragment } from "react";
import { useEffect, useState } from "react";

import EventList from "../components/event/event-list";
import { getRemoteHires } from "../dummy_data";
import fetchAll from "../helper/fetchAllData";

function HomePage(props) {
  const [list, setList] = useState(props.list);
  useEffect(() => {
    async function fa() {
      const data = await fetchAll();
      setList(data);
    }
    fa();
  }, []);
  if (list.length === 0) {
    return <p>there is nothing to show</p>;
  }
  return (
    <div className="container">
      <h2>Remote Hires</h2>
      <EventList list={list} />
    </div>
  );
}
export async function getStaticProps() {
  const data = await fetchAll();

  const list = data.filter((item) => item.remote === true);

  return { props: { list } };
}
export default HomePage;
