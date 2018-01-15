# Oto no Kumo
---
Oto no Kumo is a web application used to upload, listen, and respond to music. Inspired by SoundCloud (Oto no Kumo is Japanese for __Cloud of Sound__), I constructed Oto no Kumo with Ruby on Rails for the backend, and React and Redux for the frontend.

See the live site [here!](http://oto-no-kumo.herokuapp.com/#/welcome)

#### Welcome Page
![Alt Text](https://i.imgur.com/HGb06b9.png)
The welcome page was designed with the SoundCloud welcome page in mind. Each song is playable even without logging in, but they will not be linked to their corresponding show page.

#### Music Player
![Alt Text](https://i.imgur.com/cdTjLmb.png)
The music player will show up whenever the user picks a song to play. The song play is continuous and receives props through Redux's store, updating whenever the song should be started, paused, or resumed.

###### Progress Bars
The progress bar in the music player, along with all subsequent progress bars on a song show page:

![Alt Text](https://i.imgur.com/iWNF9Uh.png)
or on a song list item:

![Alt Text](https://i.imgur.com/KFXWiA8.png)

are all HTML `<range>` elements whose max value is the length of the song, which is fed to them upon the loading of the song. In addition, as the song is played by the HTML `<audio>` element, it constantly updates its current time and sends that information to the redux store. The value of the range slider is whatever the current time in the progress bar's props is.

Seeking a song works in a similar matter, where upon clicking the slider runnable track, the value at the clicked position (which is the time of the song in seconds), is sent to the redux store, which the main `<auido>` element receives, and then sets its current time to its received time.

Due to the reliance on the Redux store, whenever multiple progress bars are active, they will have be synched to the same position, which no noticeable delay.

#### Features
* User creation and login
* Song creating, updating, deleting, and listening
* Continuous play on the music player that is fixed to the bottom of the window
* User comments on songs
* Listing songs on profile page where user commented on
* Charts for each genre, showcasing the top 10 most popular songs based on play count

#### Future Features
- [ ] Song queue where users can put songs to play after the current one ends
- [ ] Following system
- [ ] Search bar
- [ ] Wave form for progress bar on track show and listed items
