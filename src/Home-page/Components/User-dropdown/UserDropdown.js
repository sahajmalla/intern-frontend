import { useState } from "react"

const UserDropdown = () => {
    const [ShowUserDropdown, setShowUserDropdown] = useState(false)
    return (
        <>
            <div className="relative inline-block text-left">
                <div>
                    <button onClick={() => { setShowUserDropdown(!ShowUserDropdown) }} type="button" className="inline-flex justify-center w-full px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 " id="menu-button" aria-expanded="true" aria-haspopup="true">

                        <img className="inline object-cover w-10 h-10 mr-2 rounded-full"
                            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                            alt="Profile image" />
                    </button>
                </div>

                {ShowUserDropdown && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div className="py-4" role="none">
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                            <form method="POST" action="#" role="none">
                                <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
                                    Sign out
                                </button>
                            </form>
                        </div>
                    </div>
                )}

            </div>

        </>
    )
}

export default UserDropdown
