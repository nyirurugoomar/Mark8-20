'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const currentPath = window.location.pathname;
    
    if (currentPath === '/Login') {
      // No redirection needed if we are on the login page
      return;
    }

    // Redirect to login page on initial load
    router.push('/Login');
  }, [router]);

  return <>{children}</>; // Render children for /Login route
};

export default ProtectRoute;
