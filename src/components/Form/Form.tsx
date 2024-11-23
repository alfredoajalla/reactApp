import { ReactNode } from "react"

interface Props {
    children: ReactNode
}
export const AppForm = ({ children }: Props) => {
    return (
        <form>
            {/*inputs, validatios*/}
            {children}
        </form>
    )
}