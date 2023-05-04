console.log('person1:shows ticket')
console.log('person2:shows ticket')

const premovie=async()=>{
    const promisewifebringingticks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        }, 3000); 
        const getpopcorn=new Promise((resolve, reject) => {
            resolve(`popcorn`)
        })
        const addutter=new Promise((resolve, reject) => {
            resolve(`butter`)
        })
        const getdrinks=new Promise((resolve, reject) => {
            resolve(`colddrink`)
        })
        let ticket= await promisewifebringingticks;
        console.log(`wife:i have ${ticket}`)
    console.log('husband:we should go in')
    console.log('wife:no i am hungry');
    let popcorn =await getpopcorn;
    console.log(`husband:i got some ${popcorn}`)   
    console.log('husband:we should go in')
    console.log('wife:i need butter on my  popcorn ')
    let butter =await getpopcorn;
    console.log(`husband:i got some ${butter}`)
    let drink=await getbutter
    console.log(`husband:anything else darling?`)
    console.log(`lets buy some${drink}`)
    console.log(`husband:i got some ${drink}`)
    console.log(`wife:lets go we r getting late`)
    console.log(`husband:thank u for reminder *grins*`)

        return ticket;   
}
premovie().then((m)=>console.log(m));

console.log('person3:shows ticket')
console.log('person4:shows ticket')