import Chapter14Index from "@/chapters/Chapter14";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter14packed(){
    return(
        <GlobalProvider>
            <Chapter14Index></Chapter14Index>
        </GlobalProvider>
    )
}
