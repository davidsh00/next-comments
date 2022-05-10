import { useRouter } from "next/router";

import EventList from "../../components/event/event-list";
import SearchSection from "../../components/event/event-search";
import { getAllHires } from "../../dummy_data";
import Card from "../../ui/Card";

function AllEventsPage() {
  const router = useRouter();
  const list = getAllHires();
  function handleSearch(when) {
    const fullUrl = `/events/${when.year}/${when.month}`;
    router.push(fullUrl);
  }
  return (
    <div className="container">
      <Card>
        <SearchSection onsearch={handleSearch} />
      </Card>
      <h2>All Events</h2>
      <EventList list={list} />
    </div>
  );
}
export default AllEventsPage;
