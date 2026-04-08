import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Topbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold">My App</h1>
      <button onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default Topbar;