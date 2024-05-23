import Chapter3Index from "@/chapters/Chapter3";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter3packed(){
    return(
        <GlobalProvider>
            <Chapter3Index></Chapter3Index>
        </GlobalProvider>
    )
}
