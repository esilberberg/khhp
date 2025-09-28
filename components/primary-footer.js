const primaryFooter = document.getElementById('primary-footer')

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}
const currentYear = getCurrentYear();

const footerContent = `
<div class="primary-footer-content">
  <div class="footer-top-line">
    <img src="media/khhp-logo-white.png" alt="Kentuck Hispanic Heritage Project">
    <div class="footer-socials">
        <a href="https://www.instagram.com/kyhispanicheritageproject/" target="_blank" rel="noopener noreferrer" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="mailto:KYHispanicHeritageProject@gmail.com" title="Email"><i class="fa-solid fa-envelope"></i></a>
    </div>
  </div>
  <p>All rights reserved KHHP &copy; 2023-${currentYear} | Site by <a href="https://github.com/esilberberg" target="_blank" rel="noopener noreferrer">esilberberg</a></p>
</div>
`

primaryFooter.innerHTML = footerContent;