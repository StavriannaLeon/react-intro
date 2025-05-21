const Footer = () => {
    const currentYear: number = new Date().getFullYear();
    return (
        <>
            <header className="bg-gray-700">
                <div className="text-white text-center py-4">
                    Copyright &copy; {currentYear}, Coding Factory. All rights reserved.
                </div>
            </header>
        </>
    )
}

export default Footer;