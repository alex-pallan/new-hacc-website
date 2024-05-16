//Put navbar in <div id="hacc-navbar"></div> on page load
document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM content to be fully loaded
  var haccNavbar = document.getElementById("hacc-navbar");
  var haccFooter = document.getElementById("hacc-footer");

  // Check if the element with id "hacc-navbar" exists
  if (haccNavbar) {
    // Replace the content of the "hacc-navbar" div with the navbar HTML
    haccNavbar.innerHTML = `
          <!-- Start navbar -->
<div class="container-xxl pt-2">
    <nav class="navbar navbar-expand-lg m-2 mt-0">
        <div class="container-fluid">
            <a class="navbar-brand fs-2" href="{{ site.baseurl }}/index.html">./HACC</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ site.baseurl }}/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="{{ site.baseurl }}/meetings/index.html">Meetings</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Learn
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="{{ site.baseurl }}/learn/puzzlers/index.html">Puzzlers</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="https://iasg.github.io/CDCHelpSite/">CDC Help <i class="bi bi-box-arrow-up-right"></i></a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ site.baseurl }}/equipment/index.html">Equipment</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            About Us
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="{{ site.baseurl }}/about/index.html">About HACC</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ site.baseurl }}/projects/index.html">Projects</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ site.baseurl }}/sponsors/index.html">Sponsors</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
<!-- End navbar -->
      `;
  }

  // Check if the element with id "hacc-footer" exists
  if (haccFooter) {
    // Replace the content of the "hacc-navbar" div with the navbar HTML
    haccFooter.innerHTML = `
    <!-- Footer -->
    <div class="container-xxl px-3 mt-5">
      <hr class="footer-hr" />
      <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4"
      >
        <p class="col-md-4 mb-0 text-body-secondary">
          Hacking and Cyber Security Club<br />Contact us:
          <a href="mailto: hacc-cabinet@iastate.edu"
            >hacc-cabinet@iastate.edu</a
          >
        </p>

        <a
          href="/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-question-diamond"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"
            />
            <path
              d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"
            />
          </svg>
        </a>

        <ul class="nav col-md-4 justify-content-end fs-2">
          <li class="nav-item">
            <a
              href="https://discord.gg/3xxec7V5zN"
              class="nav-link px-2 text-body-secondary"
              target="_blank"
              ><i class="bi bi-discord"></i
            ></a>
          </li>
          <li class="nav-item">
            <a
              href="https://github.com/ISU-HACC"
              class="nav-link px-2 text-body-secondary"
              target="_blank"
              ><i class="bi bi-github"></i
            ></a>
          </li>
          <li class="nav-item">
            <a
              href="https://www.facebook.com/infasgroup"
              class="nav-link px-2 text-body-secondary"
              target="_blank"
              ><i class="bi bi-facebook"></i
            ></a>
          </li>
          <li class="nav-item">
            <a
              href="https://youtube.com/channel/UC-rLOtGfHGx9N1mlNNEwJNQ"
              class="nav-link px-2 text-body-secondary"
              target="_blank"
              ><i class="bi bi-youtube"></i
            ></a>
          </li>
        </ul>
      </footer>
    </div>
    <!-- End Footer -->
      `;
  }
});
