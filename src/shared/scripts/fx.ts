export const parallaxOnScroll = (parallaxElementId: string) => {
	const scrolled = window.pageYOffset;

	const parallaxElement = document.getElementById(parallaxElementId);

	if (parallaxElement) {
		const speed = scrolled * 0.5;
		parallaxElement.style.transform = `translateY(${speed}px)`;
	}
};
