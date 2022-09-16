import Sidebar from "./Sidebar.js";
import Stories from "./Stories.js";

export default function Corpo () {
    return (
        <div>
            <div class="esquerda">
                <Stories/>
            </div>
            <Sidebar />
        </div>
    )
}