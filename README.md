## Week 1 Assignment: Flixster

Submitted by: **Leena**

Estimated time spent: **12** hours spent in total

### Application Features

#### Core Features

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `preview`
  - Each movie wrapper element should have a class of `insert`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `inner-title`
  - Image - the `img` element should have a class of `poster-images`
  - Votes - the element should have a class of `the_ratiing`
- [x] User can load more current movies by hovering over a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits types in the search form, it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-button` that exits the search, clears results, and shows the current movies displayed previously (My search button updates the results as you type and also clearing the previous results as you type) 
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### Stretch Features

- [ ] Deploy website using GitHub Pages.
- [x] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

`<div style="position: relative; padding-bottom: 59.4059405940594%; height: 0;"><iframe src="https://www.loom.com/embed/0ee31546638342a988bdf3c66c7b40f8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I found the initial lesson on HTML and CSS to be beneficial as it provided a useful recap and enabled me to enhance the appearance of my website. It allowed me to arrange the movie poster components effectively on the site. The second lesson provided valuable insights into generating an API key and making an HTTP request to retrieve image posters from the API. Lab 3 was particularly helpful for my project as it involved integrating a search feature that queried the Giphy API. Additionally, the function responsible for fetching the API images assisted me in understanding how to access the poster_path element.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
Given additional time, there are several improvements I would make to my website. Firstly, I would implement an animation hover effect for each image, creating a pop-up appearance when users hover over them. This would enhance the interactive experience. Additionally, I would expand the website's content beyond just movies by incorporating additional genres. This would provide a more diverse range of options for users to explore. Lastly, I would focus on refining the styling of my preview pop-up box, ensuring it has an appealing and user-friendly design.


- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

During my project demo, I faced a last-minute issue with the window size, causing my movie posters to appear large and disrupt some CSS styles. However, the main components, such as the search and load more pages buttons, worked well. I noticed that my peers had implemented animation hover features on their images, and I'm eager to incorporate similar enhancements to improve the visual appeal of my website.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Big thanks to Abbas for helping me hide the "now playing" movies when typing in the search form. Peter's assistance with the load more pages button was invaluable. Elena's guidance on adding an onclick feature to the images greatly enhanced the interactivity of my website.
