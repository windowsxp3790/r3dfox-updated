function loadSelectorSetting() {
	document.querySelectorAll("button.menu[data-pref]").forEach(selector => {
		let current;

		const checkInt = selector.querySelector(".list .item");
		if (Number.isInteger(parseInt(checkInt.getAttribute("value"))))
			current = gkPrefUtils.tryGet(`Geckium.${selector.dataset.pref}`).int;
		else
			current = gkPrefUtils.tryGet(`Geckium.${selector.dataset.pref}`).string;

		selector.setValue(current);

		selector.querySelectorAll(".list .item").forEach(item => {
			item.addEventListener("click", () => {
				if (Number.isInteger(parseInt(item.getAttribute("value"))))
					gkPrefUtils.set(`Geckium.${selector.dataset.pref}`).int(parseInt(item.getAttribute("value")));
				else
					gkPrefUtils.set(`Geckium.${selector.dataset.pref}`).string(`${item.getAttribute("value")}`);
			})
		})
	})
}
document.addEventListener("DOMContentLoaded", loadSelectorSetting);

function loadTextFieldSetting() {
	document.querySelectorAll('input[type="text"][data-pref]').forEach(input => {
		input.value = gkPrefUtils.tryGet(`Geckium.${input.dataset.pref}`).string;

		input.addEventListener("input", () => {
			gkPrefUtils.set(`Geckium.${input.dataset.pref}`).string(input.value);
		})
	})
}
document.addEventListener("DOMContentLoaded", loadTextFieldSetting);

function loadSwitchSetting() {
	document.querySelectorAll('input.switch[data-pref]').forEach(input => {
		input.checked = gkPrefUtils.tryGet(`${input.dataset.pref}`).bool;

		input.addEventListener("input", () => {
			gkPrefUtils.set(`${input.dataset.pref}`).bool(input.checked);
		})
	})
}
document.addEventListener("DOMContentLoaded", loadSwitchSetting);