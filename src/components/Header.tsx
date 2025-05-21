import CodingFactoryLogo from "./CodingFactoryLogo.tsx";

const Header = () => {
    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <CodingFactoryLogo/>
                    <a className="text-white hover:underline-offset-4" href="/">Home</a>
                </div>
            </header>
        </>
    )
}

export default Header;