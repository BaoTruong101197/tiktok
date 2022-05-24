import Header from "~/components/Layout/components/Header"

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default HeaderOnly