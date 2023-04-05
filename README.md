# jacexy.github.io
This is a website which documents my (Jace Barrett) programming experience as well as my generalized interests, mainly outside 
of programming. It contains several photos and text elements on the webpage along with few videos and an audio clip. 

I have chosen to re-use my code from A2 and add CSS and JavaScript to it.

I used a guide [5] to create my custom scrollbar. This was not in the assignment but I chose to do it because the default 
scroll bar doesn't fit my website. I also did not know how to set a thumbnail for a <video> tag, so I had to search that [6].
I have additionally chosen to import and use the free, open source web font "Inter" for my body text [7]. I also used the
W3Schools page [8] to help me with styling my form. For my hero image, I used a guide to help me jump to an element without 
using jQuery [9]. In addition, although not in the assignment, I decided to style my radio boxes since I felt like the default 
ones looked unprofessional [10].

*Note about tablet horizontal display* The horizontal tablet display adapts the desktop display, as the desktop layout was
already made with touchscreen and screen size accessibility in mind

===============================================================================================================================

index.html
interests.html
experience.html
(Same on all pages)

<header> tag contains title of the website "Jace" and a table which holds a navigation bar to access each html page
Click on "Interests" or "Experience" from "Home" | index.html --> interests.html || experience.html
Click on "Home" or "Experience" from "My Interests" | interests.html --> index.html || experience.html
Click on "Home" or "My Interests" from "Experience" | experience.html --> index.html || interests.html

<footer> tag contains footer with links to my social media pages as photo hyperlinks & text hyperlinks
"LinkedIn" text with LinkedIn logo image [1] with link to webpage | src="media/linkedin.png" | 
href="https://www.linkedin.com/in/jacexy/
"Email" text with email logo image [2] with link to mailto link | src="media/email.png" | 
href="mailto:Jace@dal.ca"
"Twitter" text with Twitter logo image [3] with link to webpage | src="media/twitter.png" | 
href="https://twitter.com/jacexyy"
"YouTube" text with YouTube logo image [4] with link to webpage | src="media/youtube.png" | 
href="https://www.youtube.com/jacexy"
All images have been colorized to fit my website's color scheme.

-------------------------------------------------------------------------------------------------------------------------------

index.html

Under <header> tag contains an image of myself | src="media/jacephoto.jpg"
Below image contains a paragraph title and paragraph with two hyperlinks: "Dalhousie University" & "FC Bayern Munich" | 
href="https://www.dal.ca/" & href="https://fcbayern.com/"

Below paragraph contains another paragraph title and an audio file with pronounciation for my name | src="media/myname.mp3" 

Under the ordered list is a mail:to contact form with a button and text line to enter the subject | action=mailto:Jace@dal.ca 
NOTE: This is not 100% functional due to it adding "+" symbols instead of spaces in the subject line on the app. This would 
have to be fixed with PHP which I cannot use for this assignment.

Below the email contact form is an ordered list of all the programming languages that I use

Under the ordered list is the <footer>

-------------------------------------------------------------------------------------------------------------------------------

interests.html

Under <header> tag contains paragraph title and paragraph with the same hyperlink | href="https://fcbayern.com/". There is also
a hyperlink with the text "Halifax City Soccer Club" | href="http://www.halifaxcitysoccerclub.ns.ca/" 
Just below that is a video file of me attempting to play football | src="media/football.mp4" 

Below the video is a paragraph title and paragraph with an embedded YouTube video of a random recent FIFA video that I made |
src="https://www.youtube.com/embed/-82Um9m554c"

Under the iframe YouTube video is another paragraph title and paragraph which has an image of my YouTube channel just below it 
| src="media/channel.jpg". *(The original source of the image is the same as the href link in footer)* 

The <footer> is under the image

-------------------------------------------------------------------------------------------------------------------------------

experience.html

Under the <header> tag is an image of my computer setup | src="media/setup.jpg" 
Under the image is a paragraph title and paragraph relating to the photo

Below the paragraph is a paragraph title and an unordered list.

Directly below the list is a table of programming languages and the year I started with them.

Under the photo is a paragraph title and paragraph. Below that paragraph is another paragraph title and a code snippet from an
HTML game project that I worked on a few years ago. Right under the snippet is a download link to the game with a link to a
Google Drive file | href="https://drive.google.com/file/d/1BR33oVEzPPR20Fd8MRwx8IzXKQmHKoYb/view?usp=sharing"

Below the GD file is a paragraph title and paragraph with a image of some thumbnail designs that I created. | 
src="media/graphicdesign.jpg" 
This image only shows on mobile and tablet/small screen layouts. On desktop, this image is split up and separated into 4 images
which have hyperlinks to open the images in a new tab. 
These are src="designgallery1.jpg"
"designgallery2.jpg"
"designgallery3.jpg"
"designgallery4.jpg"

