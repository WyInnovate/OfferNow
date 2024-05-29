'use client'

import { useEffect } from 'react';
import Artalk from 'artalk';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { mylog } from '@/lib/utils';

const ArtalkComment = () => {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  // useEffect(
  //   artalk.setDarkMode(true)
  // ,[])

  mylog(pathname)
  useEffect(() => {
    // artalk.setDarkMode(theme === 'dark')
    Artalk.init({
      el: '#Comments',
      pageKey: "",
      pageTitle: "",
      server: 'https://artalk.aistar.cool',
      site: 'OfferNow',
      versionCheck: true,
      useBackendConf: true,
      darkMode: theme === 'dark',
    });
  }, [theme]);

  return <div id="Comments"></div>;
}

export default ArtalkComment;