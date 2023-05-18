 let lastactivitytime =null;
 const posts=[];

 function createpost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 1000);
    })

 }
 function updateuseractivitytime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Lastactivitytime=new Date();
        }, 1000);
    })
 }  
 function deletelastpost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(posts.length>0){
            resolve(posts.pop())
          } else{
            reject(new Error('no post to delete'))
          } 
        }, 1000);
    })
 }
  async function performaction(){
    try{
        const createpost1= await createpost({title:'post 1'});
        console.log('post created:'.createpost1);
        await updateuseractivitytime();
        console.log('last activity timt:',lastactivitytime); 
        
        const createpost2= await createpost({title:'post 2'});
        console.log('post created:'.createpost2);
        await updateuseractivitytime();
        console.log('last activity timt:',lastactivitytime); 

        const deletedpost=await deletelastpost();
        console.log('post deleted:',deletedpost);
        console.log('posts after deletion:',posts)
        
    }catch(Error){
        console.error(error);
    }
  }