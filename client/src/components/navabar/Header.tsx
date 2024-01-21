import React, { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { CiHeart } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';

function MegaMenu() {
  const megaNavbar: { id: number; name: string; href: string; image: string }[] = [
    { id: 1, name: 'collection-1', href: '', image: '../../assets/collectionimage1.jpg' },
    { id: 2, name: 'collection-2', href: '', image: '../../assets/collectionimage2.jpg' },
    { id: 3, name: 'collection-3', href: '', image: '../../assets/collectionimage1.jpg' },
    { id: 4, name: 'collection-4', href: '', image: '../../assets/collectionimage2.jpg' },
  ];

  return (
    <>
    {/* <div className='bg-white text-black w-[80%] m-auto p-9'>
      <div>
        <ul className='flex flex-col gap-2'>
          {megaNavbar.map((menuItem) => (
            <a key={menuItem.id} href={menuItem.href}>
            <li> {menuItem.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </div> */}
    </>
  );
}

function Header() {
  const navigation: { id: number; name: string; href: string; current: boolean }[] = [
    { id: 1, name: 'Home', href: '/', current: true },
    { id: 3, name: 'Collections', href: '#', current: false },
    { id: 2, name: 'Contact', href: '#', current: false },
  ];

  const listItems: { id: number; icons: any; href: string; current: boolean }[] = [
    { id: 1, icons: <FaCartShopping />, href: '', current: false },
    { id: 2, icons: <CiHeart />, href: '', current: false },
    { id: 3, icons: <CiSearch />, href: '', current: false },
  ];

  const [open, setOpen] = useState<boolean | undefined>(false);

  return (
    <>
      <div className='relative'>
        <div className='w-[90%] p-5 bg-white text-black m-auto flex gap-3 justify-between'>
          <div className=''>
            <h3>LOGO</h3>
          </div>
          <div className='relative'>
          <ul className='flex gap-4'>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          </div>
          <div>
          <ul className='flex gap-3'>
            {listItems.map((item) => (
                <li><a key={item.id} href={item.href}>
              {item.icons}</a></li>
            ))}
            </ul>
          </div>
        </div>
        <MegaMenu />
      </div>
    </>
  );
}

export default Header;
