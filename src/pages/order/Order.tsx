import Single from "../../components/single/Single"
import { singleOrder } from "../../data"
import "./order.scss"

const Order = () => {

    //Fetch data and send to Single Component
    return (
        <div className="product">
            <Single {...singleOrder} />
        </div>
    )
}

export default Order