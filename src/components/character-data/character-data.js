import { LitElement, html, css } from 'lit';

class CharacterData extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {
            data: { type: String }
        };
    }

    static get is() {
        return 'character-data';
    }

    _showDescription() {
        console.log("Show description for:", this.data.name);
    }

    static styles = css`
        figure {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 4px;
        }
        
        figure:hover {
            cursor: pointer;
        }
    `;

    render() {
        console.log("Data:", this.data);
        return html`
        <figure @click=${this._showDescription}>
            <img src="${this.data.image}" alt="${this.data.name}">
            <figcaption>${this.data.name}</figcaption>
        </figure>
        `;
    }
}

customElements.define(CharacterData.is, CharacterData);