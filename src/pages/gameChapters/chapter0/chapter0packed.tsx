import { GlobalProvider } from "@/context/GlobalContext"
import Chapter0 from "."

export default function Chapter0packed(){
    return(
        <GlobalProvider>
            <Chapter0></Chapter0>
        </GlobalProvider>
    )
}