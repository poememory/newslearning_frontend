import Chapter10Index from "@/chapters/Chapter10";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter10packed(){
    return(
        <GlobalProvider>
            <Chapter10Index></Chapter10Index>
        </GlobalProvider>
    )
}
