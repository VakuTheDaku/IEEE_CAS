function Navbar() {
    
    
    return(
        <div className="navbar bg-slate-100">
            <div className="grid grid-cols-1">
            <div className="flex justify-between w-screen" >
                
                    <div>
                        <img src="img/logo.svg" className="btn btn-ghost normal-case text-xl" alt="Flowbite Logo" />
                        
                    </div>
                    <div className="flex">
                        <img src="https://pes.ieeekerala.org/wp-content/uploads/2022/04/ieee-mb-black-png.png" className="btn btn-ghost normal-case text-xl" alt="Flowbite Logo" />
                    </div>
                
                </div>
                <br></br>
                <div className="grid grid-cols-1">
                
                    <ul className="menu menu-horizontal w-screen flex justify-center text-sm">
                        <li><a>Item 1</a></li>
                        <li tabIndex="0">
                            <a>
                            Item 2
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul className="p-2 bg-slate-50 text-sm">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 4</a></li>
                        <li><a>Item 5</a></li>
                        <li><a>Item 6</a></li>
                        <li><a>Item 7</a></li>
                        <li><a>Item 8</a></li>
                        <li><a>Item 9</a></li>
                        <li><a>Item 10</a></li>
                        <li><a>Item 11</a></li>
                       
                    </ul>
                </div>
                </div>
            </div>
           
            
       
    )


}
export default Navbar