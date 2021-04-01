export const CookieLoader = (cookies, env) =>  {
  return () => Object.assign(cookies, CookieFactory(env.cookie));
};

function CookieFactory(cookie: string) {
  return  {
    showNav: cookie + '_show_nav',
    theme: cookie + '_theme'
  };
}
