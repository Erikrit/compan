import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Url } from 'url';


export default function SubscriptionRouter() {
  const router = useRouter();


  useEffect(() => {
    const { pathname } = router;

    router.push({
      pathname: '/home',
      query: router.query
    });
  }, [router]);

  return null;
};
