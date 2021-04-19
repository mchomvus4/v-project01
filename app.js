const app = Vue.createApp({
 template:'',
 data(){
  return{
   firstName:'Samwel',
   lastName:'Mchomvu',
   email:'samwelnm4@gmail.com',
   gender:'male',
   picture:'https://randomuser.me/portraits/men/11.jpg'
  }
 },
 methods:{
 async getUser(){
  const res = await fetch('https://randomuser.me/api')
  const {results} = await res.json()
 

   this.firstName= results[0].name.first
   this.lastName= results[0].name.last
   this.email=results[0].email
   this.gender= results[0].gender
   this.picture=results[0].picture.thumbnail
  }
 }
})

app.mount('#app')