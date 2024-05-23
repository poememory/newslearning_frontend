import Chapter4Index from "@/chapters/Chapter4";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter4packed(){
    return(
        <GlobalProvider>
            <Chapter4Index></Chapter4Index>
        </GlobalProvider>
    )
}
