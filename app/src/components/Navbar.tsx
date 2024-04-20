const Navbar = () => {
    return (
        <div className="flex h-20 text-white justify-between items-center px-4 fixed w-full z-50 bg-gray-900">
            <div className="text-xl font-bold pl-4">
                Techkareer
            </div>
            <div>
                <ul className="flex space-x-8 text-base text-l ml-3">
                    <li><a href="#JobOpportunity">Job Opportunity</a></li>
                    <li><a href="#TopTalent">Talent</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
