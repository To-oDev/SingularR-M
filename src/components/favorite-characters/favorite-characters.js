import { LitElement, html } from 'lit';

class FavoriteCharacters extends LitElement {
    constructor() {
        super();
    }

    static get is() {
        return 'favorite-characters';
    }

    render() {
        return html`
            <h1>Favorite Characters</h1>
        `;
    }
}

customElements.define(FavoriteCharacters.is, FavoriteCharacters);