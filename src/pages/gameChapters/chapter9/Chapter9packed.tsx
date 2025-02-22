import Chapter9Index from "@/chapters/Chapter9";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter9packed(){
    return(
        <GlobalProvider>
            <Chapter9Index></Chapter9Index>
        </GlobalProvider>
    )
}
