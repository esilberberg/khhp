const primaryFooter = document.getElementById('primary-footer')

const footerContent = `
<div class="primary-footer-content">
<img src="media/khhp-logo-white.png" alt="Kentuck Hispanic Heritage Project">
<div class="footer-socials">
    <a href="https://www.instagram.com/kyhispanicheritageproject/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-instagram"></i></a>
    <a  href="https://www.facebook.com/KYHispanicHeritageProject" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-facebook"></i></a>
</div>
<p>info@khhp.org</p>
<p>All rights reserved KHHP &#169; 2023-2024 | Site by <a href="https://github.com/esilberberg" target="_blank" rel="noopener noreferrer">esilberberg</a></p>
</div>
`

primaryFooter.innerHTML = footerContent;