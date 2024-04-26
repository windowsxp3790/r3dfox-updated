// Appearance map with year and name
/*const appearanceMap = {
	0: { style: 5, year: 2010, name: "Chrome 5" },
	1: { style: 6, year: 2010, name: "Chrome 6" },
	2: { style: 11, year: 2011, name: "Chrome 11" },
	3: { style: 21, year: 2012, name: "Chrome 21" },
	4: { style: 25, year: 2013, name: "Chrome 25" },
	5: { style: 47, year: 2015, name: "Chrome 47" },
	6: { style: 68, year: 2018, name: "Chrome 68" },
};*/


function insertMainVisualStyles() {
	// Get the container element where you want to insert the HTML
	var container = document.getElementById("appearance-container");

	// Initialize the HTML string
	let chromeAppearanceCard = ``;

	// Loop to create seven instances starting from 0 to 6
	for (var i = 0; i < 8; i++) {
		// Get the appearance details from the map
		var appearance = gkVisualStyles.getVisualStyles("chrome")[i];

		// Construct the HTML for the button using template literals
		chromeAppearanceCard += `
		<html:button data-appearance="${appearance.id}"
				class="link chrome-appearance ripple-enabled" 
				for="chrome-${appearance.int}" 
				style="background-image: url('chrome://userchrome/content/windows/gflags/imgs/main/chrome-${appearance.int}.png');">
			<html:label class="wrapper" chrome="${appearance.int}">
				<div class="year">${appearance.year[0]}</div>
				<div class="identifier">
					<div class="radio-parent">
						<html:input data-appearance="${appearance.id}" class="radio" type="radio" name="main-visual-style" id="chrome-${appearance.int}"></html:input>
						<div class="gutter" for="checked_check"></div>
						<html:label for="chrome-${appearance.int}" class="label">Chrome ${appearance.int}</html:label>
					</div>
				</div>
			</html:label>
		</html:button>
		`;

		
	}

	// Set the innerHTML of the container to the constructed HTML
	container.appendChild(MozXULElement.parseXULToFragment(chromeAppearanceCard))

	document.querySelectorAll(`#appearance-container input[data-appearance]`).forEach(appearance => {
		appearance.addEventListener("click", function() {
			gkPrefUtils.set("Geckium.appearance.choice").int(appearance.dataset.appearance);
		})
	})

	document.querySelector(`#appearance-container input[data-appearance="${gkPrefUtils.tryGet("Geckium.appearance.choice").int}"]`).checked = true;
}
document.addEventListener("DOMContentLoaded", insertMainVisualStyles);