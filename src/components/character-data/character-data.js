import { LitElement, html, css } from 'lit';
import starEmpty from '../../assets/star-empty.png';

class CharacterData extends LitElement {
    constructor() {
        super();
        this.data = {};
        this.active = false;
        this.picked = false;
        this.favorite = false;
    }

    static get properties() {
        return {
            data: { type: String },
            active: { type: Boolean },
            picked: { type: Boolean },
            favorite: { type: Boolean }
        };
    }

    static get is() {
        return 'character-data';
    }

    _showDescription() {
        this.active = !this.active;
    }

    _togglePicked() {
        this.picked = !this.picked;
        const picked = this.picked;
        this.dispatchEvent(new CustomEvent('picked', {
            detail: {picked},
            bubbles: true,
            composed: true
        }));
    }

    static styles = css`
        :host {
            display: flex;
            justify-content: center;

            /* border: 1px solid #51ff00; */
        }

        div

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

        figcaption {
            margin: 0.3rem 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        img {
            max-width: 100%;
            max-height: 100%;
        }

        img:hover {
            cursor: pointer;
        }

        img.active {
            max-width: 30%;
            max-height: 30%;
        }

        svg.visible {
            display: block;
        }

        svg.invisible {
            display: none;
        }

        figcaption svg:hover {
            cursor: pointer;
        }
    `;

    render() {
        return html`
        <div class=${this.active ? 'active' : ''}>
            <figure class=${this.active ? 'active' : ''}>
                <img @click=${this._showDescription} class=${this.active ? 'active' : ''} src="${this.data.image}" alt="${this.data.name}">
                <figcaption>
                    ${this.data.name}
                    ${this.picked ? 
                        html`<svg class=${this.favorite ? 'invisible' : 'visible'} @click=${this._togglePicked} width="1.75em" height="1.75em" viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Home"></g> <g id="Print"></g> <g id="Mail"></g> <g id="Camera"></g> <g id="Video"></g> <g id="Film"></g> <g id="Message"></g> <g id="Telephone"></g> <g id="User"></g> <g id="File"></g> <g id="Folder"></g> <g id="Map"></g> <g id="Download"></g> <g id="Upload"></g> <g id="Video_Recorder"></g> <g id="Schedule"></g> <g id="Cart"></g> <g id="Setting"></g> <g id="Search"></g> <g id="Pencils"></g> <g id="Group"></g> <g id="Record"></g> <g id="Headphone"></g> <g id="Music_Player"></g> <g id="Sound_On"></g> <g id="Sound_Off"></g> <g id="Lock"></g> <g id="Lock_open"></g> <g id="Love"></g> <g id="Favorite"> <path d="M30.9,10.6C30.8,10.2,30.4,10,30,10h0h-9l-4.1-8.4C16.7,1.2,16.4,1,16,1v0c0,0,0,0,0,0 c-0.4,0-0.7,0.2-0.9,0.6L11,10H2c-0.4,0-0.8,0.2-0.9,0.6c-0.2,0.4-0.1,0.8,0.2,1.1l6.6,7.6L5,29.7c-0.1,0.4,0,0.8,0.3,1 s0.7,0.3,1.1,0.1l9.6-4.6l9.6,4.6C25.7,31,25.8,31,26,31h0h0h0c0.5,0,1-0.4,1-1c0-0.2,0-0.3-0.1-0.5l-2.8-10.3l6.6-7.6 C31,11.4,31.1,10.9,30.9,10.6z" fill="#FE9803"></path> </g> <g id="Film_1_"></g> <g id="Music"></g> <g id="Puzzle"></g> <g id="Turn_Off"></g> <g id="Book"></g> <g id="Save"></g> <g id="Reload"></g> <g id="Trash"></g> <g id="Tag"></g> <g id="Link"></g> <g id="Like"></g> <g id="Bad"></g> <g id="Gallery"></g> <g id="Add"></g> <g id="Close"></g> <g id="Forward"></g> <g id="Back"></g> <g id="Buy"></g> <g id="Mac"></g> <g id="Laptop"></g> </g></svg>`
                        :
                        html`<svg class=${this.favorite ? 'invisible' : 'visible'} @click=${this._togglePicked} width="1.75em" height="1.75em" viewBox="0 0 1024 1024" fill="#ffffff" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M802.4 967.2c-7.2 0-15.2-1.6-21.6-4.8l-258.4-128.8-252.8 140c-18.4 10.4-41.6 5.6-56-9.6-8.8-9.6-12.8-23.2-11.2-36.8l43.2-285.6L33.6 444C20.8 432 16 414.4 21.6 397.6c4.8-16.8 18.4-28.8 36-31.2l285.6-48L464.8 56c7.2-15.2 22.4-25.6 39.2-26.4 17.6-0.8 33.6 8.8 41.6 24l133.6 256.8 287.2 35.2c17.6 2.4 31.2 13.6 36.8 30.4 5.6 16 1.6 34.4-10.4 46.4L790.4 629.6l55.2 284c2.4 12.8-0.8 26.4-8.8 36.8-8.8 10.4-21.6 16.8-34.4 16.8zM520.8 784.8c7.2 0 15.2 1.6 21.6 4.8l255.2 127.2-54.4-280c-3.2-14.4 1.6-29.6 12-40l200-203.2L672 358.4c-14.4-1.6-28-11.2-34.4-24L506.4 81.6 385.6 340c-6.4 13.6-19.2 23.2-33.6 25.6L70.4 412l208 194.4c11.2 10.4 16 24.8 13.6 40L249.6 928l249.6-137.6c7.2-3.2 14.4-4.8 21.6-5.6z" fill=""></path></g></svg>`
                    }
                </figcaption>
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