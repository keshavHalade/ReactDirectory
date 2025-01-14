export const data = [
  {
    id: "basic",
    title: "Router Basics",
    path: "router-basics",
    content: `
      This topic covers the fundamental concepts of React Router, such as setting up routes and navigating between pages.
    `,
    example: `
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}`,
  },
  {
    id: "advanced",
    title: "Nested Routes",
    path: "nested-routes",
    content: `
      Learn about nested routes, how they work, and how to manage them efficiently in React applications.
    `,
    example: `
  Example:

      <Route path="/dashboard">
         <Route path="/dashboard/overview" component={Overview} />
         <Route path="/dashboard/settings" component={Settings} />
      </Route>
    `,
  },
  {
    id: "protected",
    title: "Protected Routes",
    path: "protected-routes",
    content: `
      This section explains how to secure routes by using authentication and authorization, and how to handle them with React Router.
    `,
    example: `
  Example:

const isAuthenticated = () => !!localStorage.getItem("authToken");

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Redirect to="/login" />;
};

<ProtectedRoute path="/dashboard">
  <Dashboard />
</ProtectedRoute>
  `,
  },
  {
    id: "lazy",
    title: "Lazy Loading",
    path: "lazy-loading",
    content: `
      Lazy loading is a technique used to load components only when they're needed. This topic covers how to implement lazy loading with React Router.
    `,
    example: `
  Example:
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  );
}`,
  },
  {
    id: "404",
    title: "404 Page Not Found",
    path: "404-page-not-found",
    content: `
      Learn how to handle cases where users navigate to a route that doesn’t exist, and how to display a custom 404 page.
    `,
    example: `
  Example:
        <Route path="*">
           <Redirect to="/404" />
        </Route>
        <Route path="/404" component={NotFound} />`,
  },
  {
    id: "state-management",
    title: "State Management with Router",
    path: "state-management",
    content: `
      Understand how to manage state when using React Router, including query parameters and state persistence.
    `,
    example: `
Example:
      
import { useLocation } from 'react-router-dom';

function PageWithState() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const state = query.get('stateKey');

  return (
    <div>
      <h2>Query State:</h2>
      <p>{state}</p>
    </div>
  );
}
 `,
  },
  {
    id: "redirects",
    title: "Handling Redirects",
    path: "handling-redirects",
    content: `
      This topic explains how to handle redirects in your application using React Router’s redirect functionality.
    `,
    example: `
Example:

<Route path="/login" component={Login} />
<Route path="/dashboard" component={Dashboard} />
<Redirect from="/" to="/login" />`,
  },
  {
    id: "hooks",
    title: "Using Hooks with Router",
    path: "using-hooks-with-router",
    content: `
      Learn how to utilize React Router hooks, like 'useParams', 'useNavigate', and 'useLocation', in your functional components.
    `,
    example: `
Example:

import { useParams, useNavigate } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Profile - {userId}</h2>
      <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
    </div>
  );
}`,
  },
  {
    id: "history",
    title: "Navigate to History",
    path: "history",
    content: `
      Learn how to utilize Navigate history, using 'useNavigate' in your functional components.
    `,
    example: `
Example:

import {useNavigate } from 'react-router-dom';

function UserProfile() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go to Dashboard</button>
    </div>
  );
}`,
  },
];
