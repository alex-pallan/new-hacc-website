README work in progress

# HACC @ ISU Official Website
Website for the Hacking and Cyber Security Club at Iowa State University.

## Instructions to run the site for Officers
---
### Contents:
- [**President**](#president)
- [**Vice President**](#vice-president)
- [**Treasurer**](#treasurer)
- [**Adviser**](#adviser)
- [**Equipment Connoisseur**](#equipment-connoisseur)
  - [Showing availability](#showing-availability)
  - [Adding new equipment](#adding-new-equipment)
  - [Removing equipment](#removing-equipment)
- [**Only Fans Creator & Youtube Manager**](#only-fans-creator--youtube-manager)
- [**Web Chair**](#web-chair)
---
### President
### Vice President
### Treasurer
### Adviser
### Equipment Connoisseur
**Website responsibility:** Adding to and maintaing the `/equipment` page & subpages.
Each piece of equipment we have for rent that is displayed on our site is given a `.md` file at `_equipment/`. The properties of the equipment are defined in the [front matter](https://jekyllrb.com/docs/front-matter/).
#### Showing availability
One of the entries in the front matter is `availability: `. When the value after this is `Available`, a green `Available` badge is displayed on that equipment on the site. If you mark it `Unavailable`, a red `Unavailable` badge is displayed on that equipment on the site.

Example equipment shown as **Available**:
``` yaml
---
layout: equipment

title: Example device

# Name of the image living in /assets/img/equipment/
image: example.jpeg

# External link to the website of the equipment (optional)
vendorsite: https://example.com

# Must be Available or Unavailable
availability: Available
---
Description...
```

Example equipment shown as **Unavailable**:
``` yaml
---
layout: equipment

title: Example device

# Name of the image living in /assets/img/equipment/
image: example.jpeg

# External link to the website of the equipment (optional)
vendorsite: https://example.com

# Must be Available or Unavailable
availability: Unavailable
---
Description...
```
#### Adding new equipment
As stated above, each piece of equipment gets it's own `.md` file in the `_equipment/` directory. In that directory I have included a template file that can be used to create new equipment named `_equipmenttemplate.md`.

**Before adding new equipment, I encourage you to look at the existing files in the `_equipment/` directory for reference**. Note that `index.md` is not equipment, and is the page that displays equipment.

Follow these steps to add a new piece of equipment on the site:
1. Create a copy of `_equipmenttemplate.md`, and rename it to a name that makes sense.
   - The name of the file is not displayed on the website itself *(although it will be visible in the url)*
   - Make sure the name **does not have an `_` at the beginning**. Jekyll skips any files that start with `_` and it will not be rendered
2. Follow the instructions in the [front matter](https://jekyllrb.com/docs/front-matter/) to fill out the information for the equipment
   - **layout**: Keep this as `equipment`
   - **title**: Enter the name of the equipment as it should be displayed on the site
   - **image**: Add the picture of the equipment to `assets/img/equipment/`, and then **only enter the name of the file** here. The site will prepend the path by itself when rendering
   - **vendorsite**: Add the link to the vendor's site here. If you leave it blank (ex: `vendorsite:  `), then it will automatically be skipped for rendering
   - **availability**: Add `Available` or `Unavailable` here depending on the availability of this item.
   - **description**: The description is after the second `---`. It is rendered as markdown, with the ability to include html if needed.
3. Add the file to the `_equipment` directory and wait for the site to recompile (should be no longer than 2 minutes)
4. Verify that the equipment was added to the site properly
#### Removing equipment
As stated above, each equipment entry is a `.md` file in the `_equipment/` directory. To remove an entry from the site, simply delete it's corresponding file.
### Only Fans Creator & Youtube Manager
**Website responsibility:** Adding to and maintaing the `/meetings` page & subpages.
#### Adding meetings to the site
### Web Chair	
