import { useRef } from "react";
import Button from "../../ui/button";
import classes from '../../styles/event-search.module.css'

function SearchSection({ onsearch }) {
    const yearInput=useRef()
    const monthInput=useRef()
    const handleSubmit=(event)=>{
event.preventDefault()
        const enterdYear=yearInput.current.value;
        const enterdMonth=monthInput.current.value;
        const searchDate={
            year:enterdYear,
            month:enterdMonth
        }
        onsearch(searchDate)
    }
  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.form_control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInput} required>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.form_control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInput} required>
            <option value="1">januarty</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">Septamber</option>
            <option value="20">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <Button>Search</Button>
      </form>
    </>
  );
}
export default SearchSection;