import React from 'react';
import logo from './logo.svg';

const Header = () => {

    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="React logo" />
            <span className="ml-3 text-sm">Theming</span>
          </a>
        </div>
      </header>
    )
}

export default Header;