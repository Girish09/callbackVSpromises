//callback hell

/*
const getDataCallback = (num, callback) => {
    setTimeout(() => {
      if (typeof num === 'number'){
        callback(undefined, num*2);
      } else {
        callback('Number must be provided')
      }
    }, 2000);
  }
  
  
  getDataCallback(2, ((err, data) => {
    if (err){
      console.log(err);
    } else {
      console.log(data); //value at this time is 4
      getDataCallback(data, (err, data) => {
        if (err){
          console.log(err);
        } else {
          console.log(data);
        }
      })
    }
  }));

  */
  
  //_____________ Through promise (promise chaining)

const getDataPromise = ((num) => {
  return new Promise((resolve, reject)=>{
      setTimeout(() => {
        typeof num === 'number' ? resolve(num*2) : reject('Number must be provided');
      }, 2000);
  })
});

getDataPromise('2').then((data) => {
  console.log(data);        //accessing value that has become 4
  return getDataPromise(data).then((data) => {
    console.log(data);   // accessing the value that has become 8 
    return getDataPromise(data).then((data) => {
      console.log(data);    //accessing the value that has become 16
    })
  })
}).catch((err) => {
    console.log(err);
});



