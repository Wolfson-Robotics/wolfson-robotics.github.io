class ReusableHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <header>
                <div id="header-left">
                    <img class="header-element header-icon" src="assets/img/wolfson-robotics-icon.png">
                        <a id="header-title" class="header-element">Wolfson Robotics</a>
                </div>
                <div id="header-right">
                    <a href="https://www.duvalschools.org/o/swhs" alt="Wolfson Robotics Github">
                        <img class="header-element header-icon" src="assets/img/DCPS-icon.png">
                    </a>
                    <a href="https://github.com/Wolfson-Robotics" alt="Samuel W. Wolfson High School">
                        <img class="header-element header-icon" src="assets/img/github-mark.png">
                    </a>
                </div>
            </header>
        `;
    }
}
customElements.define('reusable-header', ReusableHeader);

class ReusableFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div id="footer-left">
                    <img id="footer-icon" src="assets/img/wolfson-robotics-icon.png">
                    <ul class="links">
                        <!--<h4 class="footer-links-title">Temp</h4>
                        <hr class="footer-link-hr">-->
                        <li class="link">
                            <a href="https://github.com/Wolfson-Robotics">GitHub</a>
                        </li>
                        <li class="link">
                            <a href="https://github.com/Wolfson-Robotics/Wolfson-Robotics.github.io">Website Repo</a>
                        </li>
                        <li class="link">
                            <a href="https://ftc-events.firstinspires.org/team/19916">FTC Team</a>
                        </li>
                        <li class="link">
                            <a href="TODO: Find out">TODO Instagram</a>
                        </li>
                        <li class="link">
                            <a href="TODO: Find out">TODO more</a>
                        </li>
                    </ul>
                </div>
                <div id="footer-right">
                    <div id="footer-affiliation">
                        Wolfson Robotics, Samuel W. Wolfson High School, 2025<br>
                        7000 Powers Ave, Jacksonville, FL 32217<br>
                        Website developed by Harrison Field<br>
                        Licensed under the MIT License<br>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('reusable-footer', ReusableFooter);