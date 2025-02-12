Website created by Harrison Field, 2025.
Below is for future Wolfson Robotics members about updating or managing the website.

---
# Update these every season:
* Footer links related to the current season
* Robot code and building related text
* Members and roles
* Contact page with any need to be updated contacts

# How to update the information:
## Project Structure:
All information is in the index.html files. Each page is an index.html in the folder that corresponds to the
website URL. Any images that are used once should be stored in the same directory as the index.html, unless it's
the root (/) index.html, then it goes in /assets/img/. Any images that need to be reused throughout the website
go in /assets/img as well.
## How to change the information
A small amount of HTML knowledge is needed to update the information, specifically for managing hyperlinks and
paragraphs, unless just some words being swapped.
For just basic HTML editing the files can be updated using GitHub's built in editor, when done editing
make a commit (saving your changes to GitHub) with a useful name (see previous commits for examples.)
* Recommended HTML tutorials:
    * https://www.w3schools.com/html/
    * https://www.w3schools.com/tags/tag_p.asp
    * https://www.w3schools.com/tags/tag_a.asp
    * https://web.dev/learn/html
    * https://www.youtube.com/watch?v=HD13eq_Pmp8
* However here are some basic html elements:
    * &lt;a> - designates a hyperlink and href="https:/website.com" is where the hyperlink points to.
    * &lt;p> - designates an entire paragraph seperate from other paragraphs
    * &lt;img> - designates an image where src="/assets/img/image.png" is where the image comes from
Please make sure to use the same classes as the other identical elements in the index.html to ensure consistency
across the page.

# How to add new pages and sections:
A fundamental amount of HTML knowledge is needed.
## Add a new page
Make a directory where you would like the page to be located in the website URL.
    ex: 
        /example/
        wolfsonrobotics.org/example/
Make an index.html in that directory, it is reccomended to just copy an index.html from another page and use
it as a base. To make one from scratch it will require deeper knowledge outside this explanation. To add custom
styles to the page, add an page_name.css to the same directory as the index.html.
## Add a new section
It is reccomended to copy the section html elements from other pages or parts of the page.
To change the alignment of the section change the div, that is located under the index.html, class to either
"left-alignment" or "right-alignment".
Update the information or id's accordingly.

