import Chapter13Index from "@/chapters/Chapter13";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter13packed(){
    return(
        <GlobalProvider>
            <Chapter13Index></Chapter13Index>
        </GlobalProvider>
    )
}
