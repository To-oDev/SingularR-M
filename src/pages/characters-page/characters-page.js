import { LitElement, html, css } from 'lit';
import '../../components/character-data/character-data';

class CharactersPage extends LitElement {
    constructor() {
        super();
        this.characters = [];
    }

    static get properties() {
        return {
            characters: { type: Array }
        };
    }

    static get is() {
        return 'characters-page';
    }

    connectedCallback() {
        super.connectedCallback();
        this.loadData();
    }

    async loadData() {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        this.characters = data.results; // guardamos el array
    }

    static styles = css`
        div {
            margin: 0px;
            padding: 0px;

            height: 100vh;
            width: 100vw;

            display: flex;
            flex-wrap: wrap;
            
            /* border: 10px solid #ff0000;
            box-sizing: border-box; */
        }
    `;

    render() {
        console.log(this.characters);
        return html`
            <div>
                ${this.characters.map(info => html`
                    <character-data .data=${info}></character-data>
                `)}
            </div>
            <!-- <h1>Characters Page</h1> -->
            <!-- <character-data></character-data> --> 
        `;
    }
}

customElements.define(CharactersPage.is, CharactersPage);