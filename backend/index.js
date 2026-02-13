const express=require("express")
require("./connection")
var stuModel=require("./model/student")

//initialize

const app=express()

app.use(express.json())
//api creation

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/sample', (req, res) => {
  res.send("FATHIMA SAHVA!!!")
})
//add
app.post('/add',async(req,res)=>{
    await stuModel(req.body).save()
    res.send("data added")
})
//view
app.get('/view', async(req, res) => {
    const data =await stuModel.find()
            res.send(data)
        })

//delete
app.delete('/delete/:id', async (req, res) => {
        await stuModel.findByIdAndDelete(req.params.id)
            res.send("data deleted")

});

app.put('/update/:id', async (req, res) => {
        await stuModel.findByIdAndUpdate(req.params.id,req.body)
            res.send("updated succeffully")

});

//port setting
app.listen(3004, () => {
  console.log('Server is running on http://localhost:3004')
})