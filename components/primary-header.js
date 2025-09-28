const primaryHeader = document.getElementById('primary-header')

const headerContent = `
<div class="header-content">
<a href="index.html" class="nav-logo"><img src="media/khhp-logo.png" alt="KHHP logo" class="nav-logo-img"></a>
<div class="header-right">
    <div class="toggle-languages" id="language-navbar">
        <span class="lang-btn"><a href="" data-lang="es" class="lang-link" aria-label="Español" lang="es">ES</a></span> / <span class="lang-btn"><a href="" data-lang="en" class="lang-link lang-link-active" aria-label="English" lang="en">EN</a></span>
    </div>
    <nav class="top-navigation">
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="index.html" class="nav-link" id="nav-home">Home</a>
            </li>
            <li class="nav-item">
                <a href="sources.html" class="nav-link" id="nav-sources">Sources</a>
            </li>
            <li class="nav-item">
                <a href="stories.html" class="nav-link" id="nav-stories">Stories</a>
            </li>
            <li class="nav-item">
                <a href="contact.html" class="nav-link" id="nav-contact">Contact</a>
            </li>
        </ul>
        <div class="top-navigation-hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
</div>
</div>
`
primaryHeader.innerHTML = headerContent;