/*! Built with http://stenciljs.com */
import { h } from '../agc-calving-season.core.js';

import { a as validate, b as addDays, c as inputDate } from './chunk-7c2770c1.js';

class AgcCalvingSeason {
    constructor() {
        this.socket = "";
        this.tract = "";
        this.mode = 'step';
        this.currentStep = 0;
        this.cache = {};
        this.submitted = false;
        this.results = {};
    }
    render() {
        return (h("div", null,
            h("form", { onSubmit: (e) => e.preventDefault(), ref: c => this.form = c, "data-wizard": "agc-calving-season", "data-wizard-mode": this.mode, class: "agc-wizard" },
                h("slot", null),
                h("section", { "data-wizard-section": "1" },
                    h("div", { class: "agc-wizard__field" },
                        h("label", { "data-i18n": "fields.sire-turn-out-date" }, "Bull Turn Out Date"),
                        h("input", { name: "bullTurnOutDate", type: "date", required: true }),
                        h("p", { class: "agc-wizard__validation-message", "data-i18n": "validation.sire-turn-out-date.required", "data-validates": "bullTurnOutDate" }, "Please enter a date."),
                        h("p", { "data-i18n": "hints.sire-turn-out-date" }, "\u2BA4 Enter the date the bull was turned in with the herd.")),
                    h("div", { class: "agc-wizard__actions" }, this.mode === 'step' && h("button", { class: "agc-wizard__actions-next", "data-i18n": "actions.next", onClick: this.nextPrev.bind(this, 1) }, "Next"))),
                h("section", { "data-wizard-section": "2" },
                    h("div", { class: "agc-wizard__field" },
                        h("label", { "data-i18n": "fields.breeding-season-length" }, "Breeding Season Length"),
                        h("input", { name: "breedingSeasonLength", type: "text", required: true }),
                        h("p", { class: "agc-wizard__validation-message", "data-i18n": "validation.breeding-season-length.required", "data-validates": "breedingSeasonLength" }, "Please enter a value."),
                        h("p", { "data-i18n": "hints.breeding-season-length" }, "\u2BA4 Enter the breeding season length in days.")),
                    h("div", { class: "agc-wizard__actions" },
                        this.mode === 'step' && h("button", { class: "agc-wizard__actions-prev", "data-i18n": "actions.prev", onClick: this.nextPrev.bind(this, -1) }, "Back"),
                        h("button", { class: "agc-wizard__actions-next", "data-i18n": "actions.finish", onClick: this.nextPrev.bind(this, this.mode === 'step' ? 1 : 2) }, "Calculate"))),
                h("section", { "data-wizard-results": true },
                    h("slot", { name: "results" })))));
    }
    showTab(n) {
        if (this.mode === 'step') {
            this.cache['sections'][n].style.display = "block";
        }
        if (this.socket) {
            this.agcStepChanged.emit({ socket: this.socket, tract: this.tract, step: this.currentStep });
        }
    }
    reset() {
        this.currentStep = 0;
        this.submitted = false;
        this.showTab(0);
    }
    validateForm() {
        let valid = true;
        if (this.currentStep === 0 || this.mode === 'full') {
            if (!validate(this.form, 'bullTurnOutDate')) {
                valid = false;
            }
        }
        if (this.currentStep === 0 || this.mode === 'full') {
            if (!validate(this.form, 'breedingSeasonLength')) {
                valid = false;
            }
        }
        return valid;
    }
    nextPrev(n, e) {
        e && e.preventDefault();
        if (this.mode === 'full') {
            if (!this.validateForm())
                return false;
        }
        else if (n == 1 && !this.validateForm())
            return false;
        if (this.mode === 'step') {
            this.cache['sections'][this.currentStep].style.display = "none";
        }
        this.currentStep = this.currentStep + n;
        if (this.currentStep >= this.cache['sections'].length) {
            this.submitted = true;
            this.showResults.call(this);
            return false;
        }
        this.showTab.call(this, this.currentStep);
    }
    showResults() {
        let bullTurnOutDate = this.form.querySelector('[name="bullTurnOutDate"').value;
        let breedingSeasonLength = parseInt(this.form.querySelector('[name="breedingSeasonLength"').value);
        let calvingSeasonStart = addDays(bullTurnOutDate, 283);
        let calvingSeasonEnd = addDays(bullTurnOutDate, 283 + breedingSeasonLength);
        let results = {
            socket: this.socket,
            tract: this.tract,
            bullTurnOutDate,
            breedingSeasonLength,
            calvingSeasonStart,
            calvingSeasonEnd,
            calculated: new Date()
        };
        if (this.socket) {
            this.agcCalculated.emit({ socket: this.socket, tract: this.tract, results: Object.assign({}, results) });
        }
        this.results = Object.assign({}, results);
        this.cache['results'].forEach(result => {
            result.style.display = 'block';
        });
    }
    handleAction(e) {
        if (e.detail['action'] === 'reset') {
            this.reset();
        }
    }
    componentDidLoad() {
        var sections = Array.from(this.form.querySelectorAll('[data-wizard-section]')).map(c => c).map(c => c);
        var results = Array.from(this.form.querySelectorAll('[data-wizard-results]')).map(c => c).map(c => c);
        this.cache = Object.assign({}, this.cache, { sections: sections, results: results });
        window.document.addEventListener('agcAction', this.handleAction.bind(this));
        this.form.querySelector('[name="bullTurnOutDate"]').value = inputDate(new Date());
        this.form.querySelector('[name="breedingSeasonLength"]').defaultValue = '60';
        this.showTab(0);
    }
    componentDidUnload() {
        window.document.removeEventListener('agcAction', this.handleAction);
    }
    static get is() { return "agc-calving-season"; }
    static get properties() { return {
        "cache": {
            "state": true
        },
        "currentStep": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "results": {
            "state": true
        },
        "socket": {
            "type": String,
            "attr": "socket"
        },
        "submitted": {
            "state": true
        },
        "tract": {
            "type": String,
            "attr": "tract"
        }
    }; }
    static get events() { return [{
            "name": "agcCalculated",
            "method": "agcCalculated",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "agcStepChanged",
            "method": "agcStepChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
}

export { AgcCalvingSeason };
