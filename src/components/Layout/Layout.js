import Footer from "./Footer"
import Navigation from "./Navigation"

const Layout=(props)=>{
    return <>
        <Navigation onShow={props.onShow}/>
        <main>
            {props.children}
        </main>
        <Footer/>
    </>
}
export default Layout