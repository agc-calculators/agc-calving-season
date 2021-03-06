/*! Built with http://stenciljs.com */
import { h } from '../agc-calving-season.core.js';

import { d as formatDate } from './chunk-7c2770c1.js';

class AgcCalvingSeasonResults {
    constructor() {
        this.socket = "";
        this.ready = false;
    }
    render() {
        return (h("section", { "data-wizard-results": true, ref: c => this.section = c },
            h("div", { style: { display: this.ready ? 'none' : 'block' } },
                h("slot", { name: "empty" })),
            h("div", { style: { display: this.ready ? 'block' : 'none' } }, this.data && (h("ul", { class: "agc-results" },
                h("li", null,
                    h("h2", { "data-i18n": "results.calving-season-starts" }, "Calving Season Starts"),
                    h("span", { class: "agc-results__value" }, formatDate(this.data['calvingSeasonStart']))),
                h("li", null,
                    h("h2", { "data-i18n": "results.calving-season-ends" }, "Calving Season Ends"),
                    h("span", { class: "agc-results__value" }, formatDate(this.data['calvingSeasonEnd']))))))));
    }
    handleResults(e) {
        if (e.detail['socket'] !== this.socket) {
            return;
        }
        this.data = Object.assign({}, e.detail['results']);
        this.ready = true;
    }
    componentDidLoad() {
        if (!this.socket) {
            return;
        }
        window.document.addEventListener('agcCalculated', this.handleResults.bind(this));
    }
    componentDidUnload() {
        window.document.removeEventListener('agcCalculated', this.handleResults);
    }
    static get is() { return "agc-calving-season-results"; }
    static get properties() { return {
        "data": {
            "state": true
        },
        "ready": {
            "state": true
        },
        "socket": {
            "type": String,
            "attr": "socket"
        }
    }; }
}

export { AgcCalvingSeasonResults };
