# StudyHub Website Starter

This is a responsive static website starter for a student study-material library.

## Files
- `index.html` — website structure and sample study resource cards
- `style.css` — layout and responsive styling
- `script.js` — resource search, category filters, and mobile menu

## Run it on your computer
1. Extract the ZIP file.
2. Open the `studyhub_website` folder.
3. Double-click `index.html` to open it in a browser.

For local development, you can also open the folder in Visual Studio Code and use the Live Server extension.

## Customize your site
- Change the name `StudyHub` in `index.html` to your own brand.
- Update the title and meta description in the `<head>` section.
- Edit the resource cards in `index.html`.
- To link a real PDF, replace a card's `href="#upload-guide"` with a path such as `files/c-programming-notes.pdf` and put that PDF in a `files` folder. Make sure you have permission to share the material.
- For a real multi-page site, create separate pages for major subjects and give each page a unique title and helpful content.

## Publish it and get a public link
This ZIP does not automatically publish a live website. To get a public URL:
1. Create a GitHub account at https://github.com/
2. Create a new public repository and upload `index.html`, `style.css`, and `script.js` (plus any PDFs you want to publish).
3. In the repository, open **Settings → Pages**.
4. Under build/deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. GitHub Pages will provide a public URL after deployment, usually in the form `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

You can also deploy the folder using https://www.netlify.com/ by following its current deployment instructions.

## Google Search
After publishing:
1. Open Google Search Console: https://search.google.com/search-console/about
2. Add and verify your website property.
3. Submit your sitemap if you create one. For this simple starter, there is no generated sitemap yet; create one once you add stable public URLs.
4. Make sure pages are publicly accessible, useful, mobile-friendly, and have unique titles and descriptions.

Google indexing and search ranking are not guaranteed. This starter uses sample resource cards and is not a database-backed upload system. To let multiple users upload content through a dashboard, you would need a backend or a CMS such as WordPress.
