const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override')


const IconsSchema = require('./models/appSchema.js');
const Icons = require('./models/applications.js');
app.use(express.static("public"));
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/icons', (req, res) => {
    IconsSchema.find({}).then((iconsFind)=> {
        res.render('index.ejs', 
        {
            icons: iconsFind
    
        });
    })
});

// app.get('/', (req, res)=>{
//     res.send('alive')
// })


// app.get('/iconsseed', (req, res)=>{
//     IconsSchema.create(Icons).then(()=> {
//         res.send(Icons)
//     })
// })

// IconsSchema.findOneAndRemove({name: 'Instagram'}).then((err, IconsRemoved) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(IconsRemoved)
//     }
//   })



app.listen(3000, () => {
    console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/Icons')