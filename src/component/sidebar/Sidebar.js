import React,{useState} from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import "./Sidebar.css"

function Sidebar() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen1(false);
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const toggleDropdown3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(!isOpen3);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const toggleDropdown4 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen5(false);
    setIsOpen4(!isOpen4);
  };
  const toggleDropdown5 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen5(!isOpen5);
    setIsOpen4(false);
  };
  
  return (
    <div className='sidebar-container'>
       <div className='sidebar-main  '>
      <div className='sidebar-tp-main'>
  <div className='tp-1'>
   <img src='https://clipground.com/images/web-logo-png-white-7.png' alt='logo' width='30px' height='30px'/>
    <h1>Coziatuon</h1>
  </div>
  <div className='tp-2'>
  <ul>
  <li>
            <div className='list_name'>
         <div className={`link_items ${isOpen1 ? 'active': ''}`} onClick={toggleDropdown1}>
         <div className='link-item'>
                    <a href='#' className={` ${isOpen1 ? 'active': ''}`}>Dashboard</a>
                    <DashboardIcon />
                </div>
                {isOpen1 ? <KeyboardArrowUpIcon className="dropdown-icon" onClick={toggleDropdown1} /> : <KeyboardArrowRightIcon className="dropdown-icon" onClick={toggleDropdown1} /> }

                
         </div>
          {isOpen1 && (
                    <div className="dropdown-content">
                        <a href='#'>Dropdown Item 1</a>
                        <a href='#'>Dropdown Item 2</a>
                        <a href='#'>Dropdown Item 1</a>
                        <a href='#'>Dropdown Item 2</a>
                     
                    </div>
                )}
            </div>      
                
            </li>
            <li>
            <div className='list_name'>
         <div className={`link_items ${isOpen5 ? 'active': ''}`} onClick={toggleDropdown5}>
         <div className='link-item' >
                    <a href='#' className={` ${isOpen5 ? 'active': ''}`}>Product</a>
               <LocalMallIcon />
                </div>
                {isOpen5 ? <KeyboardArrowUpIcon className="dropdown-icon" /> : <KeyboardArrowRightIcon className="dropdown-icon" /> }
         </div>
         {isOpen5 && (
                    <div className="dropdown-content">
                        <a href='#'>Dropdown Item 1</a>
                        <a href='#'>Dropdown Item 2</a>
                        <a href='#'>Dropdown Item 1</a>
                     
                    </div>
                )}
            </div>   
            </li>
            <li>
            <div className='list_name'>
         <div className={`link_items ${isOpen2 ? 'active': ''}`} onClick={toggleDropdown2}>
         <div className='link-item'>
                    <a href='#' className={` ${isOpen2 ? 'active': ''}`}>Customer</a>
                    <PermIdentityIcon />
                </div>
                {isOpen2 ? <KeyboardArrowUpIcon className="dropdown-icon" onClick={toggleDropdown2} /> : <KeyboardArrowRightIcon className="dropdown-icon" onClick={toggleDropdown2} /> }
         </div>
          {isOpen2 && (
                    <div className="dropdown-content">
                        <a href='#'>Dropdown Item 1</a>
                        <a href='#'>Dropdown Item 2</a>
                        <a href='#'>Dropdown Item 1</a>
                     
                    </div>
                )}
            </div>   
            </li>
            <li>
            <div className='list_name'>
         <div className={`link_items ${isOpen3 ? 'active': ''}`} onClick={toggleDropdown3}>
         <div className='link-item'>
                    <a href='#' className={` ${isOpen3 ? 'active': ''}`}>Income</a>
                    <AccountBalanceWalletIcon />
                </div>
                {isOpen3 ? <KeyboardArrowUpIcon className="dropdown-icon" onClick={toggleDropdown3} /> : <KeyboardArrowRightIcon className="dropdown-icon" onClick={toggleDropdown3} /> }
               
         </div>
          {isOpen3 && (
                    <div className="dropdown-content">
                        <a href='#'>Dropdown Item 1</a>
                        <a href='#'>Dropdown Item 2</a>
                     
                    </div>
                )}
            </div>   
            </li>
            <li>
            <div className='list_name'>
         <div className={`link_items ${isOpen4 ? 'active': ''}`} onClick={toggleDropdown4}>
         <div className='link-item'>
                    <a href='#' className={` ${isOpen4 ? 'active': ''}`}>Help</a>
                    <LiveHelpIcon />
                </div>
                {isOpen4 ? <KeyboardArrowUpIcon className="dropdown-icon" onClick={toggleDropdown4} /> : <KeyboardArrowRightIcon className="dropdown-icon" onClick={toggleDropdown4} /> }

         </div>
          {isOpen4 && (
                    <div className="dropdown-content">
                        <a href='#'>Dropdown Item 1</a>
                        <a href='#'>Dropdown Item 2</a>
                     
                    </div>
                )}
            </div>   
            </li>
  </ul>
  </div>
    </div>
    <div className='side-bt-main'>
     <div className='side-bt-left'>
      <img src='https://www.botlibre.com/avatars/a15197017.jpg' alt='user' width='50px' height='50px'/>
     <div className='Admin-details'>
     <h3>Jevanantham</h3>
     <p>Frontend developer</p>
     </div>
     </div>
     <KeyboardArrowRightIcon sx={{color:'white'}}/>
    </div>
       </div>
    </div>
  )
}

export default Sidebar