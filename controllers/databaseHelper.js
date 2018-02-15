

var firebase = require("firebase");
var Proucts = require('../models/products');
var promise = require('Promise');

// Get a reference to the database service
var database = firebase.database();
var storage = firebase.storage;



module.exports = function databaseHelper(){
    
    this.printMessage = function(message){
        console.log(message + "received");
    };

    //Gets saved data from the firebase server
    this.getProductFromDatabase = function(){
        //Exports a promise 
        return new Promise(function(resolve,reject){ 
        //Getting a reference to the database path
        var produtRef = firebase.database().ref('products/');
        var productArray = [];
        var chunkArray = [];
       //Getting saved data from newest to oldest.
        produtRef.orderByChild('id').on('value',function(snapshot){
            snapshot.forEach(function(childSnapshot){
                var childData = childSnapshot.val();            // var childKey = childSnapshot.key;
                productArray.push(childData);
                
            });
            console.log(productArray.length);
            console.log("starting product chunking process");
            //product chunks
            var chunksize = 1;
            for(var i = 0; i < productArray.length; i += chunksize){
                chunkArray.push(productArray.slice(i, i + chunksize));
            }
            console.log("chunkArray size is " + chunkArray.length);
            resolve(chunkArray);
            
        });
        });
         
      }

      //Method to save to the database
      //Takes a Product object
      this.saveProductToDataBase = function(product){
          //uploads the image to the firebase storage
          //If successfully upload, sets the imageUrl to the database Url
          //then uploads the details to the database
          
          

        
          firebase.database().ref('products/').push({
            title: product.title,
            imagePath: product.imagePath,
            price : product.price,
            description: product.description,
            id: product.id
        
          });
          
          console.log("Saved Successfully");
      }

      this.findUserById = function(id){
          return new Promise(function(resolve,reject){

            var produtRef = firebase.database().ref('users/');
          })
      }
};

