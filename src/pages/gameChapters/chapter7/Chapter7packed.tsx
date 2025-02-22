import Chapter7Index from "@/chapters/Chapter7";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter7packed(){
    return(
        <GlobalProvider>
            <Chapter7Index></Chapter7Index>
        </GlobalProvider>
    )
}
