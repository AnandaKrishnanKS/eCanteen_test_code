import axios from 'axios';

const getData=()=>{
    axios.get('https://api.denzo.io/api/cus/v1/products?page=1').then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}

export default getData;