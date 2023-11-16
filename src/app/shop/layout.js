import FiltersShop from '@/components/app/shop/Filters/FiltersSideBar';
import SearchBarShop from '@/components/app/shop/searchBar/SearchBarShop';
import React from 'react';

export default function ShopMainLayout({ children }) {
	return <div className="w-full h-[calc(100vh-65px)] pt-6 ">{children}</div>;
}
