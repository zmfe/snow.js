import {
	DEFAULT_SNOWPARTICLE_OPTIONS,
	DEFAULT_OPTIONS,
	SINDEG,
	COSDEG,
	document,
} from './const';

class SnowParticle {
	/**
	 * Creates an instance of SnowParticle.
	 * @param {Object} option content, x, y, color
	 * @memberof Snow
	 */
	constructor(option = {}) {
		this.option = Object.assign({}, DEFAULT_SNOWPARTICLE_OPTIONS, option);
		const {
			content, color, x, y, r, v,
		} = this.option;
		this.color = `${color.replace('rgb', 'rgba').split(')')[0]},${(Math.floor(Math.random() * 50) + 50) / 100})`;
		this.content = content;
		this.r = r * (((Math.random() * 0.4) + 0.6));
		this.x = x;
		this.y = y;
		this.v = v;
		this.angle = (Math.PI * Math.random());
		// this.init();
	}
	// init() {
	// }
	draw() {
		const {
			content, color, x, y, r,
		} = this;
		content.beginPath();
		content.arc(Math.floor(x), Math.floor(y), r, 0, 2 * Math.PI, true);
		content.closePath();
		content.fillStyle = color;
		content.fill();
	}
	move() {
		const {
			width, height,
		} = this.option;
		this.x += this.v * (Math.cos(COSDEG(this.angle))) * 0.3;
		this.y += this.v * (Math.sin(SINDEG(this.angle)));
		if (this.y > height || this.x > width || this.x < 0) {
			this.y = 0;
			this.x = Math.random() * width;
			this.angle = (Math.PI * Math.random());
		}
	}
}

class Snow {
	/**
	 * Creates an instance of Snow.
	 * @param {Element} element target
	 * @param {Object} [option={}] options
	 * @memberof Snow
	 */
	constructor(element, option = {}) {
		this.element = document.querySelector(element);
		this.canvas = '';
		this.ctx = '';
		this.width = 0;
		this.height = 0;
		this.option = Object.assign({}, DEFAULT_OPTIONS, option);
		this.number = this.option.number;
		this.partiles = [];
		this.init();
	}
	init() {
		const { element } = this;
		const width = element.clientWidth;
		const height = element.clientHeight;
		this.width = width;
		this.height = height;
		this.createCanvas();
		this.createParticle();
	}
	createCanvas() {
		const { element, width, height } = this;
		const canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		canvas.style.cssText = 'position:absolute;top:0;left:0;background:rgba(0,0,0,0);pointer-events:none;z-index:1;';
		element.appendChild(canvas);
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
	}
	createParticle() {
		const { r, v } = this.option;
		const {
			ctx, width, height, number, partiles,
		} = this;
		for (let i = 0; i < number; i += 1) {
			const particle = new SnowParticle({
				color: 'rgb(255,255,255)',
				content: ctx,
				y: Math.floor(Math.random() * height),
				x: Math.floor(Math.random() * width),
				r,
				v,
				width: this.width,
				height: this.height,
				// angle: Math.PI,
			});
			partiles.push(particle);
			particle.draw();
		}
		function animate() {
			ctx.clearRect(0, 0, width, height);
			partiles.forEach((item) => {
				item.move();
				item.draw();
			});
			requestAnimationFrame(animate);
		}
		animate();
	}
}

export default Snow;