The <footer> is below the photo 

-------------------------------------------------------------------------------------------------------------------------------
===============================================================================================================================

Asset List

experience.html 
index.html 
interests.html 
banner.jpg
banner-invert.jpg 
channel.jpg 
designgallery1.jpg
designgallery2.jpg
designgallery3.jpg
designgallery4.jpg
email.png 
favicon.png 
football.mp4 
graphicdesign.jpg 
jacephoto.jpg
linkedin.png 
myname.mp3
setup.jpg 
thumbnail.png
twitter.png
youtube.png
https://drive.google.com/file/d/1BR330VEzPPR2 OFd8MRwX81ZXKQmHKoYb/view?usp=sharing
mailto:Jace@dal.ca
https://www.youtube.com/jacexy 
https://twitter.com/jacexyy
https://www.linkedin.com/in/jacexy/
https://www.youtube.com/watch?v=-82Um9m554c
README.txt 
code-review.pdf
wireframe.pdf
script.js
styles.css
https://www.dal.ca/
https://fcbayern.com/
http://www.halifaxcitysoccerclub.ns.ca/

===============================================================================================================================

File Structure

A3_jc488290
|   experience.html
|   index.html
|   interests.html
|   README.txt
|   
+---css
|   |   styles.css
|   |   
|   \---fonts
|           Inter-Bold.otf
|           Inter-Bold.woff
|           Inter-Bold.woff2
|           Inter.ttf
|           Inter.woff
|           Inter.woff2
|           
+---media
|       banner-invert.jpg
|       banner.jpg
|       channel.jpg
|       designgallery1.JPG
|       designgallery2.JPG
|       designgallery3.JPG
|       designgallery4.JPG
|       email.png
|       favicon.png
|       football.mp4
|       graphicdesign.jpg
|       jacephoto.jpg
|       linkedin.png
|       myname.mp3
|       setup.jpg
|       thumbnail.png
|       twitter.png
|       youtube.png
|       
+---scripts
|       script.js
|       
\---PDFs
        code-review.pdf
	wireframe.pdf
        
===============================================================================================================================

JavaScript Functions

openSettings(): Opens the webpage's settings modal when the setting's anchor (x) element link is clicked

closeModal(): Closes the webpage's settings modal when the setting's anchor (x) element link is clicked

clickWindow(): Closes the webpage's settings modal when anywhere BESIDES the modal box is clicked

emailAlert(): Prints an alert to inform the user that another window has opened after clicking the email button

jumpToContent(): Uses scrollIntoView to jump to an element (my photo) on the webpage without using jQuery

settingsButton(): Calls all palette "mode" functions along with the closeModal() function when the save settings button is 
clicked. I am able to call all "mode" functions because they won't execute their code unless their respective radio button is
selected in the settings modal

lightMode(): Uses selectors with .style and uses class adding/removing to change the palette (& photo) to the light mode variant

dimMode(): Uses selectors with .style and uses class adding/removing to change the palette (& photo) to the dim mode variant

darkMode(): Uses selectors with .style and uses class adding/removing to change the palette (& photo) to the dark mode variant

===============================================================================================================================

Reference List

[1] LinkedIn Corporation. 2019. LinkedIn: Job search & news. (February 2019). Retrieved February 3, 2023 from 
https://apps.apple.com/ca/app/linkedin-job-search-news/id288429040 

[2] Apple. 2016. Mail. (May 2016). Retrieved February 3, 2023 from https://apps.apple.com/ca/app/mail/id1108187098 

[3] Inc. Twitter. 2009. Twitter. (October 2009). Retrieved February 3, 2023 from 
https://apps.apple.com/ca/app/twitter/id333903271 

[4] Google LLC. 2012. Youtube: Watch, listen, stream. (September 2012). Retrieved February 3, 2023 from 
https://apps.apple.com/ca/app/youtube-watch-listen-stream/id544007664 

[5] W3Schools. How to - custom scrollbar. Retrieved February 28, 2023 from 
https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp 

[6] GeeksforGeeks. 2020. How to set the thumbnail image on video in HTML 5? (April 2020). Retrieved March 1, 2023 from
https://www.geeksforgeeks.org/how-to-set-the-thumbnail-image-on-video-in-html-5/ 

[7] rsms. Inter Font Family. Retrieved March 2, 2023 from https://rsms.me/inter/ 

[8] W3Schools. CSS Forms. Retrieved March 7, 2023 from https://www.w3schools.com/css/css_form.asp 

[9] mdm web docs. Element.scrollIntoView() - web apis: MDN. Retrieved March 31, 2023 from 
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView 

[10] W3Schools. How TO - Custom Checkbox. Retrieved March 31, 2023 from https://www.w3schools.com/howto/howto_css_custom_checkbox.asp