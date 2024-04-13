import NavBar from "../navbar/navbar"

const Layout = ({children}) => {
    return (
        <div style={{overflow:"auto"}}>
            <NavBar />
                {children}
        </div>
    )

}

export default Layout