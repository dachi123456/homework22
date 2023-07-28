import Header from "../components/header";
import CreatePage from "../pages/createPage";
import EditPage from "../pages/editPage";
import MainPage from "../pages/mainPage";

const router = [
    {
        element: <Header />,
        path: '/',
        children: [
            {
                element:  <MainPage />,
                index: true
            },
            {
                element: <CreatePage />,
                path: 'create'
            },
            {
                element: <EditPage />,
                path: 'edit/:taskId'
            }
        ]
        
    }
]



export default router