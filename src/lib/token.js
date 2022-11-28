const getToken = (name) => {
    if (!name) {
      throw new Error('The name parameter is required');
    }
    let token = null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
  
    if (parts.length === 2) {
      token = parts.pop().split(';').shift();
    }
  
    return token;
  };
  
  const saveToken = (name, data) => {
    if (!name) {
      throw new Error('The name parameter is required');
    }
    return (document.cookie = `${name}=${data}; Max-Age=${process.env.REACT_APP_COOKIE_EXPIRATION_IN_SECONDS}; path=/`);
  };
  
  const deleteToken = (name) => {
    console.log("🚀 ~ file: token.js ~ line 24 ~ deleteToken ~ name", name)
    if (!name) {
      throw new Error('The name parameter is required');
    }
    return (document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`);
  };
  
  export { getToken, saveToken, deleteToken };
  