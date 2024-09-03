# HACC @ ISU Official Website

Welcome to the official website repository for the Hacking and Cyber Security Club at Iowa State University.

## Instructions for Officers

---

### Contents

- [**President**](#president)
- [**Vice President**](#vice-president)
- [**Treasurer**](#treasurer)
- [**Adviser**](#adviser)
- [**Equipment Connoisseur**](#equipment-connoisseur)
  - [Showing Availability](#showing-availability)
  - [Adding New Equipment](#adding-new-equipment)
  - [Removing Equipment](#removing-equipment)
- [**Only Fans Creator & YouTube Manager**](#only-fans-creator--youtube-manager)
- [**Web Chair**](#web-chair)

---

### President

Responsibilities and tasks specific to the President.

### Vice President

Responsibilities and tasks specific to the Vice President.

### Treasurer

Responsibilities and tasks specific to the Treasurer.

### Adviser

Responsibilities and tasks specific to the Adviser.

### Equipment Connoisseur

**Website responsibility:** Managing and maintaining the `/equipment` page and subpages.

Each piece of equipment available for rent is represented by a `.md` file located in the `_equipment/` directory. The properties of each item are defined in the [front matter](https://jekyllrb.com/docs/front-matter/).

#### Showing Availability

The `availability` entry in the front matter determines the availability status displayed on the site. 

- If `availability: Available`, a green `Available` badge is shown.
- If `availability: Unavailable`, a red `Unavailable` badge is shown.

**Example of Available Equipment:**

```
---
layout: equipment
title: Example device
image: example.jpeg
vendorsite: https://example.com
availability: Available
---
Description...
```

**Example of Unavailable Equipment:**

```
---
layout: equipment
title: Example device
image: example.jpeg
vendorsite: https://example.com
availability: Unavailable
---
Description...
```

#### Adding New Equipment

To add a new piece of equipment:

1. **Create a New File:**
   - Copy `_equipmenttemplate.md` and rename it appropriately. Avoid using an `_` at the beginning of the filename, as Jekyll skips files starting with `_`.
   - The file name will be visible in the URL but not displayed on the website.

2. **Edit the Front Matter:**
   - **layout:** Keep as `equipment`.
   - **title:** Enter the equipment name for display.
   - **image:** Add the equipment image to `assets/img/equipment/` and provide the file name here. The site will automatically prepend the path.
   - **vendorsite:** Include the vendor's site link. Leave blank (`vendorsite: `) if not applicable.
   - **availability:** Set to `Available` or `Unavailable`.
   - **description:** Add the equipment description after the second `---`. It supports markdown and HTML.

3. **Save and Add to Directory:**
   - Place the file in the `_equipment/` directory.
   - Wait for the site to recompile (within 2 minutes).

4. **Verify the Addition:**
   - Ensure the equipment appears correctly on the site.

#### Removing Equipment

To remove equipment from the site, simply delete its corresponding `.md` file from the `_equipment/` directory.

### Only Fans Creator & YouTube Manager

**Website responsibility:** Managing and maintaining the `/meetings` page and subpages.

#### Adding Meetings to the Site

Details on how to add meetings to the site.

### Web Chair

Responsibilities and tasks specific to the Web Chair.
