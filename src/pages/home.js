import { Fragment } from "react"
import Hero from "../components/Hero/Hero"
import Product from "../components/Product/Product"

const Home=()=>{
    return(
        <Fragment>
            <Hero/>
            <Product/>
        </Fragment>
    )
}
export default Home