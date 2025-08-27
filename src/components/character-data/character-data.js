import { LitElement, html, css } from 'lit';

class CharacterData extends LitElement {
    constructor() {
        super();
        this.data = {};
        this.active = false;
    }

    static get properties() {
        return {
            data: { type: String },
            active: { type: Boolean }
        };
    }

    static get is() {
        return 'character-data';
    }

    _showDescription() {
        this.active = !this.active;
    }

    static styles = css`
        :host {
            display: flex;
            justify-content: center;

            /* border: 1px solid #51ff00; */
        }

        div:hover {
            cursor: pointer;
        }

        div.active {
            border: 1px
        }
        
        figure {
            margin: 0px;

            max-width: 100%;
            max-height: 100%;

            border: 1px solid #ccc;
            border-radius: 5px;
        }

        figure.active {
            display: flex;
            border: 0px;
        }

        figure

        img {
            max-width: 100%;
            max-height: 100%;
        }

        img.active {
            max-width: 30%;
            max-height: 30%;
        }
    `;

    render() {
        return html`
        <div class=${this.active ? 'active' : ''} @click=${this._showDescription}>
            <figure class=${this.active ? 'active' : ''}>
                <img class=${this.active ? 'active' : ''} src="${this.data.image}" alt="${this.data.name}">
                <figcaption>${this.data.name}</figcaption>
            </figure>
            ${this.active ? html`
                <p>
                    <strong>Status: </strong>${this.data.status}<br/>
                    <strong>Species: </strong>${this.data.species}<br/>
                    <strong>Gender: </strong>${this.data.gender}<br/>
                    <strong>Origin: </strong>${this.data.origin.name}<br/>
                    <strong>Location: </strong>${this.data.location.name}
                </p>
            ` : ''}
        </div>
        `;
    }
}

customElements.define(CharacterData.is, CharacterData);