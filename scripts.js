//Put navbar in <div id="hacc-navbar"></div> on page load
document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM content to be fully loaded
  var haccNavbar = document.getElementById("hacc-navbar");

  // Check if the element with id "hacc-navbar" exists
  if (haccNavbar) {
    // Replace the content of the "hacc-navbar" div with the navbar HTML
    haccNavbar.innerHTML = `
          <!-- Start navbar -->
          <div class="container-xxl pt-2">
              <nav class="navbar navbar-expand-lg m-2 mt-0">
                  <div class="container-fluid">
                      <a class="navbar-brand fs-2" href="/index.html">./HACC</a>
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
                                  <a class="nav-link" href="/index.html">Home</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="/meetings.html">Meetings</a>
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
                                          <a class="dropdown-item" href="/learn/puzzlers.html">Puzzlers</a>
                                      </li>
                                      <li>
                                          <a class="dropdown-item" href="https://iasg.github.io/CDCHelpSite/">CDC Help <i class="bi bi-box-arrow-up-right"></i></a>
                                      </li>
                                  </ul>
                              </li>
                              <li class="nav-item">
                              <a class="nav-link" href="/equipment/equipment.html">Equipment</a>
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
                                          <a class="dropdown-item " href="/about.html">About HACC</a>
                                      </li>
                                      <li>
                                          <a class="dropdown-item" href="/projects.html">Projects</a>
                                      </li>
                                      <li>
                                          <a class="dropdown-item" href="/sponsors.html">Sponsors</a>
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
});

// Fill the Upcoming Events with the data from /documents/events.json
fetch("/documents/events.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the container where the cards will be added
    const container = document.getElementById("upcoming-events");

    // Loop through each event in the JSON data
    data.forEach((event) => {
      // Format the date
      const eventDate = new Date(event.date);
      const formattedDate = eventDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      // Calculate days until event
      const currentDate = new Date();
      const timeDiff = eventDate.getTime() - currentDate.getTime();
      let daysUntilEvent = Math.ceil(timeDiff / (1000 * 3600 * 24));
      let daysText = "days";
      if (daysUntilEvent === 1) {
        daysText = "day";
      }

      // Create the link HTML or "No link" text if linkURL exists
      let linkHTML = "";
      if (event.linkURL) {
        linkHTML = `<a href="${event.linkURL}" target="_blank" class="card-link">${event.linkTitle}</a>`;
      } else {
        linkHTML = `<span class="text-body-secondary">No link</span>`;
      }

      // Create the card HTML
      const cardHTML = `
        <li>
          <div class="card" style="width: 18rem;">
            <div class="card-header">${event.category}</div>
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${formattedDate}</h6>
              ${linkHTML}
            </div>
            <div class="card-footer">${daysUntilEvent} ${daysText}</div>
          </div>
        </li>
      `;

      // Append the card HTML to the container
      container.innerHTML += cardHTML;
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));
