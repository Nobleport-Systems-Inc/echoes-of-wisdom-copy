import AddSaying from './pages/AddSaying';
import Collection from './pages/Collection';
import Home from './pages/Home';
import TokenLaunch from './pages/TokenLaunch';
import Payment from './pages/Payment';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AddSaying": AddSaying,
    "Collection": Collection,
    "Home": Home,
    "TokenLaunch": TokenLaunch,
    "Payment": Payment,
}

export const pagesConfig = {
    mainPage: "Collection",
    Pages: PAGES,
    Layout: __Layout,
};