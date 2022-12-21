export function dispatchClickOutsideEvent(node, event) {
	if (node && !node.contains(event.target) && !event.defaultPrevented) {
		node.dispatchEvent(new CustomEvent('click_outside', node));
	}
}

export function clickOutside(node) {
	document.addEventListener('click', (event) => dispatchClickOutsideEvent(node, event), true);
	return {
		destroy() {
			document.removeEventListener(
				'click',
				(event) => dispatchClickOutsideEvent(node, event),
				true
			);
		}
	};
}
