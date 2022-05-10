import EventItem from "./event-item";
import classes from '../../styles/event-list.module.css'

function EventList(props) {
  return <ul className={classes.event_list}>{props.list.map(event=><EventItem key={event.id} item={event}/>)}</ul>;
}
export default EventList;
