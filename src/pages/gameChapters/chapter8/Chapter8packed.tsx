import Chapter8Index from "@/chapters/Chapter8";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter8packed(){
    return(
        <GlobalProvider>
            <Chapter8Index></Chapter8Index>
        </GlobalProvider>
    )
}
