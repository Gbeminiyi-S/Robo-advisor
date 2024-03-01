import {
  DOCUMENT
} from "./chunk-A6ZBE6ZR.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  ViewChild,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵviewQuery
} from "./chunk-ORNJK7UO.js";

// node_modules/angular-svg-round-progressbar/fesm2022/angular-svg-round-progressbar.mjs
var _c0 = ["path"];
var DEGREE_IN_RADIANS = Math.PI / 180;
var _RoundProgressService = class _RoundProgressService {
  constructor(document) {
    this.supportsSvg = !!(document && document.createElementNS && document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    this.base = document && document.head.querySelector("base");
    this.hasPerf = typeof window !== "undefined" && window.performance && window.performance.now && typeof window.performance.now() === "number";
  }
  /**
   * Resolves a SVG color against the page's `base` tag.
   */
  resolveColor(color) {
    if (this.base && this.base.href) {
      const hashIndex = color.indexOf("#");
      if (hashIndex > -1 && color.indexOf("url") > -1) {
        return color.slice(0, hashIndex) + location.href + color.slice(hashIndex);
      }
    }
    return color;
  }
  /**
   * Generates a timestamp.
   */
  getTimestamp() {
    return this.hasPerf ? window.performance.now() : Date.now();
  }
  /**
   * Generates the value for an SVG arc.
   *
   * @param current Current value.
   * @param total Maximum value.
   * @param pathRadius Radius of the SVG path.
   * @param elementRadius Radius of the SVG container.
   * @param isSemicircle Whether the element should be a semicircle.
   */
  getArc(current, total, pathRadius, elementRadius, isSemicircle = false) {
    const value = Math.max(0, Math.min(current || 0, total));
    const maxAngle = isSemicircle ? 180 : 359.9999;
    const percentage = total === 0 ? maxAngle : value / total * maxAngle;
    const start = this._polarToCartesian(elementRadius, pathRadius, percentage);
    const end = this._polarToCartesian(elementRadius, pathRadius, 0);
    const arcSweep = percentage <= 180 ? 0 : 1;
    return `M ${start} A ${pathRadius} ${pathRadius} 0 ${arcSweep} 0 ${end}`;
  }
  /**
   * Converts polar cooradinates to Cartesian.
   *
   * @param elementRadius Radius of the wrapper element.
   * @param pathRadius Radius of the path being described.
   * @param angleInDegrees Degree to be converted.
   */
  _polarToCartesian(elementRadius, pathRadius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    const x = elementRadius + pathRadius * Math.cos(angleInRadians);
    const y = elementRadius + pathRadius * Math.sin(angleInRadians);
    return x + " " + y;
  }
};
_RoundProgressService.ɵfac = function RoundProgressService_Factory(t) {
  return new (t || _RoundProgressService)(ɵɵinject(DOCUMENT, 8));
};
_RoundProgressService.ɵprov = ɵɵdefineInjectable({
  token: _RoundProgressService,
  factory: _RoundProgressService.ɵfac,
  providedIn: "root"
});
var RoundProgressService = _RoundProgressService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoundProgressService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var DEFAULTS = {
  radius: 125,
  animation: "easeOutCubic",
  animationDelay: void 0,
  duration: 500,
  stroke: 15,
  color: "#45CCCE",
  background: "#EAEAEA",
  responsive: false,
  clockwise: true,
  semicircle: false,
  rounded: false
};
var ROUND_PROGRESS_DEFAULTS = new InjectionToken("ROUND_PROGRESS_DEFAULTS", {
  providedIn: "root",
  factory: () => DEFAULTS
});
var ROUND_PROGRESS_DEFAULTS_PROVIDER = {
  provide: ROUND_PROGRESS_DEFAULTS,
  useValue: DEFAULTS
};
var _RoundProgressEase = class _RoundProgressEase {
  // t: current time (or position) of the neonate. This can be seconds or frames, steps,
  // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
  // b: beginning value of the property.
  // c: change between the beginning and destination value of the property.
  // d: total time of the neonate.
  linearEase(t, b, c, d) {
    return c * t / d + b;
  }
  easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
  }
  easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }
  easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    }
    return -c / 2 * (--t * (t - 2) - 1) + b;
  }
  easeInCubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
  }
  easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
  easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  }
  easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  }
  easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }
  easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  }
  easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  }
  easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }
  easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  }
  easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  }
  easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  }
  easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  }
  easeInExpo(t, b, c, d) {
    return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  }
  easeOutExpo(t, b, c, d) {
    return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  }
  easeInOutExpo(t, b, c, d) {
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
  easeInCirc(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }
  easeOutCirc(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }
  easeInOutCirc(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }
  easeInElastic(t, b, c, d) {
    const p = d * 0.3;
    let s = 1.70158;
    let a = c;
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * t--) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  }
  easeOutElastic(t, b, c, d) {
    const p = d * 0.3;
    let s = 1.70158;
    let a = c;
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  }
  easeInOutElastic(t, b, c, d) {
    const p = d * (0.3 * 1.5);
    let s = 1.70158;
    let a = c;
    if (t === 0) {
      return b;
    }
    if ((t /= d / 2) === 2) {
      return b + c;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
  }
  easeInBack(t, b, c, d, s = 1.70158) {
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  }
  easeOutBack(t, b, c, d, s = 1.70158) {
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }
  easeInOutBack(t, b, c, d, s = 1.70158) {
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  }
  easeInBounce(t, b, c, d) {
    return c - this.easeOutBounce(d - t, 0, c, d) + b;
  }
  easeOutBounce(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    }
    return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
  }
  easeInOutBounce(t, b, c, d) {
    if (t < d / 2) {
      return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
    }
    return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  }
};
_RoundProgressEase.ɵfac = function RoundProgressEase_Factory(t) {
  return new (t || _RoundProgressEase)();
};
_RoundProgressEase.ɵprov = ɵɵdefineInjectable({
  token: _RoundProgressEase,
  factory: _RoundProgressEase.ɵfac,
  providedIn: "root"
});
var RoundProgressEase = _RoundProgressEase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoundProgressEase, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _RoundProgressComponent = class _RoundProgressComponent {
  constructor(service, easing, defaults, ngZone) {
    this.service = service;
    this.easing = easing;
    this.defaults = defaults;
    this.ngZone = ngZone;
    this.currentLinecap = "";
    this.current = 0;
    this.max = 0;
    this.radius = this.defaults.radius;
    this.animation = this.defaults.animation;
    this.animationDelay = this.defaults.animationDelay;
    this.duration = this.defaults.duration;
    this.stroke = this.defaults.stroke;
    this.color = this.defaults.color;
    this.background = this.defaults.background;
    this.responsive = this.defaults.responsive;
    this.clockwise = this.defaults.clockwise;
    this.semicircle = this.defaults.semicircle;
    this.rounded = this.defaults.rounded;
    this.onRender = new EventEmitter();
    this.lastAnimationId = 0;
  }
  /** Animates a change in the current value. */
  _animateChange(from, to) {
    if (typeof from !== "number") {
      from = 0;
    }
    to = this._clamp(to);
    from = this._clamp(from);
    const self = this;
    const changeInValue = to - from;
    const duration = self.duration;
    self.ngZone.runOutsideAngular(() => {
      const start = () => {
        const startTime = self.service.getTimestamp();
        const id = ++self.lastAnimationId;
        requestAnimationFrame(function animation() {
          const currentTime = Math.min(self.service.getTimestamp() - startTime, duration);
          const easingFn = self.easing[self.animation];
          const value = easingFn(currentTime, from, changeInValue, duration);
          self._updatePath(value);
          if (self.onRender.observers.length > 0) {
            self.onRender.emit(value);
          }
          if (id === self.lastAnimationId && currentTime < duration) {
            requestAnimationFrame(animation);
          }
        });
      };
      if (this.animationDelay > 0) {
        setTimeout(start, this.animationDelay);
      } else {
        start();
      }
    });
  }
  /** Updates the path apperance. */
  _updatePath(value) {
    if (this.path) {
      const arc = this.service.getArc(value, this.max, this.radius - this.stroke / 2, this.radius, this.semicircle);
      const path = this.path.nativeElement;
      const linecap = this.rounded && value > 0 ? "round" : "";
      if (linecap !== this.currentLinecap) {
        this.currentLinecap = linecap;
        path.style.strokeLinecap = linecap;
      }
      path.setAttribute("d", arc);
    }
  }
  /** Clamps a value between the maximum and 0. */
  _clamp(value) {
    return Math.max(0, Math.min(value || 0, this.max));
  }
  /** Determines the SVG transforms for the <path> node. */
  getPathTransform() {
    const diameter = this._getDiameter();
    if (this.semicircle) {
      return this.clockwise ? `translate(0, ${diameter}) rotate(-90)` : `translate(${diameter + "," + diameter}) rotate(90) scale(-1, 1)`;
    } else if (!this.clockwise) {
      return `scale(-1, 1) translate(-${diameter} 0)`;
    }
    return null;
  }
  /** Resolves a color through the service. */
  resolveColor(color) {
    return this.service.resolveColor(color);
  }
  /** Change detection callback. */
  ngOnChanges(changes) {
    if (changes.current) {
      this._animateChange(changes.current.previousValue, changes.current.currentValue);
    } else {
      this._updatePath(this.current);
    }
  }
  /** Diameter of the circle. */
  _getDiameter() {
    return this.radius * 2;
  }
  /** The CSS height of the wrapper element. */
  _getElementHeight() {
    if (!this.responsive) {
      return (this.semicircle ? this.radius : this._getDiameter()) + "px";
    }
    return null;
  }
  /** Viewbox for the SVG element. */
  _getViewBox() {
    const diameter = this._getDiameter();
    return `0 0 ${diameter} ${this.semicircle ? this.radius : diameter}`;
  }
  /** Bottom padding for the wrapper element. */
  _getPaddingBottom() {
    if (this.responsive) {
      return this.semicircle ? "50%" : "100%";
    }
    return null;
  }
};
_RoundProgressComponent.ɵfac = function RoundProgressComponent_Factory(t) {
  return new (t || _RoundProgressComponent)(ɵɵdirectiveInject(RoundProgressService), ɵɵdirectiveInject(RoundProgressEase), ɵɵdirectiveInject(ROUND_PROGRESS_DEFAULTS), ɵɵdirectiveInject(NgZone));
};
_RoundProgressComponent.ɵcmp = ɵɵdefineComponent({
  type: _RoundProgressComponent,
  selectors: [["round-progress"]],
  viewQuery: function RoundProgressComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.path = _t.first);
    }
  },
  hostAttrs: ["role", "progressbar"],
  hostVars: 11,
  hostBindings: function RoundProgressComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-valuemin", 0)("aria-valuemax", ctx.max)("aria-valuenow", ctx.current);
      ɵɵstyleProp("width", ctx.responsive ? "" : ctx._getDiameter() + "px")("height", ctx._getElementHeight())("padding-bottom", ctx._getPaddingBottom());
      ɵɵclassProp("responsive", ctx.responsive);
    }
  },
  inputs: {
    current: "current",
    max: "max",
    radius: "radius",
    animation: "animation",
    animationDelay: "animationDelay",
    duration: "duration",
    stroke: "stroke",
    color: "color",
    background: "background",
    responsive: "responsive",
    clockwise: "clockwise",
    semicircle: "semicircle",
    rounded: "rounded"
  },
  outputs: {
    onRender: "onRender"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 13,
  consts: [["xmlns", "http://www.w3.org/2000/svg"], ["fill", "none"], ["path", ""]],
  template: function RoundProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0);
      ɵɵelement(1, "circle", 1)(2, "path", 1, 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵattribute("viewBox", ctx._getViewBox());
      ɵɵadvance();
      ɵɵstyleProp("stroke", ctx.resolveColor(ctx.background))("stroke-width", ctx.stroke);
      ɵɵattribute("cx", ctx.radius)("cy", ctx.radius)("r", ctx.radius - ctx.stroke / 2);
      ɵɵadvance();
      ɵɵstyleProp("stroke-width", ctx.stroke)("stroke", ctx.resolveColor(ctx.color));
      ɵɵattribute("transform", ctx.getPathTransform());
    }
  },
  styles: ["[_nghost-%COMP%]{display:block;position:relative;overflow:hidden}.responsive[_nghost-%COMP%]{width:100%;padding-bottom:100%}.responsive[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0}"],
  changeDetection: 0
});
var RoundProgressComponent = _RoundProgressComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoundProgressComponent, [{
    type: Component,
    args: [{
      selector: "round-progress",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "role": "progressbar",
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "max",
        "[attr.aria-valuenow]": "current",
        "[style.width]": 'responsive ? "" : _getDiameter() + "px"',
        "[style.height]": "_getElementHeight()",
        "[style.padding-bottom]": "_getPaddingBottom()",
        "[class.responsive]": "responsive"
      },
      standalone: true,
      template: '<svg xmlns="http://www.w3.org/2000/svg" [attr.viewBox]="_getViewBox()">\n  <circle\n    fill="none"\n    [attr.cx]="radius"\n    [attr.cy]="radius"\n    [attr.r]="radius - stroke / 2"\n    [style.stroke]="resolveColor(background)"\n    [style.stroke-width]="stroke"/>\n\n  <path\n    #path\n    fill="none"\n    [style.stroke-width]="stroke"\n    [style.stroke]="resolveColor(color)"\n    [attr.transform]="getPathTransform()"/>\n</svg>\n',
      styles: [":host{display:block;position:relative;overflow:hidden}:host(.responsive){width:100%;padding-bottom:100%}:host(.responsive)>svg{position:absolute;width:100%;height:100%;top:0;left:0}\n"]
    }]
  }], () => [{
    type: RoundProgressService
  }, {
    type: RoundProgressEase
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [ROUND_PROGRESS_DEFAULTS]
    }]
  }, {
    type: NgZone
  }], {
    path: [{
      type: ViewChild,
      args: ["path"]
    }],
    current: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    radius: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    animationDelay: [{
      type: Input
    }],
    duration: [{
      type: Input
    }],
    stroke: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    background: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    clockwise: [{
      type: Input
    }],
    semicircle: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    onRender: [{
      type: Output
    }]
  });
})();
var _RoundProgressModule = class _RoundProgressModule {
};
_RoundProgressModule.ɵfac = function RoundProgressModule_Factory(t) {
  return new (t || _RoundProgressModule)();
};
_RoundProgressModule.ɵmod = ɵɵdefineNgModule({
  type: _RoundProgressModule,
  imports: [RoundProgressComponent],
  exports: [RoundProgressComponent]
});
_RoundProgressModule.ɵinj = ɵɵdefineInjector({
  providers: [ROUND_PROGRESS_DEFAULTS_PROVIDER]
});
var RoundProgressModule = _RoundProgressModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoundProgressModule, [{
    type: NgModule,
    args: [{
      imports: [RoundProgressComponent],
      exports: [RoundProgressComponent],
      providers: [ROUND_PROGRESS_DEFAULTS_PROVIDER]
    }]
  }], null, null);
})();
export {
  ROUND_PROGRESS_DEFAULTS,
  ROUND_PROGRESS_DEFAULTS_PROVIDER,
  RoundProgressComponent,
  RoundProgressEase,
  RoundProgressModule,
  RoundProgressService,
  RoundProgressModule as RoundprogressModule
};
//# sourceMappingURL=angular-svg-round-progressbar.js.map
