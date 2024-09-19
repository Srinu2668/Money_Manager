import MoneyUpdateCard from "./MoneyUpdateCard";
import GetFrom from "./GetFrom";
import Styles from "./TransactionCard.module.css"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

const TransactionCard=()=>
{
    let one;
    const typeList=
    [
        {id:1,name:"Balance",imgUrl:"./wallet.png",amount:0},
        {id:2,name:"Income",imgUrl:"./income.png",amount:0},
        {id:3,name:"Expenses",imgUrl:"./expenses.png",amount:0}
    ]

    const [moneyupdatelist,setmoneyupdatelist]=useState(typeList);

    const [updatedobj,setupdatedobj]=useState([]);
    const submitingData=(newObject1)=>
    {
        const myObj={   
            id:uuidv4(),
            name_ti:newObject1.target[0].value,
            amount_ti:newObject1.target[1].value,
            type_ti:newObject1.target[2].value,
            delete_ti:"./deleteicon.png"
        }
        setupdatedobj(prevObjects => [...prevObjects, myObj]);
        newObject1.target[0].value='';
        newObject1.target[1].value='';
        newObject1.target[2].value='Income';
        
        let moneyupdateobj;
        if(myObj.type_ti==="Income")
        {
            moneyupdateobj=moneyupdatelist.map((element)=>
            {
                if(element.name=="Income")
                {
                    return { id:2,name:"Income",imgUrl:"./income.png",amount:parseInt(myObj.amount_ti)+parseInt(element.amount)}
                }
                else if (element.name=="Balance")
                {
                    return {id:1,name:"Balance",imgUrl:"./wallet.png",amount:parseInt(myObj.amount_ti)+parseInt(element.amount)}
                }
                return element
            })
        }
        else
        {
            moneyupdateobj=moneyupdatelist.map((element)=>
                {
                    if(element.name=="Expenses")
                    {
                        return {id:3,name:"Expenses",imgUrl:"./expenses.png",amount:parseInt(element.amount)+parseInt(myObj.amount_ti)}
                    }
                    else if (element.name=="Balance")
                    {
                        return {id:1,name:"Balance",imgUrl:"./wallet.png",amount:parseInt(element.amount)-parseInt(myObj.amount_ti)}
                    }
                    return element
                })
        }
        setmoneyupdatelist(moneyupdateobj)
    }

    const deleteClickAction=(event)=>
    {
        const upadateobjWhileDeleted=updatedobj.filter((ele)=>
            {
            if(event.target.value != ele.id)
                return ele;
            else
            {                
                let moneyupdateobj22;
                if(ele.type_ti==="Income")
                {
                    moneyupdateobj22=moneyupdatelist.map((element)=>
                    {
                        if(element.name=="Income")
                        {
                            return {id:2,name:"Income",imgUrl:"./income.png",amount:parseInt(element.amount)-parseInt(ele.amount_ti)}
                        }
                        else if (element.name=="Balance")
                        {
                            return {id:1,name:"Balance",imgUrl:"./wallet.png",amount:parseInt(element.amount)-parseInt(ele.amount_ti)}
                        }
                        return element
                    })
                }
                else
                {
                    moneyupdateobj22=moneyupdatelist.map((element)=>
                        {
                            if(element.name=="Expenses")
                            {
                                return {id:3,name:"Expenses",imgUrl:"./expenses.png",amount:parseInt(element.amount)-parseInt(ele.amount_ti)}
                            }
                            else if (element.name=="Balance")
                            {
                                return {id:1,name:"Balance",imgUrl:"./wallet.png",amount:parseInt(element.amount)+parseInt(ele.amount_ti)}
                            }
                            return element
                        })
                }
                setmoneyupdatelist(moneyupdateobj22)
                
            }
            })
        setupdatedobj(upadateobjWhileDeleted);

    }


    return(
        <>
            <div className={Styles.moneycardDiv}>
            {
                moneyupdatelist.map((typedata)=>
                {
                    return <MoneyUpdateCard key={typedata.id} typedata={typedata}></MoneyUpdateCard>
                })
            }
            </div>
            <div className={Styles.up_down_trans}>
                <GetFrom submitingData={submitingData}></GetFrom>
                <div className={Styles.uploadContainer}>
                    <div className={Styles.headtitle}><h2>History</h2></div>
                    <div className={Styles.table_container}>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col" className="col-3">Title</th>
                                <th scope="col" className="col-3">Amount</th>
                                <th scope="col" className="col-2">Type</th>
                                <th scope="col" className="col-2">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    updatedobj.map((e)=>
                                    {
                                        one=e.type_ti === 'Income' ? 'green' : 'red'
                                        return ( 
                                                <tr className={Styles.trsize} key={e.id}>
                                                    <th scope="row">{e.name_ti}</th>
                                                    <td style={{ color:one}}>{e.amount_ti}</td>
                                                    <td style={{ color:one}}>{e.type_ti}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={deleteClickAction} value={e.id}>Delete</button>
                                                    </td>
                                                </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TransactionCard;