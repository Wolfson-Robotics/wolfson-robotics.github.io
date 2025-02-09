class ReusableHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <header>
                    <div id="header-wr">
                        <img class="header-element header-icon" src="/assets/img/wolfson-robotics-icon.png">
                        <a id="header-title" class="header-element">Wolfson Robotics</a>
                    </div>
                    <p id="header-pages">
                        <a class="link-regular header-link" href="/">Home</a>
                        |
                        <a class="link-regular header-link" href="/robot-code">Code</a>
                        |
                        <a class="link-regular header-link" href="/contact">Contact</a>
                    </p>
                    <div id="header-external">
                        <a href="https://www.duvalschools.org/o/swhs" alt="Wolfson Robotics Github">
                            <img class="header-element header-icon" src="/assets/img/DCPS-icon.png">
                        </a>
                        <a href="https://github.com/Wolfson-Robotics" alt="Samuel W. Wolfson High School">
                            <img class="header-element header-icon" src="/assets/img/github-mark.png">
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
                    <img id="footer-icon" src="/assets/img/wolfson-robotics-icon.png">
                    <ul class="links">
                        <h4 class="footer-links-title">Pages</h4>
                        <hr class="footer-links-hr">
                        <li class="link">
                            <a href="/">Home</a>
                        </li>
                        <li class="link">
                            <a href="/contact">Contact</a>
                        </li>
                        <li class="link">
                            <a href="/robot-code">Code</a>
                        </li>
                    </ul>
                    <ul class="links">
                        <h4 class="footer-links-title">Wolfson</h4>
                        <hr class="footer-links-hr">
                        <li class="link">
                            <a href="https://ftc-events.firstinspires.org/2024/team/19916">FTC 19916</a>
                        </li>
                        <li class="link">
                            <a href="https://ftcscout.org/teams/19916">FTC Scout</a>
                        </li>
                        <li class="link">
                            <a href="https://dcps.duvalschools.org/o/swhs">Wolfson Highschool</a>
                        </li>
                        <li class="link">
                            <a href="https://github.com/wolfson-robotics">Wolfson GitHub</a>
                        </li>
                        <li class="link">
                            <a href="https://github.com/wolfson-robotics/into-the-deep">2024-25 Robot Code</a>
                        </li>
                        <li class="link">
                            <a href="https://github.com/wolfson-robotics/Wolfson-Robotics.github.io">Website Code</a>
                        </li>
                    </ul>
                    <ul class="links">
                        <h4 class="footer-links-title">Coding Resources</h4>
                        <hr class="footer-links-hr">
                        <li class="link">
                            <a href="https://github.com">GitHub</a>
                        </li>
                        <li class="link">
                            <a href="https://git-scm.com">Git</a>
                        </li>
                        <li class="link">
                            <a href="https://developer.android.com/studio">Android Studio</a>
                        </li>
                        <li class="link">
                            <a href="https://github.com/FIRST-Tech-Challenge/FtcRobotController">FtcRobotController</a>
                        </li>
                        <li class="link">
                            <a href="https://gm0.org">Gm0</a>
                        </li>
                        <li class="link">
                            <a href="https://github.com/alan412/LearnJavaForFTC/blob/master/LearnJavaForFTC.pdf">Learn Java For FTC</a>
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
