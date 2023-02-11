let defultCity = '北京';
try {
  if (localStorage.getItem('city')) {
    defultCity = localStorage.getItem('city');
  }
} catch (error) { }

export default {
  city: defultCity
}
