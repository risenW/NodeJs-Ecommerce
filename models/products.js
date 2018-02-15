module.exports = function Product(id,imagePath,title,description,price ){
    this.imagePath = imagePath;
    this.title = title;
    this.description = description;
    this.price = price;
    this.id = id;
    
    this.generateObject = function(){
        var  productObject = {
            "imagePath":imagePath,
            "title":title,
            "description":description,
            "price":price,
            "id":id
        }
        return productObject;
    }

    

}