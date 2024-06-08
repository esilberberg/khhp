const primaryHeader = document.getElementById('primary-header')

const headerContent = `
<div class="header-content">
<a href="index.html" class="nav-logo"><img src="media/khhp-logo.png" alt="KHHP logo" class="nav-logo-img"></a>
<div class="header-right">
    <div class="toggle-languages">
        <p><span class="lang-btn"><a href="#">ES</a></span> / <span class="lang-btn"><a href="#">EN</a></span></p>
    </div>
    <nav class="top-navigation">
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="index.html" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="about.html" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="sources.html" class="nav-link">Sources</a>
            </li>
            <li class="nav-item">
                <a href="stories.html" class="nav-link">Stories</a>
            </li>
            <li class="nav-item">
                <a href="help.html" class="nav-link">Help</a>
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