import { Link } from 'react-router-dom';
import { Box, Collapse, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography, colors } from '@mui/material';
import { ExpandLess, ExpandMore, Login } from '@mui/icons-material';
import { useState } from 'react';
import Animate from "./Animate";
import {images} from '../../assets'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import { AccountBalanceWalletOutlined, AssignmentReturnOutlined, Inventory2Outlined, TimelineOutlined, TrackChangesOutlined } from '@mui/icons-material';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import { AccountBalanceOutlined, AttachMoneyOutlined, BeachAccessOutlined, BusinessOutlined, CreditCardOutlined, DescriptionOutlined, EqualizerOutlined, Event, EventBusyOutlined, Inventory, KitchenOutlined, LocalAtmOutlined, LocalGroceryStore, LocalShippingOutlined, MonetizationOnOutlined, MoneyOffCsredOutlined, PeopleAltOutlined, ReceiptOutlined, ShoppingCartOutlined, TrendingUpOutlined } from '@mui/icons-material';

const menus = [
  {
    title: "Inbox",
    icon: <MailOutlinedIcon />,
    state: "inbox",
    route : '/emails'
  },
  {
    title: "DashBoard",
    icon: <DashboardCustomizeOutlinedIcon />,
    state: "overview",
    route: '/dashboard'
  },
  {
    title: "Logout",
    icon: <Login />,
    state: "notification",
    route: '/'
  }
];

const serviceMenus = [
  {
    title: "Room Occupancy",
    icon: <OtherHousesOutlinedIcon />,
    state: "mortage",
    route : '/occupancy'
  },
  {
    title: "Point Of Sale",
    icon: <LocalGroceryStore/>,
    state: "pointofsale",
    route: '/table'
  },
  {
    title: "Banqueting",
    icon: <Event/>,
    state: "banqueting",
    route: '/banqueting'
  },
  {
    title: "Room Heat Map",
    icon: <TimelineOutlined/>,
    state: 'roomheatmap',
    route: '/heatmap'
  }
];

const formMenu = [
  {
    title: 'Requisition Form',
    icon: <DescriptionOutlined />,
    state: 'requisitionform',
    route: '/requisitionform'
  },
  {
    title: 'Issuing Form',
    icon: <AssignmentReturnOutlined />,
    state: 'issuingform',
    route: '/issuing'
  },
  {
    title: 'Requisition Tracker',
    icon: <TrackChangesOutlined/>,
    state: 'requisitiontracker',
    route: '/requisitiontable'
  },
  {
    title: 'Inventory Form',
    icon: <Inventory2Outlined/>,
    state: 'inventoryform',
    route: '/inventoryform'
  },
  {
    title: 'Asset Form',
    icon: <AccountBalanceWalletOutlined />,
    state: 'assetform',
    route: '/assetform'
  }
]

const foodproductionMenus = [
  {
    title: 'Chefs Ladder',
    icon: <KitchenOutlined/>,
    state: 'chefsladder',
    route: '/chefs_ladder'
  }
]

const generalManagerMenus = [
  {
    title: 'Staff',
    icon: <PeopleAltOutlined/>,
    state: 'staff',
    route: '/staff'
  },
  {
    title: 'Staff Off Calendar',
    icon: <BeachAccessOutlined/>,
    state: 'staffoff',
    route: '/off'
  },
  {
    title: 'Staff Off Table',
    icon: <EventBusyOutlined/>,
    state: 'staffofftable',
    route: '/offtable'
  }
]

const procurementMenus = [
  {
    title: 'Suppliers',
    icon: <LocalShippingOutlined/>,
    state: 'suppliers',
    route: '/suppliers'
  },
  {
    title: 'Creditors',
    icon: <BusinessOutlined/>,
    state: 'creditors',
    route: '/creditors'
  },
  {
    title: 'Inventory',
    icon: <Inventory/>,
    state: 'inventory',
    route: '/inventory'
  },
  {
    title: 'Assets',
    icon: <LocalAtmOutlined/>,
    state: 'assets',
    route: '/assets'
  },
  {
    title: 'Received',
    icon: <ReceiptOutlined/>,
    state: 'received',
    route: '/received'
  },
  {
    title: 'LPO',
    icon: <DescriptionOutlined/>,
    state: 'lpo',
    route: '/lpo'
  }
]

const investmentMenus = [
  {
    title: "Expense",
    icon: <MonetizationOnOutlined />,
    state: "stocktrade",
    route: '/expense'
  },
  {
    title: "General Ledger",
    icon: <DescriptionOutlined />,
    state: "financeadvice",
    route: '/general'
  },
  {
    title: "Payroll",
    icon: <AttachMoneyOutlined />,
    state: "savingaccount",
    route: '/payroll'
  },
  {
    title: 'Credit',
    icon: <CreditCardOutlined/>,
    state: 'creditaccount',
    route: '/credit'
  },
  {
    title: 'Trial Balance',
    icon: <AccountBalanceOutlined/>,
    state: 'trialbalance',
    route: '/trialbalance'
  },
  {
    title: 'Consolidated Purchases',
    icon: <ShoppingCartOutlined />,
    state: 'consolidatedpurchases',
    route: '/purchases'
  },
  {
    title: 'Debit',
    icon: <MoneyOffCsredOutlined/>,
    state: 'debit',
    route: '/debit'
  },
  {
    title: 'Profit & Loss',
    icon: <TrendingUpOutlined/>,
    state: 'profit&loss',
    route: '/profitloss'
  },
  {
    title: 'Balance Sheet',
    icon: <EqualizerOutlined/>,
    state: 'balancesheet',
    route: '/balancesheet'
  },
  {
    title: 'Cash Flow',
    icon: <AttachMoneyOutlined />,
    state: 'cashflow',
    route: '/cashflow'
  }
];

