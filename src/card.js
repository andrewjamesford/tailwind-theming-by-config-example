import React from 'react';

const Card = () => {

    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://picsum.photos/720/400/" alt="blog" />
            <div className="p-6 alpha:bg-alpha-colour1 beta:bg-beta-colour1 gamma:bg-gamma-colour1">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 gamma:text-gray-600 mb-1">CATEGORY</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className="flex items-center flex-wrap ">
                    <a href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</a>                
                </div>
            </div>
            </div>
        </div>
    );
}
export default Card;