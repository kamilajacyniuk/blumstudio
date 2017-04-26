//hamburger menu
			function myFunction() {
			    var x = document.getElementById("menuResponsive");
			    if (x.className === "menu-horizontal") {
			        x.className += " responsive";
			    } else {
			        x.className = "menu-horizontal";
			    }
			}
