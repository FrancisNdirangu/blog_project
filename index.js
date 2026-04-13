import express from 'express'

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

//empty list we will store our blogs into
var blogs = [];

app.get('/', (req,res)=> {
    res.render('index.ejs');
})

// endpoint for creating new blogs
app.post('/create/new', (req,res) => {

    const blog_entry = req.body.blog_input;
    console.log(`input received: ${blog_entry}`);
    blogs.push(blog_entry);
    console.log(`blogs looks like this: ${blogs}`);
    // res.send(`Thanks for sending ${blog_entry}`);
    res.render('index.ejs');

});

app.get('/view_blogs', (req,res)=> {

    // blogs.forEach( (content,index) => {
        // res.locals[`content_${index}`] = content;
    // })
    res.locals.blogs_content = blogs

    res.render('view_blogs.ejs');
});

app.get('/blog/:id', (req,res)=> {
    res.send('Welcome to this individual blog')
})

app.listen(port, () => {
    console.log(`Port listening on ${port}`); 
});