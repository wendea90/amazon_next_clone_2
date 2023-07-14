
import Header from './header/Header'
import BottomHeader from './header/BottomHeader'
import Footer from './Footer'
import { ReactElement } from 'react'

interface Props {
    children: ReactElement
}

const RootLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <BottomHeader />
            {children}
            <Footer />
        </>
    )
}

export default RootLayout