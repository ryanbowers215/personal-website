import NavBar from "../navbar/navbar"

const Layout = ({children}) => {
    return (
        <div style={{overflow:"auto", position: "relative"}}>
            <NavBar />
            <div style={{marginTop: "80px"}}>
                {children}
            </div>
        </div>
    )

}

export default Layout