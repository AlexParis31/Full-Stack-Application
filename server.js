const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override')



const IconsSchema = require('./models/showsSchema.js');
const Icons = require('./models/shows.js');
app.use(express.static("public"));
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) => {
    IconsSchema.find({}).then(()=> {
        res.render('home.ejs');
    })
});



app.get('/icons/netflix', (req, res) => {
    IconsSchema.find({Network: "Netflix"}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    });
})

app.get('/icons/hbo', (req, res) => {
    IconsSchema.find({Network: "HBO"}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    })
});

app.get('/icons/amc', (req, res) => {
    IconsSchema.find({Network: "AMC"}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    })
});

app.get('/icons/fx', (req, res) => {
    IconsSchema.find({Network: "FX"}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    })
});

app.get('/icons/drama', (req, res) => {
    IconsSchema.find({Genre: "Drama"}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    })
});

app.get('/icons/action', (req, res) => {
    IconsSchema.find({Genre: "Action"}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    })
});

app.get('/icons/comedy', (req, res) => {
    IconsSchema.find({Genre: "Comedy"}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    })
});

app.get('/icons/sci-fi', (req, res) => {
    IconsSchema.find({Genre: "Science-Fiction"}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    })
});


app.get('/icons/ninety', (req, res) => {
    const ninety = Number()
    IconsSchema.find({Rating:{$gt:89}}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    })
});

app.get('/icons/eighty', (req, res) => {
    const ninety = Number()
    IconsSchema.find({Rating:{$gt:79, $lt:89}}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    })
});

app.get('/icons/seventy', (req, res) => {
    const ninety = Number()
    IconsSchema.find({Rating:{$gt:69, $lt:79}}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    })
});



app.get('/icons/fifty', (req, res) => {
    const ninety = Number()
    IconsSchema.find({Rating:{$lt:70}}).then((iconsNetflix)=> {
        res.render('index.ejs', 
        {
            icons: iconsNetflix
    
        });
    })
});



app.get('/icons', (req, res) => {
    IconsSchema.find({}).then((iconsFind)=> {
        res.render('index.ejs', 
        {
            icons: iconsFind
    
        });
    })
});

app.get('/icons/new', (req,res) => {
    res.render('new.ejs')
})



app.post('/icons', (req,res) => {
    IconsSchema.create(req.body).then(() => {
        res.redirect('/icons')
    })
})

app.get('/icons/:id', (req, res) => {
    IconsSchema.findById(req.params.id).then((currentIcon)=> {
        res.render('show.ejs', 
        {
            icons: currentIcon
    
        });
    })
});

app.delete('/icons/:id', (req, res) => {
    //use the id from the url params to find one document in the db by its id and delete it.
    IconsSchema.findByIdAndRemove(req.params.id).then((deletedShow) => {
      //after its deleted redirect to back home
       res.redirect('/icons')
    })
  })

app.get('/icons/:id/edit', (req, res) => {
  IconsSchema.findById(req.params.id).then((editedIcons) => {
    res.render('edit.ejs', {
      icons: editedIcons
    })
  })
})

app.put('/icons/:id', (req, res) => {
  IconsSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(() => {
    res.redirect('/icons')
  })
})

// app.get('/', (req, res)=>{
//     res.send('alive')
// })


// app.get('/iconsseed', (req, res)=>{
//     IconsSchema.create(Icons).then(()=> {
//         res.send(Icons)
//     })
// })

// IconsSchema.findOneAndRemove({_id: '6412529448c76a703830c04d'}).then((err, IconsRemoved) => {
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