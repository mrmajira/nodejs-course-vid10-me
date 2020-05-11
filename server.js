const   express =   require("express"),
        hbs     =   require("hbs");

let app = express();

const port=process.env.PORT || 3001;

// uncomment for maintenance
// app.use((req,res,next)=>{
//     res.render("maintenance");
    
// });

app.set("view engine","hbs");

hbs.registerPartials(__dirname+"/views/partials");
app.use(express.static(__dirname+"/public"));
app.use((req,res,next)=>{
    
    next();
});


hbs.registerHelper("getCurrentYear",()=>{
    return new Date().getFullYear();
});


app.get("/",(req,res)=>{
    pageName="Home";
    res.render("home",{pageName});
});
app.get("/projects",(req,res)=>{
    pageName="Projects";
    res.render("projects",{pageName});
});




app.get("/*",(req,res)=>{
    res.send({
        errorMessage:"404 . Page not found"
    });
});
app.listen(port,()=>{
    console.log(`Server listening on port : ${port}`);
    
});