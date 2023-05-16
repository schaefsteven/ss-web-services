---
title: "How to Hide the Navbar in Firefox"
date: 2023-04-18T10:30:58-05:00
draft: false
---

# Context

This is a configuration that I use in order to hide the navbar at the top of Firefox. Why would you want to do that? I like to keep information that I don't need to see right now off of my screen. If I'm looking at a webpage, then I want to look at the webpage and not my bookmarks, my extensions, my tabs, the search bar, etc. If I need to see that hidden information, I like to have a key that I can press in order to access it. I personally find this to be a more enjoyable experience of using my computer because it helps me to focus by removing distractions, and at the same time it creates a cleaner, simpler aesthetic. 

Let me clarify what I mean by "navbar." I'm talking about all of the non-webpage content at the top of the window, including the toolbar with your extensions and the URL bar, the tabs toolbar, the bookmarks toolbar, etc. There doesn't seem to be a well-established name for it, others might call it the navigator toolbox, nav, menu bar, top bar, etc. 

![Firefox navbar](firefox-navbar.png 'This is what I mean by the "navbar"')

My main operating system at the time of writing is Debian Linux, and I'm using i3 as my window manager. But you may find this configuration useful on other operating systems, distros, and window managers as well. 

# Fullscreen mode

The navbar in Firefox is hidden by default in fullscreen mode. While this can work well for some people, it's not exactly the functionality that I want. I want to keep the navbar hidden even when Firefox is not occupying the entirety of my screen. After all, if the window is shorter, then the navbar is taking up a greater percentage of the window and thus allowing us to see less webpage content. 

Fortunately there is a workaround for this that allows us to use fullscreen mode to get closer to our goals. In Firefox, type `about:config` in the URL bar, which will take you to the Advanced Preferences menu. Search for `full-screen-api.ignore-widgets` and set it to `true`. This will cause Firefox to stay inside of its window bounds when going into fullscreen mode. 

Now we can go into fullscreen mode and it effectively just hides the navbar. However, there's no native way in Firefox to have fullscreen be the default when the application is started. For this, I use an extension called [Auto Fullscreen](https://addons.mozilla.org/en-US/firefox/addon/i-auto-fullscreen/?utm_content=addons-manager-reviews-link&utm_medium=firefox-browser&utm_source=firefox-browser). It does what you'd expect. Unfortunately the navbar is visible for a second or two when launching Firefox, but I can live with that. 

## Why not other methods? 

There are other solutions out there to achieve similar results, but there are reasons why I've chosen this method. First of all, all the other methods that I've come across are permanent, so you can't un-hide the navbar. With my method, F11 shows/hides the navbar. I've encountered situations where certain extensions such as Bitwarden will break if the navbar is permanently hidden with some modification to userChrome.css. Also, my method works whether or not you have the bookmarks toolbar hidden, or whatever other configurations you have made to the navbar area. 

# Disabling the hot edge

Once we've done the above configurations, we are very close to our desired behavior, but there are some additional things we can do to make it better. By default in fullscreen mode, moving the cursor to the top edge of the screen will auto-unhide the navbar. I find this extremely annoying, especially because the navbar of most websites is also at the top, so I will constantly overshoot the site's navbar, which unhides Firefox's navbar, which moves the web page down, etc. Also, since we set `full-screen-api.ignore-widgets = true`, the top of Firefox is no longer necessarily the top of the screen. For instance in i3, the border of the window is not considered part of firefox, so to un-hide the navbar with the mouse, your cursor has to be on the exact right row of pixels. Quite annoying. 

We can disable this auto-hide/auto-unhide behaviour altogether with this addition to your userChrome.css file: 

```
/* Disables the "hot edge" at the top of the screen in fullscreen mode that will
 * automatically show the navbar on hover. Use F11 to toggle the navbar instead */
#fullscr-toggler {
    z-index: -1 !important;
}
```

If you don't know how to edit your userChrome.css file, type `about:support` in the URL bar, and find the Profile Directory section. Click Open Directory, which should open your file manager in the correct location. Create a directory named `chrome` and create a file in it called `userChrome.css`. Open that file with a text editor and add the lines above to it.

F11 is the default hotkey to toggle fullscreen mode, which for us now hides/unhides the navbar. 

# Disabling the hiding animation

The final change that I like to make for this setup is to remove the animation when hiding the navbar. Beware however that this does also disable a lot of other animations in Firefox, but I personally like it better. Go back to `about:config` again and add a new Number entry called `ui.prefersReducedMotion` and set it to `1`. 

# Conclusion

That's it! I hope you find this helpful. Customizing Firefox is not for the faint of heart and there can be many unexpected surprises along the way. If you have any questions or comments about this or would like to share info about your own Firefox configs, feel free to reach out!
