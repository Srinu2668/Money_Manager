import Styles from "./MoneyUpdateCard.module.css"

const MoneyUpdateCard=(props)=>
{
    const {typedata}=props;
    const {name,imgUrl,amount}=typedata;
    return(
        <>
            <div className={Styles.box}>
                <div className={Styles.img}><img src={imgUrl} alt="logo" height='45px'/></div>
                <div className="bla_in">
                    <h6>Your {name}</h6>
                    <h4>Rs {amount}</h4>
                </div>
            </div>
        </>
    )
}
export default MoneyUpdateCard;