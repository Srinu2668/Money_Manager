import { useState } from "react";
import Styles from "./GetFrom.module.css"
import ErrorMessage from "./ErrorMessage";
import 'bootstrap/dist/css/bootstrap.min.css';
const GetFrom =(props)=>
{
    const {submitingData}=props;

    const [erroring,seterror]=useState('')

    const handleSubmit=(newObject)=> 
    {
        newObject.preventDefault();
        let number=newObject.target[1].value;
        let formtitle=newObject.target[0].value;
        if(number==='' || formtitle==='')
        {
            seterror('error');
        }
        else
        {
            if(isNaN(number))
            {
                seterror(number);
            }
            else
            {
                submitingData(newObject);
                seterror('');
            }
        }
    }


    return(
    <div className={Styles.fromcontainer}>
    <form action="" className={Styles.fromCard} onSubmit={handleSubmit}>
        
        <div className={Styles.title}>
        TITLE
        <input type="text" placeholder="TITLE"/></div>
        
        <div className={Styles.amount}> 
        AMOUNT
        <input type="text" placeholder="AMOUNT"/></div>

        <div>
        TYPE
        <select className={`form-select ${Styles.selectClass}`} aria-label="Default select example">
            <option value="Income">Income</option>
            <option value="Expenses">Expenses</option>
        </select>
        </div>
        <button type="submit" className={`btn btn-primary ${Styles.submitbutton}`}>Add</button>
    </form>
     <ErrorMessage erroring={erroring}></ErrorMessage>
     </div>
    )
}
export default GetFrom;