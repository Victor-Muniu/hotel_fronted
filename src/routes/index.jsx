import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../components/layout/MainLayout";
import DashboardPage from "../pages/DashboardPage";
import Email from "../pages/Email";
import RoomOccupancy from "../pages/RoomOccupancy";
import Expense from "../pages/Expense";
import General_ledger from "../pages/General_ledger";
import Payroll from "../pages/Payroll";
import Credit from "../pages/Credit";
import TrialBalance from "../pages/TrialBalance";
import Purchases from "../pages/Purchases";
import Debit from "../pages/Debit";
import ProfitLoss from "../pages/ProfitLoss";
import BalanceSheet from "../components/common/BalanceSheet";
import Supplier from "../pages/Supplier";
import Creditors from "../pages/Creditors";
import Inventory from "../pages/Inventory";
import Assets from "../pages/Assets";
import Received from "../pages/Received";
import Lpo from "../pages/Lpo";
import ChefsLadder from "../pages/ChefsLadder";
import Staff from "../pages/Staff";
import Off from "../pages/Off";
import OffTable from "../pages/OffTable";
import Table from "../pages/Table";
import POS from "../pages/POS";
import Banqueting from "../components/common/Banqueting";
import RoomHeatMap from "../pages/RoomHeatMap";
import RequisitionForm from "../form/RequisitionForm";
import IssuingTable from "../components/table/IssuingTable";
import RequisitionTable from "../components/table/RequisitionTable";
import InventoryForm from "../form/InventoryForm";
import AssetForm from "../form/AssetForm";

const checkAuth = (path) => {
  const isAuthenticated = localStorage.getItem("token");
  const isProtectedRoute = path === '/dashboard' || path === '/emails';
  
  if (isProtectedRoute && !isAuthenticated) {
    return '/';
  }

  return null;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      }
    ]
  },
  {
    path: '/emails',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element :<Email />
      }
    ]
  },
  {
    path:'/occupancy',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <RoomOccupancy />
      }
    ]
  },
  {
    path: '/expense',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Expense />
      }
    ]
  },
  {
    path: '/general',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <General_ledger/>
      }
    ]
  },
  {
    path: '/payroll',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Payroll />
      }
    ]
  },

  {
    path: '/credit',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Credit />
      }
    ]
  },
  {
    path: '/trialbalance',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TrialBalance />
      }
    ]
  },
  {
    path: '/purchases',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Purchases />
      }
    ]
  },
  {
    path: '/debit',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Debit />
      }
    ]
  },
  {
    path: '/profitloss',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProfitLoss />
      }
    ]
  },
  {
    path: '/balancesheet',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <BalanceSheet />
      }
    ]
  },
  {
    path: '/suppliers',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Supplier />
      }
    ]
  },
  {
    path: '/creditors',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Creditors />
      }
    ]
  },
  {
    path: '/inventory',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Inventory />
      }
    ]
  },
  {
    path: '/assets',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Assets />
      }
    ]
  },
  {
    path: '/received',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Received />
      }
    ]
  },
  {
    path: '/lpo',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Lpo />
      }
    ]
  },
  {
    path: '/chefs_ladder',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ChefsLadder />
      }
    ]
  },
  {
    path: '/staff',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Staff />
      }
    ]
  },
  {
    path: '/off',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Off />
      }
    ]
  },
  {
    path: '/offtable',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <OffTable />
      }
    ]
  },
  {
    path: '/table',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Table />
      }
    ]
  },
  {
    path: '/pos',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <POS />
      }
    ]
  },
  {
    path: '/banqueting',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Banqueting />
      }
    ]
  },
  {
    path: '/heatmap',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <RoomHeatMap />
      }
    ]
  },
  {
    path: '/requisitionform',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <RequisitionForm />
      }
    ]
  },
  {
    path: '/issuing',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <IssuingTable />
      }
    ]
  },
  {
    path: '/requisitiontable',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <RequisitionTable />
      }
    ]
  },
  {
    path: '/inventoryform',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <InventoryForm />
      }
    ]
  },
  {
    path: '/assetform',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AssetForm />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to={checkAuth()} replace />
  }
]);