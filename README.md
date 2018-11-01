Example of a <ProtectedRoute /> higher order component using React Router.
ProtectedRoute is a component that takes a component and a path and, depending
on the state of user authentication, either returns that component or the React Router Redirect component. Redirection goes to the login component, which is capable of "remembering" the url that caused a redirection (so that the user can return to that url after authentication)
