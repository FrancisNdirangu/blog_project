import express from 'express'
import methodOverride from 'method-override'

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

app.use(methodOverride('_method')); 

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
    const blog_id = req.params.id;
    res.locals.blog_index = blog_id;
    res.locals.blogs = blogs;
    // res.send('Welcome to this individual blog');
    res.render('blog_id.ejs');
});



app.get(`/blog/:id/edit`, (req,res) => {
    // res.send('Edit Page');
    const blog_id = req.params.id;
    res.locals.blog_index = blog_id;  
    res.locals.blogs = blogs;


    const postToEdit  = blogs[blog_id];
    res.locals.content = postToEdit;




    res.render('edit_page.ejs'); 
    
});

app.put('/blog/:id',(req,res) => {
    const blog_id = req.params.id;
    
    const updatedContent = req.body.updatedContent;
    blogs[blog_id] = updatedContent;
    console.log(blogs);
    console.log(updatedContent);

    res.redirect('/');

});

app.delete('/blog/:id', (req,res) => {
    const blog_id = req.params.id;
    // console.log(blog_id)
    console.log(blogs.length);
    blogs.splice(blog_id,1);
    console.log(blogs.length);
    res.redirect('/');
})


app.listen(port, () => {
    console.log(`Port listening on ${port}`); 
});