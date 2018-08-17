// product constructor
function shirt(name, size, color, stock, image) {
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
