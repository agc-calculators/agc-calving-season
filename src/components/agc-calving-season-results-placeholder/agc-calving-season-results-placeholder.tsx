
import { Component } from '@stencil/core';


@Component({
    tag: 'agc-calving-season-results-placeholder'
})
export class AgcCalvingSeasonResultsPlaceholder {

    

    render() {
        const placeholder = () => <span><i class="mark"></i> <i class="mark"></i> <i class="mark"></i> <i class="mark"></i></span>

        return (
            <section>
                <ul class="agc-results-placeholder">
                    <li>
                        <h2 data-i18n="results.calving-season-starts">Calving Season Starts</h2>
                        {placeholder()}
                    </li>
                    <li>
                        <h2 data-i18n="results.calving-season-emds">Calving Season Ends</h2>
                        {placeholder()}
                    </li> 
                </ul>
            </section>
        );
    }
}