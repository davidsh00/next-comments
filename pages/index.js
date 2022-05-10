import { Fragment } from "react";

import EventList from "../components/event/event-list";
import {getRemoteHires}from '../dummy_data'

function HomePage() {
  const remoteEvents=getRemoteHires()
  return <div className='container'>
    <h2>
      Remote Hires
    </h2>
    <EventList list={remoteEvents}/>

  </div>;
}
export default HomePage;
