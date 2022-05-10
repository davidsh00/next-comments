import Card from "../../ui/Card";
import classes from "../../styles/event-item.module.css";
import Button from "../../ui/button";
import Link from "next/link";

function EventItem(props) {
  const { id, title, address, adTime, remote, img, description } = props.item;
  const humanAddress = address.replace(", ", "\n");
  const fullHref = `/events/${id}`;
  return (
    <li className={classes.event_item_wrapper}>
      <Card>
        <div className={classes.event_item}>
          <div className={classes.event_img}>
            <img src={`/${img}`} alt="event-item" />
          </div>
          <div className={classes.event_content}>
            <h2>{title}</h2>
            <time>{adTime}</time>
            <address>{humanAddress}</address>
            <div className={classes.event_actions}>
              <Button href={fullHref}>
            view Details
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
}
export default EventItem;
