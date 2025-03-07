class CommonMeta extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <meta name="author" content="Wolfson Robotics">
            <meta name="keywords" content="HTML, CSS, JavaScript">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">

            <meta name="twitter:card" content="summary">
            <meta name="twitter:creator" content="Wolfson Robotics">
            <meta name="twitter:title" content="Wolfson Robotics - FTC 19916">
            <meta name="twitter:description" content="We are the First Tech Challenge robotics team of Samuel Wolfson High School, the WOLFPACK.">
            <meta name="twitter:image" content="/assets/img/wolfson-robotics-title.png">

            <meta name="og:title" content="Wolfson Robotics - FTC 19916">
            <meta name="og:description" content="We are the First Tech Challenge robotics team of Samuel Wolfson High School, the WOLFPACK.">
            <meta name="og:image" content="/assets/img/wolfson-robotics-title.png">
            <meta name="og:type" content="website">
            <meta name="og:locale" content="en_US">
        `;
    }

}
customElements.define('common-meta', CommonMeta);