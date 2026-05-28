import {useNavigate, useSearchParams} from "react-router";
import {useEffect} from "react";
import {useAuthData} from "../global/auth/useAuthData.ts";

function LoginPage(){
  const [searchParams, setSearchParams] = useSearchParams();
  const { setAuthData } = useAuthData();
  const nav = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');
    if(code !== null) {
      fetch(`${import.meta.env.VITE_BACKEND_API_URL}/auth/code`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code,
          'redirect_url': import.meta.env.VITE_REDIRECT_URL
        })
      }).then(res => res.json()).then(data => {
        setAuthData(data);
      }).finally(() => {
        setSearchParams({}, {replace: true});
        nav('/');
      });
    } else {
      setSearchParams({}, {replace: true});
      nav('/');
    }
  }, [nav, searchParams, setAuthData, setSearchParams]);

  return <></>;
}

export default LoginPage;