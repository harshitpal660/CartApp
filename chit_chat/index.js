export * from './constants';

export const setItemLocalStorage = (key,value) => {
  if (!key || !value) {
    return console.log('Can not store in Local Storage');
  }
  const valueToStore =
    typeof value !== 'string' ? JSON.stringify(value) : value;

  localStorage.setItem(key, valueToStore);
};

export const getItemFromLocalStorage = (key) => {
    if (!key) {
      return console.log('Can not get the value from Local Storage');
    }

    return localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (key) => {
    if (!key) {
      return console.log('Can not remove the calue from Local Storage');
    }

    localStorage.removeItem(key);
};
export const getFormBody = (params) => {
  let formBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);

    formBody.push(encodedKey + '=' + encodedValue);
  }
  console.log(formBody.join('&'))
  return formBody.join('&');
};
