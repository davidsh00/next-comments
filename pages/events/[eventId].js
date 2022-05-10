import { useRouter } from "next/router";
import EventDetails from "../../components/event/event-details";
import { getDetailsHire } from "../../dummy_data";
import fetchAll from "../../helper/fetchAllData";

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
export async function getStaticProps(context) {
  const { params } = context;
  const hireId = params.eventId;
  const data = await fetchAll();
  const item = data.find((dataItem) => dataItem.id == hireId);
  if(!item){
    return{
      notFound:true
    }
  }
  return {
    props: { item },
  };
}
export async function getStaticPaths() {
  return {
    paths:[{params:{eventId:'h1'}}],
    fallback: true,
  };
}
export default DetailsEventPage;
