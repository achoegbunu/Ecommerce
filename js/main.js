// product constructor
function shirt (name, size, color, stock, image) {
	this.name = name
	this.size = size
	this.color = color
	this.stock = stock
	this.image = image
}
// create new products from the constructor
var purpletee = new shirt("Purple Tee", "Small", "Purple", "100", "https://5.imimg.com/data5/AP/NC/MY-10849658/purple-round-neck-t-shirt-500x500.jpg");
var greytee = new shirt("Grey Tee", "Medium", "Gold", "80", "https://www.designerwear.co.uk/images/sunspel-two-fold-60s-grey-t-shirt-p6097-9496_image.jpg");
var orangetee = new shirt("Orange Tee", "Large", "Orange", "60", "https://www.mdtextile.com/images/stories/virtuemart/product/foursquare-cotton-tshirt-orange.jpg");
var greentee = new shirt("Green Tee", "XL", "Green", "40", "https://www.kidswholesaleclothing.co.uk/4131-large_default/baby-blanks-short-sleeve-tshirt-emerald.jpg");
var yellowtee = new shirt("Yellow Tee", "XXL", "Yellow", "20", "https://i.ebayimg.com/images/g/-3oAAOSwrhBZCvrX/s-l300.jpg");
var bronzetee = new shirt("Bronze Tee", "XXXL", "Bronze", "30", "https://cdn.shopify.com/s/files/1/0097/5692/products/2000_RustyBronze_Flat_Front_032712_700x700.jpg?v=1437510432");
console.log(purpletee, greytee, orangetee, greentee, yellowtee, bronzetee);
// create an array to add products
var shirtArray = [purpletee, greytee, orangetee, greentee, yellowtee, bronzetee];
// loop through the array of the objects
for (var i = 0; i < shirtArray.length; i++) {
	// create new elements for each product
	var newItem = document.createElement("div");
	var newDiv = document.createElement("div");
	var nameH1 = document.createElement("h1");
	var sizeH4 = document.createElement("h4");
	var colorH4 = document.createElement("h4");
	var stockH4 = document.createElement("h4");
	var btn = document.createElement("button");
	var image = document.createElement("img");
	// console.log(newItem, newDiv, nameH1, sizeH4, colorH4, stockH4, btn, image);
	// create individual text nodes
	nameH1Text = document.createTextNode(shirtArray[i].name);
	sizeH4Text = document.createTextNode("Available Size: " + shirtArray[i].size);
	colorH4Text = document.createTextNode("Color: " + shirtArray[i].color);
	stockH4Text = document.createTextNode("In Stock: " +shirtArray[i].stock);
	btnText = document.createTextNode("Buy Now!");
	// update source attribute
	image.src = shirtArray[i].image;
	image.alt = shirtArray[i].name + "" + shirtArray[i].size;
	// update class attribute
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + [i] + " thumbnail"
	// add text to the elements
	nameH1.appendChild(nameH1Text);
	sizeH4.appendChild(sizeH4Text);
	stockH4.appendChild(stockH4Text);
	btn.appendChild(btnText);
	// add elements to new Div
	newDiv.appendChild(nameH1);
	newDiv.appendChild(sizeH4);
	newDiv.appendChild(colorH4);
	newDiv.appendChild(stockH4);
	newDiv.appendChild(btn);
	newDiv.appendChild(image);
	// add new div to new item
	newItem.appendChild(newDiv);
	// add new item to element with id = display
	document.getElementById("display").appendChild(newItem)



}