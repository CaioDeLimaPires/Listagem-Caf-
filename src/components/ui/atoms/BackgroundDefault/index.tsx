import { ReactNode } from "react"
import "./style.css"

type Props = {
    children: ReactNode
}

const BackgroundDefault = ({ children }: Props) => (
    <div className="backgroundDefault">
        {children}
    </div>
)

export default BackgroundDefault;