import Chapter2Index from "@/chapters/Chapter2";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter2packed(){
    return(
        <GlobalProvider>
            <Chapter2Index></Chapter2Index>
        </GlobalProvider>
    )
}
