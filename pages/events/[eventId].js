import { useRouter } from "next/router";
import EventDetails from "../../components/event/event-details";
import { getDetailsHire } from "../../dummy_data";

function DetailsEventPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const eventItem = getDetailsHire(eventId);
  if (!eventId) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <EventDetails item={eventItem} />
    </>
  );
}
export default DetailsEventPage;
