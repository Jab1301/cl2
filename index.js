let express = require('express');
let app = express();

//let CL = {
   // "section 1" : {
        "students" : 8,
        "time": "7:30am EST"
    //},
    "section 2" : {
        "students" : 11,
        "time": "9:30am EST"
  //  },
    "section 3" : {
        "students" : 3,
        "time": "10:30am EST"
   // }
//};

//app.get("/", (req,res) => {
 //   res.send("Hello!")
//})

app.use("/", express.static("public"));

app.get("/api", (req,res) => {
    res.json(CL);
})

app.listen(3000, () => {
    console.log("app is running at localhost:3000");  
})

app.get("/about", (req,res) => {
    res.send("about me!")
})
