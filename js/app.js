function getFilterFromHash() {
					var hash = window.location.hash.replace(/^#/g, '');
					// var filter = hash ? '.' + hash : 'all';
					var filter = 'all';
					if (hash !== '') {
							filter = '.' + hash;
					}
					return filter;
			}

			$(document).ready(function() {
					//$('#Container').mixItUp();
					var configurationOfMixitUp = {
							load: {
									filter: getFilterFromHash() // Ensure that the mixer's initial filter matches the URL on startup
							}
					};
					var mixer = mixitup('#Container', configurationOfMixitUp);
					window.onhashchange = function() {
							var selector = getFilterFromHash();
							if (selector === mixer.getState().activeFilter.selector) {
									return; // no change
							} else {
									mixer.filter(selector);
							}
					};
			});

			function myFunction() {
			    var x = document.getElementById("menuResponsive");
			    if (x.className === "col-4 menu-horizontal") {
			        x.className += " responsive";
			    } else {
			        x.className = "col-4 menu-horizontal";
			    }
			}
