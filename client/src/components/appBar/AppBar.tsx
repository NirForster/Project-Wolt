import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import woltLogo from "../../assets/dummyData/Wolt-Logo-b&w.png";
import { SlHome, SlLocationPin } from "react-icons/sl";
import CartModel from "../cart/CartModel";
import { Button } from "../ui/button";
import LoginModel from "../auth-components/Login/LoginModel";
import SignUpModel from "../auth-components/register/RegisterModel";
import { userContext } from "../../providers/userContext";
import AddressModel from "../address/AddressModel";

const AppBar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const userContextValue = useContext(userContext);
  const { user, providerLogout } = useContext(userContext); // Access user context
  const userLoggedIn = userContextValue.user;
  const address = userLoggedIn?.locations?.[1] || "Halizon 3 Ramat Gan";

  return (
    <div className="flex h-[70px] bg-white w-full px-5 py-3 border-b border-gray-200">
      <div className="flex-1">
        <div className="flex items-center h-full justify-start ">
          {/* Wolt Logo */}
          <div className="flex w-[80px] justify-end mr-2">
            <img src={woltLogo} alt="wolt-logo" />
          </div>
          {/* Location Icon */}
          <div
            className={`p-2 text-blue-600 mr-1 h-8 bg-blue-100 rounded-full items-center ${
              isSearchActive ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* <SlHome size={16} /> */}
            <SlLocationPin size={16} />
          </div>
          {/* Address */}
          <button
            className={`text-sm font-medium text-blue-600 hover:underline ${
              isSearchActive ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => setIsAddressModalOpen(true)}
          >
            {address}
          </button>
        </div>
      </div>
      {/* Search Bar */}
      <div className={` ${isSearchActive ? "flex-grow" : "flex-1"} `}>
        <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
          <input
            type="text"
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
            placeholder="search "
            className="w-full text-sm bg-transparent outline-none"
          />
          <FaSearch size={16} className="text-gray-600" />
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <div className="flex gap-4 items-center justify-end">
          <button
            className={`px-4 py-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 ${
              isSearchActive ? "opacity-0" : "opacity-100"
            }`}
          >
            HB
          </button>

          {/* Cart Icon */}
          <CartModel />

          {/* Conditional Rendering Based on User Authentication */}
          {user ? (
            <>
              {/* Show only if the user is logged in */}
              <p className="text-sm font-medium text-gray-700">
                Welcome, {user.fname}
              </p>
              <Button
                className="text-sm font-medium bg-red-500 text-white hover:bg-red-600"
                onClick={providerLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              {/* Show only if the user is not logged in */}
              <button onClick={() => setIsModalOpen(true)}>Log in</button>
              <Button
                className="bg-BlueLightBackground text-woltColors-brandBg hover:bg-woltColors-brandHovered"
                onClick={() => setIsSignUpModalOpen(true)}
              >
                Sign up
              </Button>
            </>
          )}

          {/* Modals */}
          {isModalOpen && <LoginModel onClose={() => setIsModalOpen(false)} />}
          {isAddressModalOpen && (
            <AddressModel onClose={() => setIsAddressModalOpen(false)} />
          )}
          {isSignUpModalOpen && (
            <SignUpModel onClose={() => setIsSignUpModalOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppBar;
