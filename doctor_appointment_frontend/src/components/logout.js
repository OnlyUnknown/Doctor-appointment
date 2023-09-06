import React from 'react';
import { useUser } from './UserContext';

function Logout() {
  const { currentUser } = useUser();
  return (
    <div className="w-full flex justify-center pt-32">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-blue-500">{currentUser.name}</h1>
        <p className="text-black">{currentUser.email}</p>
        <button onClick={() => sessionStorage.removeItem('currentUser')} type='submit'
        className="text-red border border-1 border-red-600 p-2">Logout</button>
      </div>
    </div>
  )
}

export default Logout