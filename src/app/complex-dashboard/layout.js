import Login from "./@login/page";

export default function DashboardLayout({
  children,
  user,
  revenue,
  notification,
  login,
}) {
  const isLoggedin = false;
  return isLoggedin ? (
    <>
      {/* <div>{children}</div> */}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{user}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}> {notification}</div>
      </div>
    </>
  ):(
    <Login/>
  );
}
