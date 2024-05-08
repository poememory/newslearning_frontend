import Chapter1Index from "@/pages/Chapter1/index";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter1packed(){
    return(
        <GlobalProvider>
            <Chapter1Index></Chapter1Index>
        </GlobalProvider>
    )
}
