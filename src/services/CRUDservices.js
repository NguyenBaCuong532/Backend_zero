const database = require("../config/database")


const  getAlluser=async()=>{
  const [results, fields] = await database.query(`select * from user `);
  return results;


}


const  getUserId=async(list)=>{
 
  const [results, fields] = await database.query(`select * from user where Id=${list} `);
  let user =results&& results.length>0 ? results[0]:{}
 console.log("check results:",user);

  return user;


}
const  patchUserId=async(fname,lname,id)=>{
 
  const [results, fields] = await database.query(
    `update user set firstname ='${fname}', lastname='${lname}' where Id='${id}'`
  );
  let user =results&& results.length>0 ? results[0]:{}
 console.log("check results:",user);

  return user;


}
module.exports= {
  getUserId,getAlluser,patchUserId
}