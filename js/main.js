// Header
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<section id="header" class="header">
        <header class="header">
            <a href="/#banner" class="logo">Suavii</a>
            <ul>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#services">Services</a></li>
                <li><a href="/#portfolio">Portfolio</a></li>
                <li><a href="/#faq">FAQ</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul> 
            <div class="toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    </section>`;
    }
}
customElements.define('my-header', MyHeader)

// Footer
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<section id="footer" class="footer">	
            <div class="legal">
                <a href="/legal/cookie-policy.html" target="_blank">Cookie Policy</a>
                <span>|</span>
                <a href="/legal/privacy-policy.html" target="_blank">Privacy Policy</a>
                <span>|</span>
                <a href="/legal/terms-of-service.html" target="_blank">Terms of Service</a>  
            </div>   
            <p class="copyrightText">&copy;<time id="year"></time>&nbsp;-&nbsp;Designed & Developed by<span><a href="#"> SUAVII</a></span></p>
        </section>`;
    }
}
customElements.define('my-footer', MyFooter)
