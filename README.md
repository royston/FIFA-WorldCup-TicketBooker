# FIFA-WorldCup-TicketBooker
==========================

The script I wrote to automate checking the FIFA ticketing website to notify IFF and when specific tickets became available.

### Timeline:
- In May, 2014, one month before the start of the world cup, I decide that I have procrastinated enough and should after all, go to the World Cup in Brazil.

### The problem:
- I need to get a ticket to some decent matches.
- Don't want to but a ticket off the black market since I don't have a spare kidney to sell.
- The initial ticket's release by FIFA to the public were sold out 6 months back in about 8 nano seconds.

### The solution
1.  ##### Brute Force
> Stay up 24 hours a day, staring at the computer screen, manually refreshing the page.
> Of course, the website needs you to click 5 different buttons over 10 seconds and scroll down each time to refresh the page completely.
2. ##### Automating it
> - Hitting F12 on Chrome, it doesn't take long to figure that the website gets the information about the current status of the tickets for each match through a single XHR request.
> - Luckily, the response is in easy to parse JSON.
> - The script in the repository polls this XHR target, searches the returned JSON and notifies the browser when the number of tickets > 0

