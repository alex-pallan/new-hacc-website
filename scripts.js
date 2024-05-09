// Function to fetch the contents of the Markdown file
async function fetchMarkdownFile(path) {
  try {
    const response = await fetch(path);
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error fetching Markdown file:", error);
    throw error;
  }
}

// Function to parse Markdown events and generate HTML
function parseEvents(markdownText) {
  try {
    const events = markdownText.match(
      /(?:^|\n)# (.+?)\n## (\d{2}\/\d{2}\/\d{4})\n### (.+?)\n\[(.+?)\]\((.+?)\)/g
    );

    if (!events || !Array.isArray(events)) {
      console.error("No events found in Markdown text:", markdownText);
      return "";
    }

    const today = new Date();

    const html = events
      .map((event) => {
        try {
          const [, name, date, type, linkText, link] = event.match(
            /# (.+?)\n## (\d{2}\/\d{2}\/\d{4})\n### (.+?)\n\[(.+?)\]\((.+?)\)/
          );
          const eventDate = new Date(date);
          const daysUntilEvent = Math.ceil(
            (eventDate - today) / (1000 * 60 * 60 * 24)
          );

          // Format eventDate to long date format (e.g., "September 27, 2024")
          const formattedDate = eventDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });

          // Generate link section only if link is provided
          const linkSection = link
            ? `<a href="${link}" target="_blank" class="card-link">${linkText}</a>`
            : "";

          return `
              <li>
                <div class="card" style="width: 18rem">
                  <div class="card-header">${type}</div>
                  <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                      ${formattedDate}
                    </h6>
                    ${linkSection}
                  </div>
                  <div class="card-footer">${daysUntilEvent} days</div>
                </div>
              </li>
            `;
        } catch (error) {
          console.error("Error parsing event:", event);
          throw error;
        }
      })
      .join("");

    return `<ul>${html}</ul>`;
  } catch (error) {
    console.error("Error parsing events:", error);
    throw error;
  }
}

// Function to update the HTML of upcoming events div
async function updateUpcomingEvents() {
  try {
    const markdownPath = "/documents/events.md";
    const markdownText = await fetchMarkdownFile(markdownPath);
    const html = parseEvents(markdownText);
    document.getElementById("upcoming-events").innerHTML = html;
  } catch (error) {
    console.error("Error updating upcoming events:", error);
  }
}

// Call the function to update upcoming events when the page loads
document.addEventListener("DOMContentLoaded", updateUpcomingEvents);
