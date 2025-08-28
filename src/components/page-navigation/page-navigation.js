import { LitElement, html, css } from "lit";

class PageNavigation extends LitElement {
    static get is() {
        return 'page-navigation';
    }

    static get properties() {
        return {
            totalPages: { type: Number },
            currentPage: { type: Number },
            rangePages: { type: Number }
        };
    }

    constructor() {
        super();
        this.totalPages = 1;
        this.currentPage = 1;
        this.maxVisiblePages = 5;
    }

    _changePage(page) {
        this.currentPage = page;

        this.dispatchEvent(new CustomEvent('changed-page', {
            detail: {page},
            bubbles: true,
            composed: true
        }));
    }

    static styles = css`
        :host {
            /* border: 1px solid #51ff00; */

            margin: 0.5rem;

            display: flex;
            justify-content: center;
            align-items: center;

            /* position: fixed;
            bottom: 0px;
            left: 50%;
            transform: translate(-50%, 0%); */
        }
        
        a {
            text-decoration: none;
            color: #fff;
            margin: 0px 5px;
        }

        a:hover {
            cursor: pointer;
            text-decoration: underline;
        }

        a.active {
            text-decoration: underline;
        }
    `;

    render() {
        const visiblePages = this.totalPages > this.maxVisiblePages ? this.maxVisiblePages : this.totalPages
        let startPage = Math.max(1, this.currentPage - Math.floor(visiblePages / 2))
        if (startPage + visiblePages - 1 > this.totalPages) {
            startPage = this.totalPages - visiblePages + 1
        }

        return html`
            ${this.currentPage <= 1 ? '' : html`<a @click=${() => this._changePage(this.currentPage - 1)}><</a>`}
            ${Array(visiblePages).fill(0).map((_, index) => {
                const pageIndex = startPage + index
                return html`
                <a
                    class="${this.currentPage === pageIndex ? 'active' : ''}"
                    @click=${() => this._changePage(pageIndex)}
                >${pageIndex}
                </a>`})}
            ${this.currentPage < this.totalPages ? html`<a @click=${() => this._changePage(this.currentPage + 1)}>></a>` : ''}
        `;
    }
}

customElements.define(PageNavigation.is, PageNavigation);