const Sidebar = ({ sidebarWidth }) => {
  const activeState = "overview";

  const [openPages, setOpenPages] = useState(false);
  const [openProcurement, setOpenProcurement] = useState(false);
  const [openForms, setOpenForms] = useState(false);
  const [openFoodProduction, setOpenFoodProduction] = useState(false);
  const [openGeneralManager, setOpenGeneralManager] = useState(false);
  const [openInvestment, setOpenInvestment] = useState(false);

  const handleClickPages = () => {
    setOpenPages(!openPages);
  };

  const handleClickProcurement = () => {
    setOpenProcurement(!openProcurement);
  };

  const handleClickForms = () => {
    setOpenForms(!openForms);
  };

  const handleClickFoodProduction = () => {
    setOpenFoodProduction(!openFoodProduction);
  };

  const handleClickGeneralManager = () => {
    setOpenGeneralManager(!openGeneralManager);
  };

  const handleClickInvestment = () => {
    setOpenInvestment(!openInvestment);
  };

  const MenuItem = (props) => {
    return (
      <ListItem key={props.index} disableGutters disablePadding sx={{ py: 0.5 }}>
        <ListItemButton
          component={Link} 
          to={props.item.route || '/'} 
          sx={{
            borderRadius: "10px",
            bgcolor: props.isActive ? colors.green[600] : "",
            color: props.isActive ? colors.common.white : "",
            "&:hover": {
              bgcolor: props.isActive ? colors.green[600] : "",
              color: props.isActive ? colors.common.white : "",
            }
          }}
        >
          <ListItemIcon sx={{
            minWidth: "40px",
            color: props.isActive ? colors.common.white : ""
          }}>
            {props.item.icon}
          </ListItemIcon>
          <ListItemText primary={
            <Typography fontWeight={600}>
              {props.item.title}
            </Typography>
          } />
        </ListItemButton>
      </ListItem>
    );
  };

  const drawer = (
    <Box
      padding={3}
      paddingBottom={0}
      display="flex"
      flexDirection="column"
      height="100vh" // Setting a specific height for sidebar
      overflowY="auto" // Making sidebar scrollable
      sx={{
        "::-webkit-scrollbar": {
          width: "5px", // Thin scrollbar
        },
        "::-webkit-scrollbar-thumb": {
          background: colors.grey[500], // Scrollbar thumb color
          borderRadius: "5px",
        },
      }}
    >
      
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Animate type="fade" delay={1}>
          <img src={images.logo} alt="logo" height={60} />
        </Animate>
      </Box>
     
      <Animate sx={{ flexGrow: 1 }}>
        <Paper
          elevation={0}
          square
          sx={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            p: 2,
            height: "100%",
            boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px"
          }}
        >
          <List>
            {menus.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={item.state === activeState}
              />
            ))}
          </List>

          <ListItemButton onClick={handleClickPages}>
            <ListItemText primary={<Typography fontWeight={600} color={colors.grey[600]}>Pages</Typography>} />
            {openPages ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openPages} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {serviceMenus.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  isActive={item.state === activeState}
                />
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickProcurement}>
            <ListItemText primary={<Typography fontWeight={600} color={colors.grey[600]}>Procurement</Typography>} />
            {openProcurement ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openProcurement} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {procurementMenus.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  isActive={item.state === activeState}
                />
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickForms}>
            <ListItemText primary={<Typography fontWeight={600} color={colors.grey[600]}>Forms</Typography>} />
            {openForms ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openForms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {formMenu.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  isActive={item.state === activeState}
                />
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickFoodProduction}>
            <ListItemText primary={<Typography fontWeight={600} color={colors.grey[600]}>Food Production</Typography>} />
            {openFoodProduction ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openFoodProduction} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {foodproductionMenus.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  isActive={item.state === activeState}
                />
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickGeneralManager}>
            <ListItemText primary={<Typography fontWeight={600} color={colors.grey[600]}>General Manager</Typography>} />
            {openGeneralManager ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openGeneralManager} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {generalManagerMenus.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  isActive={item.state === activeState}
                />
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickInvestment}>
            <ListItemText primary={<Typography fontWeight={600} color={colors.grey[600]}>Accounts</Typography>} />
            {openInvestment ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openInvestment} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {investmentMenus.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  isActive={item.state === activeState}
                />
              ))}
            </List>
          </Collapse>
        </Paper>
      </Animate>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { md: sidebarWidth },
        flexShrink: { md: 0 }
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
            borderWidth: 0,
            bgcolor: "transparent",
            "::-webkit-scrollbar": {
              display: "none"
            }
          }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
