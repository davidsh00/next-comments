import { useRouter } from "next/router";

import Error from "../../ui/error";
import EventList from "../../components/event/event-list";
import { getDataSortHires } from "../../dummy_data";
import classes from "../../styles/sort-page.module.css";
function SearchEventPage() {
  const router = useRouter();
  const routerPathList = router.query.slug;
  if (!routerPathList) {
    return <h2>Loading...</h2>;
  }
  const year = Number(routerPathList[0]);
  const month = Number(routerPathList[1]);
  const list = getDataSortHires(year, month);
  if (!list || list.length === 0) {
    return (
      <Error>
        <h2>there is nothing to show</h2>
      </Error>
    );
  }
  return (
    <div className="container">
      <div className={classes.search_title}>
        <h2>{`All Hires for ${year} - ${month}`}</h2>
      </div>
      <EventList list={list} />;
    </div>
  );
}
export default SearchEventPage;
