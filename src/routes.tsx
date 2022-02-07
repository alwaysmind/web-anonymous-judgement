import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import CreatePostPage from './pages/CreatePostPage';
import QuestionsPage from './pages/QuestionsPage';
import MyAccountPage from './pages/MyAccountPage';
import FriendsPage from './pages/FriendsPage';

const routes = [
    {
        path: '/login',
        title: 'Login',
        component: <LoginPage />,
        isPrivate: false
    },
    {
        path: '/register',
        title: 'Register',
        component: <RegisterPage />,
        isPrivate: false
    },
    {
        path: '/',
        title: "Home",
        component: <HomePage />,
        isPrivate: true,
    },
    {
        path: '/friends',
        title: "Friends",
        component: <FriendsPage />,
        isPrivate: true,
    },
    {
        path: '/my-account',
        title: "My Account",
        component: <MyAccountPage />,
        isPrivate: true,
    },
    {
        path: '/create-post',
        title: "Create Post",
        component: <CreatePostPage />,
        isPrivate: true,
    },
    {
        path: '/question-list',
        title: "Question List",
        component: <QuestionsPage />,
        isPrivate: true,
    },
    {
        path: '/settings',
        title: "Settings",
        component: <MyAccountPage />,
        isPrivate: true,
    }
]

export default routes