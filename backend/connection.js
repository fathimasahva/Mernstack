const mongoose=require("mongoose")


mongoose.connect("mongodb+srv://fathimasahva12:fathimasahva@cluster0.cgzh12b.mongodb.net/kmct?appName=Cluster0")
  .then(() =>
    {

    console.log('Connected!')
})
 .catch((err)=>{
    console.log(err)
 })