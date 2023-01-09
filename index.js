const express=require(`express`);
const expresslayouts=require(`express-ejs-layouts`); //to use layouts


const app=express();
const port=27017;

app.set(`view engine`,`ejs`);
app.set(`views`,`./views`);  // setting up view engine



app.use(expresslayouts);

app.set(`layout extractStyles`,true); // this will allow layout to automatically put the css files within its head for which this layout is called
app.set(`layout extractScript`,true); // this is for javascript

app.use(`/`,require(`./routes/index.js`));
app.listen(port,(err)=>{

    if(err){
        console.log(`error: ${err}`);
    }

    else{console.log(`server is connected to port:${port}`);}
})