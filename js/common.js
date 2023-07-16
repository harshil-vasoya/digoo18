import data from "./data.js";


var nav_bar = document.getElementsByClassName("navigation-section");
// var footer = document.getElementsByClassName("footer-section");
var footer = document.querySelectorAll(".footer-section");
var product = document.getElementsByClassName("rp_product");

{/* <span>p_id : ${e.product_id}</span> */ }
try {
	var product_section = document.getElementById("rp_product_section");
	var url = product_section.dataset.img_url;
	data.forEach((e) => {
		product_section.innerHTML += `
		<div class="product-card" data-product_id=${e.product_id} data-url=${url}>
			<div class="product-container-product">
			<div class="product-img-div d-flex d-content-center">
				<img src="${url + "/" + e.img_name}" alt="product name " />
			</div>
			<div>
				<p class="product_content m-1">${e.info}</p>
			</div>
			<div>
				<h1 class="m-1">${e.price}</h1>
			</div>
			</div>
		</div>
		`
	})
	var product_card = document.getElementsByClassName("product-card");
	Object.keys(product_card).forEach(key => {
		var element = product_card[key];
		var id = element.dataset.product_id;
		var dataObj;
		data.forEach(e=>{
			if(e.product_id==id){
				dataObj = e;
			}
		})
		
		element.addEventListener("click", () => {

			document.write(`
			<!DOCTYPE html>
			<html lang="en">
			<head>
    			<title>Document</title>
				<link rel="stylesheet" href="css/details.css" />
				<link rel="stylesheet" href="css/bash.css">
				<link rel="stylesheet" href="css/mediaquery.css" />
				<link rel="stylesheet" href="css/common.css" />
			</head>
			<body>
			<a class="back-button" href="product.html">&laquo; Previous</a>

			<section class="navigation-section"></section>

			<!-- product deatils page -->
			<section class="container">
				<div class="single-product" style="margin-top: 100px;">
				  <div class="d-flex d-content-between row details-mobile-view">
					<div class="imgbg d-flex d-content-center " style="text-align:center;">
					 <a href=${element.dataset.url+"/"+dataObj.img_name}>
					 <img src="${element.dataset.url+"/"+dataObj.img_name}" alt="product-image" style="border: 2px solid black;">
					 </a>
					  
					</div>
					<div >
					  <p class="newdrgs">${dataObj.info}</p>
					  <h4>${dataObj.price}</h4>
					  <h3>product Details <span class="fa-solid fa-crown"></span></h3>
					  <p> ${dataObj.dis} </p>
					</div>
				  </div>
				</div>
			  </section>
		
		
		
			<section class="footer-section"></section>
    
			</body>
			</html>
			`);
		});
	})

} catch (e) {
	console.log(e);
}








Object.keys(product).forEach(key => {

	var e = product[key];
	e.innerHTML = `
		<div class="product-container-product">
			<div class="product-img-div d-flex d-content-center">
				<img src="${e.getAttribute("href")}" alt="product name " />
			</div>
			<div>
				<p class="product_content m-1">${e.dataset.product_info}</p>
			</div>
			<div>
				<h1 class="m-1">${e.dataset.product_price}</h1>
			</div>
		</div>
	`
})




// Navigation Bar---------------

for (var i = 0; i < nav_bar.length; i++) {
	nav_bar[i].innerHTML = `<div class="navigation-bar">
	<span class="brand-name">Shivam</span>
	<div class="links">
		<a href="index.html">Home</a>
		<a href="product.html">Products</a>
		<a href="ContactUs.html">Contact</a>
	</div>
	<div class="burger-btn">
		<span class="burger-bar"></span>
		<span class="burger-bar"></span>
		<span class="burger-bar"></span>
	</div>
	</div>
	<div class="navigation-bar-mobile">
		<a href="index.html"  onclick="go_back()">Home</a>
		<a href="product.html" onclick="go_back()">Products</a>
		<a href="ContactUs.html"  onclick="go_back()">Contact</a>
	</div>`
};

/* Footer section */
for (var i = 0; i < footer.length; i++) {
	footer[i].innerHTML = `<footer>
	<div class="footer-media footer"> 
		<div>
				<div class="brand-name dark">
					<a href="index.html">Shivam</a>
				</div>
				<div class="brand-line mb-1">
				<a href="index.html"><b>I N D U S T R I E S</b></a>
					<hr>
				</div>
		</div>
		<div class="contact-box">
			<div class="contact"> <a class="block" href="tel:9429796977"> <span class="fa-solid fa-phone mt-2"></span>&nbsp;+91
			9429796977</a></i></div>
			<div class="contact"><a class="block" href="mailto:superwax9@gmail.com"> <span
			class="fa-solid fa-envelope mt-1"></span>&nbsp;&nbsp;superwax9@gmail.com </a></div>
		</div>
	</div>
</footer>`
};


var navbar_mobile = document.getElementsByClassName("navigation-bar-mobile")[0];
document.getElementsByClassName("burger-btn")[0].addEventListener('click', () => {
	if (navbar_mobile.style.display == "flex") {
		navbar_mobile.style.display = "none";
	} else {
		navbar_mobile.style.display = "flex";
	}
})

//Surevy No.37 , Plot No.42 , Near Mahalaxmi Masala , Opp. Tirth Agro, Vavdi Gondal Road, Rajkot-360004.
