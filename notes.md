---
title: "Forthcoming Features"
author: "Brant Collins"
output: html_document
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
```

  * **Forthcoming feature: **  The level of difficulty is determined by the number of available colors the player would like to play with (4, 6, or 8).
  
  * The MVP will be written with 4 available colors and no option to choose otherwise.  Thus, the complete board will appear on the screen before the start of the game.
  
##### Rueben strongly suggests not removing event listeners

    * Event listeners could be turned off for prior guesses and only active for the current row of pegs
    
    * I'm not sure if it is necessary to remove event listeners, but there is a use-case motivation for doing so.
  