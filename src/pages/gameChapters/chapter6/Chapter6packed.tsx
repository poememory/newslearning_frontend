import Chapter6Index from "@/chapters/Chapter6";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter6packed(){
    return(
        <GlobalProvider>
            <Chapter6Index></Chapter6Index>
        </GlobalProvider>
    )
}
