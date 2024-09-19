import Styles from "./TitleCard.module.css"

const TitleCard=()=>
{
    return(
        <>
        <div className={Styles.titleDiv}>
            <h2>Hi,Srinu</h2>
            <h6>Welcome back to your <span>Money Manager</span></h6>
        </div>
        </>
    )
}
export default TitleCard;