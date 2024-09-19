import TransactionCard from "./components/TransactionCard";
import TitleCard from "./components/TitleCard";
import './App.css'

const App=()=>
{

  return(
    <>
      <div className="fullbox">
        <div className="containers">
          <TitleCard></TitleCard>
          <TransactionCard></TransactionCard>
        </div>
      </div>
    </>
  )
}
export default App; 