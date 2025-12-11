import Collection from './pages/Collection';
import AddSaying from './pages/AddSaying';
import TokenLaunch from './pages/TokenLaunch';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Collection": Collection,
    "AddSaying": AddSaying,
    "TokenLaunch": TokenLaunch,
}

export const pagesConfig = {
    mainPage: "Collection",
    Pages: PAGES,
    Layout: __Layout,
};