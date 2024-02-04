
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
class $4fa36e821943b400$var$SVGPathLength {
    constructor(options){
        this.svg = document.querySelector(options.svg);
        this.path = document.querySelector(options.path);
        this.svgRect = null;
        this.length = null;
        this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
        this.updateCallback = null;
    }
    calculatePathLength() {
        const scaleX = this.svgRect.width / this.svg.viewBox.baseVal.width;
        const scaleY = this.svgRect.height / this.svg.viewBox.baseVal.height;
        this.length = Math.round(this.path.getTotalLength() * (scaleX + scaleY) / 2);
    }
    handleResize() {
        this.svgRect = this.svg.getBoundingClientRect();
        this.calculatePathLength();
        if (this.updateCallback) this.updateCallback(this.length);
    }
    init(callback) {
        this.svgRect = this.svg.getBoundingClientRect();
        this.calculatePathLength();
        this.updateCallback = callback;
        this.resizeObserver.observe(this.svg);
    }
}
var $4fa36e821943b400$export$2e2bcd8739ae039 = $4fa36e821943b400$var$SVGPathLength;


//# sourceMappingURL=index.js.map
