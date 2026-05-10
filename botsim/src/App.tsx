import { useRef, useEffect } from "react"
import "./App.css"
import { SimContainer } from "./ui/SimContainer"
import * as MakeCodeService from "./services/makecodeService"

const MAKECODE_URL =
    "https://makecode.microbit.org/?controller=1#ext:bruaguspons993/butia-microbit-extension"

export const App: React.FC = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        if (iframeRef.current) {
            MakeCodeService.init(iframeRef.current)
        }
    }, [])

    return (
        <div className="app">
            <div className="sim-panel">
                <SimContainer />
            </div>
            <div className="makecode-panel">
                <iframe
                    ref={iframeRef}
                    src={MAKECODE_URL}
                    title="MakeCode Editor"
                    allow="usb"
                />
            </div>
        </div>
    )
}
