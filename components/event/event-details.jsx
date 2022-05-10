import Card from "../../ui/Card";
import classes from "../../styles/event-details.module.css";

function EventDetails(props) {
  const { title, img, adTime, address, description } = props.item;
  const eventTime = new Date(adTime);
  const humanAdTime=eventTime.toLocaleString('en-US',{
    year:'numeric',
    month:'long',
    day:'numeric'
  })
  const humanAddress = address.replaceAll(", ", ' - ');
  return (
    <>
      <div className={classes.title_wrapper}>
        <h2>{title}</h2>
      </div>
      <div className={classes.card_wrapper}>
          <div className={classes.event_item}>
            <div className={classes.event_img}>
              <img src={`/${img}`} alt="event-item" />
            </div>
            <div className={classes.event_content}>
              <time>{humanAdTime}</time>
              <address>{humanAddress}</address>
              <p>{description}</p>
            </div>
          </div>
       
      </div>
    </>
  );
}
export default EventDetails;
