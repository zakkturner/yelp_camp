var mongoose = require("mongoose")
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment")

var data =[
    {
        name: "Cloud's Rest", 
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "Blah blah"
    },
    {
        name: "Woah Park", 
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Blah blah"
    },
    {
        name: "OMG Lake", 
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "Blah blah"
    }
]

function seedDB(){
    
    //remove all campgrounds
    Campground.remove({}, function (err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
        //add a few campgrounds
        data.forEach(function(seed){
      Campground.create(seed, function (err, campground) {
          if(err){
              console.log(err);
          } else {
              console.log("added camp");
              // add comments
              Comment.create(
                  {
                      text:"this place is great",
                      author: "Homer"
                  }, function(err, comment){
                      if(err){
                          console.log(err);
                      } else {
                       
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment")
                      }
                  })
          }
        }); 
    });
});

    
    
    
}

module.exports = seedDB;