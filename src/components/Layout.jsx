import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;