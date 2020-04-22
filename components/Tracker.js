import React, { useEffect, useRef } from 'react';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import ym, { YMInitializer } from 'react-yandex-metrika';

const Tracker = () => {
  const initialLoad = useRef(true);
  const router = useRouter();
  useEffect(() => {
    if (initialLoad.current) {
      if (true) {
        ReactGA.initialize('UA-164039703-1');
        ReactGA.pageview(router.asPath);
        ym('hit', router.asPath);
        initialLoad.current = false;
      }
    } else {
      if (true) {
        ReactGA.pageview(router.asPath);
        ym('hit', router.asPath);
      }
    }
  }, [router]);
  return (
    <YMInitializer
      accounts={[62097028]}
      options={{
        webvisor: false,
        trackLinks: true,
        clickmap: true,
        accurateTrackBounce: true,
      }}
      version="2"
    />
  );
};

export default Tracker;
