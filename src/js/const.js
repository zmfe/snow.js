
export const { document } = window;
export const DEFAULT_OPTIONS = {};
export const DEFAULT_SNOWPARTICLE_OPTIONS = {
	index: 0,
	x: 0,
	y: 0,
	context: '',
	color: 'rgb(255, 255, 255)',
	r: 1,
};
function DEG(deg) {
	return Math.PI * (deg / 180);
}
export function SINDEG(deg) {
	if (deg > DEG(165)) {
		deg -= (Math.PI / 4);
	} else if (deg < DEG(15)) {
		deg += (Math.PI / 4);
	}
	return deg;
}
export function COSDEG(deg) {
	if (deg > DEG(15) && deg <= DEG(90)) {
		deg -= (Math.PI / 6);
	} else if (deg > DEG(90) && deg <= DEG(165)) {
		deg += (Math.PI / 6);
	}
	return deg;
}
