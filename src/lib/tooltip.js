export const tooltip = (node, param) => {
	let alreadyLeft;
	let { text, textClass, paddingClass, width, background } = param;
	let timer;
	let updatedText;
	const htmlContent = () => text || updatedText;
	const capture = !!htmlContent()?.tagName;

	function handleDebounceEnter(event) {
		event.stopPropagation();
		alreadyLeft = false;
		event.target.querySelector('.js-tooltip')?.remove();
		clearTimeout(timer);
		timer = setTimeout(() => {
			if (!alreadyLeft) render(event);
		}, 200);
	}

	const render = (event) => {
		if (event.type === 'mouseenter' && (!updatedText || updatedText?.tagName)) {
			setTimeout(() => {
				const content = htmlContent();
				let span = document.createElement('span');
				span.classList.add(
					'js-tooltip',
					'invisible',
					'scale-null',
					'origin-top-left',
					'animated',
					'delay-200',
					'text-sm',
					'pointer-events-auto',
					'tooltip',
					'font-semibold',
					'flex',
					'absolute',
					'z-50',
					'top-full',
					width ? 'w-' + width : null
				);

				span.innerHTML = /*html*/ `
            <span
              style="width: max-content"
              class="js-tooltip-content flex shadow-md rounded-full origin-top z-50 
              ${background || 'bg-dark'} text-whiter ${paddingClass || 'p-3'} ${textClass || ''}">
              ${!content?.tagName ? updatedText || text : ''}
            </span>
          `;
				event.target.appendChild(span);

				if (content?.tagName) {
					content.classList.remove('hidden');
					content.classList.add('flex');
					event.target.querySelector('.js-tooltip-content').appendChild(content);
				}

				setTimeout(() => {
					event.target.querySelector('.js-tooltip')?.classList.remove('invisible', 'scale-null');
					event.target.querySelector('.js-tooltip')?.classList.add('visible', 'scale-full');
				}, 50);
			});
		}
	};

	const handleLeave = (event) => {
		event.target.querySelector('.js-tooltip')?.classList.add('scale-null');

		event.target
			.querySelector('.js-tooltip')
			?.classList.remove('delay-200', 'visible', 'scale-full');

		alreadyLeft = true;
		setTimeout(() => {
			event.target.querySelector('.js-tooltip')?.remove();
		}, 200);
	};

	// bind custom event handler to element's keyup event
	node.addEventListener('mouseenter', handleDebounceEnter, capture);
	node.addEventListener('mouseleave', handleLeave, capture);

	// when element is unmounted from the DOM remove the event listener
	return {
		update: ({ text }) => {
			updatedText = text;

			const tooltip = node.querySelector('.js-tooltip-content');
			if (tooltip && tooltip?.innerText !== text) {
				tooltip.innerText = text;
			}
		},
		destroy() {
			node.removeEventListener('mouseover', handleDebounceEnter, capture);
			node.removeEventListener('mouseout', handleLeave, capture);
		}
	};
};
