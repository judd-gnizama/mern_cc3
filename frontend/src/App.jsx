import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddEvent,
  AddGroup,
  AllEvents,
  AllGroups,
  DashboardFeed,
  DashboardLayout,
  EditEvent,
  EditGroup,
  Error,
  EventAdmin,
  EventLayout,
  EventQueue,
  EventStats,
  GroupInfo,
  GroupLayout,
  HomeLayout,
  Landing,
  Login,
  Register,
  UserProfile,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/", // homepage
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            index: true,
            element: <DashboardFeed />,
          },
          {
            path: "add-group",
            element: <AddGroup />,
          },
          {
            path: "all-groups",
            element: <AllGroups />,
          },
          {
            path: "g/:id",
            element: <GroupLayout />,
            children: [
              {
                path: "edit",
                element: <EditGroup />,
              },
              {
                path: "delete-group",
              },
              {
                path: "info",
                element: <GroupInfo />,
              },
              {
                index: true,
                element: <AllEvents />,
              },
              {
                path: "add-event",
                element: <AddEvent />,
              },
              {
                path: "e/:id",
                element: <EventLayout />,
                children: [
                  {
                    path: "edit",
                    element: <EditEvent />,
                  },
                  {
                    path: "delete-event",
                  },
                  {
                    index: true,
                    element: <EventQueue />,
                  },
                  {
                    path: "stats",
                    element: <EventStats />,
                  },
                  {
                    path: "admin",
                    element: <EventAdmin />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
