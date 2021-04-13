import React from 'react';
import logo from './logo.svg';

const Header = () => {

    return (
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} />
            <span class="ml-3 text-sm">Theming</span>
          </a>
        </div>
      </header>
    )
}

export default Header;