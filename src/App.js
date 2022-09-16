import ReactDOM from 'react-dom'
import Navbar from "./Navbar"
import Corpo from "./Corpo"

function App () {
    return (
        <div>
            <Navbar/>
            <Corpo/>
        </div>
    )
}

let app = App()
let elemento = document.querySelector(".root")
ReactDOM.render(app, elemento);