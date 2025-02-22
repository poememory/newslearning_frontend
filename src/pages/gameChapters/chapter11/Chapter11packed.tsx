import Chapter11Index from "@/chapters/Chapter11";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter11packed(){
    return(
        <GlobalProvider>
            <Chapter11Index></Chapter11Index>
        </GlobalProvider>
    )
}
