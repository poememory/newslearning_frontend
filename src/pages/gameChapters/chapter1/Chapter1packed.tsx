import Chapter1Index from "@/chapters/Chapter1";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter1packed(){
    return(
        <GlobalProvider>
            <Chapter1Index></Chapter1Index>
        </GlobalProvider>
    )
}
