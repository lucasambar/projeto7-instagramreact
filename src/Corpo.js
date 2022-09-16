import Sidebar from "./Sidebar";
import Stories from "./Stories";

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