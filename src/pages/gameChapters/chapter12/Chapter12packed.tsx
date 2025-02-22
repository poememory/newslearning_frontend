import Chapter12Index from "@/chapters/Chapter12";
import {GlobalProvider} from "@/context/GlobalContext";
export default function Chapter12packed(){
    return(
        <GlobalProvider>
            <Chapter12Index></Chapter12Index>
        </GlobalProvider>
    )
}
