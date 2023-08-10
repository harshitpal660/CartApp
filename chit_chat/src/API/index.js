import { API_URLS, LOCALSTORAGE_TOKEN_KEY,getFormBody } from '../Utils';

const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  // console.log(token)
  
  const headers = {
    // 'content-type': 'application/json',
    // Accept : 'application/json'
    'content-type': 'application/x-www-form-urlencoded',
    // Accept : 'application/x-www-form-urlencoded'
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
 
  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  // console.log(config);

  if (body) {
      // config.body = JSON.stringify(body);
    config.body = getFormBody(body);
    console.log(config);
  }
 
  try {
    console.log("url "+url)
    const response = await fetch(url,config);
    const data = await response.json();
    console.log(response);
    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }
 
    throw new Error(data.message);
  } catch (error) {
    console.log(error);
    return {
      message: error.message,
      success: false,
    };
  }
};
 
export const getPosts = (page = 1, limit = 10) => {
  return customFetch(API_URLS.posts(page, limit), {
    method: 'GET',
    // mode: 'no-cors',
  });
};
 
export const login = (email,password)=>{
  return customFetch(API_URLS.login(),{
    method :'POST',
    body: {email,password}
  })
}

export const signup = (name,email,password,confirmPassword)=>{
  return customFetch(API_URLS.signup(),{
    method :'POST',
    body: {name,email,password,confirm_password: confirmPassword}
  })
}
 