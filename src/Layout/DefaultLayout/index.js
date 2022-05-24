import Sidebar from './Sidebar'
import Header from '~/Layout/components/Header'

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    { children }
                </div>
            </div>
        </>
    )
}

export default DefaultLayout