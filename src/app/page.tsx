'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomeRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Đang chuyển hướng...</h1>
    </div>
  );
};

export default HomeRedirect;