import '../App.css'
const ErrorMessage=(props)=>
{
    const {erroring}=props;
    if(erroring==='error')
    {
        return <p className="error_show">* Fill the form</p>
    }
    return (erroring!='')?<p className="error_show">* Enter Amount correctly</p>:'';

}
export default ErrorMessage;