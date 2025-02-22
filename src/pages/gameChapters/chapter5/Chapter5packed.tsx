import Chapter5Index from "@/chapters/Chapter5";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter5packed(){
    return(
        <GlobalProvider>
            <Chapter5Index></Chapter5Index>
        </GlobalProvider>
    )
}
