import React, { useEffect ,useState} from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import Sidebar from '../sidebar/Sidebar'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  BarChart, Bar, Cell, XAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import CustomTable from './Table';


const data = [
  {
    name: 'Jan',
    price:4000,
  },
  {
    name: 'Feb',
    price: 3000,
  },
  {
    name: 'Mar',
    price: 2000,
  },
  {
    name: 'Apr',
    price: 2780,
   
  },
  {
    name: 'May',
    price: 1890,
  },
  {
    name: 'Jun',
    price: 2390,
  },
  {
    name: 'Jul',
    price: 3490,
  },
];
function Main() {
  const [age, setAge] = React.useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = (_, index) => {
    setActiveIndex(index);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const options = {
    series: [67, 83],
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total  Profit',
            formatter: function (w) {
              return '65%';
            },
          },
        },
      },
    },
    labels: ['Chair', 'Table' ],
    colors: ['#f58aff', '#291DE3'],
  };

  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []); 

  return (
    <div>
        <Sidebar/>
        <div className='main-content'>
         <div className='main-section-1'>
         <h1>Hello Jeva &#128075;,</h1>
         <div class="group">
         <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        <input placeholder="Search" type="search" class="input"/>
        </div>
         </div>
         <div className='main-section-2'>
            <div className='cards card-1'>
            <img src="https://cdn-icons-png.flaticon.com/512/5709/5709608.png" alt='percentage' className='profit-image' />
            <div className='card-content-right'>
            <p>Order</p>
              <h1>$21k</h1> 
             <div className='profits'>
              <span><img src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/28-512.png' alt='profit' width='15px' height='15px'/>21%</span>
              <p>this months</p>
             </div>
            </div>
           </div>
           <div className='cards card-2'>
            <img src="https://th.bing.com/th/id/R.49fdb719aea584f097d016ea9ed55cb7?rik=pDK0qIuVMs%2bFsQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f3%2fGreen-Dollar-Symbol-Transparent-PNG.png&ehk=Gw4KkpXS7yZdJKXXDtEpQHudVJDqtT1SfF74HovVU%2bM%3d&risl=&pid=ImgRaw&r=0" alt='percentage' className='profit-image-1' />
            <div className='card-content-right'>
              <p>Earning</p>
              <h1>$11k</h1> 
             <div className='profits'>
              <span style={{color:'green'}}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Eo_circle_green_arrow-up.svg/2048px-Eo_circle_green_arrow-up.svg.png' alt='profit' width='15px' height='15px'/>15%</span>
              <p>this months</p>
             </div>
            </div>
           </div>
           <div className='cards card-3'>
            <img src="https://cdn-icons-png.flaticon.com/512/9622/9622255.png" alt='percentage' className='profit-image-2' />
            <div className='card-content-right'>
              <p>Balance</p>
              <h1>$50k</h1> 
             <div className='profits'>
              <span><img src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/28-512.png' alt='profit' width='15px' height='15px'/>0.8%</span>
              <p>this months</p>
             </div>
            </div>
           </div>
           <div className='cards card-4'>
            <img src="https://cdn-icons-png.flaticon.com/512/5801/5801879.png" alt='percentage' className='profit-image-3' />
            <div className='card-content-right'>
              <p>Total sales</p>
              <h1>$81k</h1> 
             <div className='profits'>
              <span><img src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/28-512.png' alt='profit' width='15px' height='15px'/>7%</span>
              <p>this months</p>
             </div>
            </div>
           </div>
         </div>
         <div className='main-section-3'>
         <div className='section-3-left'>
          <div className='section-3-left-tp'>
          <div className='tp-left'>
          <h3>Overview</h3>
          <p>Monthly Earning</p>
          </div>
          <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Quantity</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
        sx={{backgroundColor:'#ebebeb96',color:'#000000'}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
          </div>
          </div>
          <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" tickLine={false} axisLine={false}/>
          <Tooltip />
          <Bar dataKey="price" radius={8} onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell cursor="pointer" fill={index === activeIndex ? 'rgb(41 29 227 / 66%)' : '#e1b7ff38'} key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
          </div>
         </div>
         <div className='section-3-right'>
          <h3>Cutomer</h3>
          <p>Customer that buy the products</p>
          <div id="chart"></div>
         </div>
         </div>
         <div className='main-section-4'>
          <div className='section-4'>
           <h3>Product Shell</h3>
           <div className='section-4-right'>
           <div class="group">
         <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        <input placeholder="Search" type="search" class="input" style={{backgroundColor:'#ebebeb96'}}/>
        </div>
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="demo-select-small-label">Last 30 days</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
        sx={{backgroundColor:'#ebebeb96',color:'#000000'}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
           </div>
          </div>
         <CustomTable/>
         </div>
        </div>
    </div>
  )
};


export default Main