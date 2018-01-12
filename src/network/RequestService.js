class RequestService {

/**
This function is to call rest api get methods
*/
  async getRequest(url){
    let data = await fetch(url)
      .then(res => {
        return  res.json()
      })
      .catch(err => {
        console.log('Anand it is an error:', err)
      });

    return data;
  }
/*
This function to call rest api post methods
**
*/
async postRequest(url,object){
  let data=await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  })
  .then(
    res=>{
      return res.json();
    }
  )
  .catch(
    err=>{
      console.log("Error in postRequest",err);
    }
  );
  return data;
}


}

export default new RequestService();
