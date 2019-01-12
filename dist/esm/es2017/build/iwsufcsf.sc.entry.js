/*! Built with http://stenciljs.com */
import { h } from '../agc-calving-season.core.js';

class AgcCalvingSeasonResultsPlaceholder {
    render() {
        const placeholder = () => h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.calving-season-starts" }, "Calving Season Starts"),
                    placeholder()),
                h("li", null,
                    h("h2", { "data-i18n": "results.calving-season-emds" }, "Calving Season Ends"),
                    placeholder()))));
    }
    static get is() { return "agc-calving-season-results-placeholder"; }
}

export { AgcCalvingSeasonResultsPlaceholder };
