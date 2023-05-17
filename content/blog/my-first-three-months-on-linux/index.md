---
title: "My First Three Months on Linux"
date: 2023-05-17T09:21:22-05:00
draft: true
---
# How it started

It was about three months ago now that I decided to take the big leap and say goodbye to Windows as my daily-driver OS. I had been playing around with WSL, and I was starting to feel quite comfortable in Neovim. I have always been a tinkerer with my computer. That was one of the reasons that I liked Windows, because you can actually do quite a bit of customization with it. It had been a few years since I had done a fresh install of Windows, and for someone like me, you kind of need to do that every so often just to wipe the slate clean and fix all of the little issues you've accidentally left behind while tinkering. But after doing the fresh install and adding all of my custom configurations, I just wasn't satisfied. I was using WSL to do some cool stuff, but the bridge between Windows and WSL, although impressive, is still not the same as running on a Linux system. There are too many little inconsistencies that cause you to make compromises, and WSL really won't help you with your desktop environment. 

# GNOME made me feel the same way that Windows did

Since Ubuntu is what I had been using in WSL, I stuck with it for my first install. I'll give them credit and say that it was a fairly user-friendly way to get started. But as I started trying to configure the desktop to my liking, I was feeling the same annoyances that I had felt in Windows. For instance, I really don't care for the title bars in GNOME. They are way too thick. That takes up a lot of screen real estate, and what info does it provide me? The name of the application? I can tell what the application is by looking at the content in the window, thanks. But I was surprised by the fact that there wasn't a clear way to change the title bars. It seemed like if I wanted to customize things I was going to do the same level of compromising that I was used to on Windows, and that discouraged me. I ran into similar issues with things like changing keyboard layouts, customizing the launcher, etc. 

I decided I needed to try something else. GNOME was what was bothering me for the most part, but at the time I wasn't very clear on what was part of GNOME and what was part of Ubuntu. On top of that, there seems to be a growing distaste for Ubuntu in the Linux community. I won't get into all of the reasons why here, nor do I fully understand all of them. Nevertheless, I decided to try out Debian with no DE (desktop environment) and run the i3 window manager. 

# Give me pain that I control

Using vanilla Debian with i3 has not been sunshine and roses. There have been plenty of frustrating moments of not understanding how to fix something or why something isn't working. But I personally prefer this type of system because my problems are typically a situation of "I don't have a tool installed for this" instead of "the default tool for this doesn't do what I want it to." I find it much easier to install a solution when I come across a problem rather than having to figure out how to rip the default tool out of the DE, because you never know how tightly integrated that tool may be and what else you may be breaking when you do that. Not to mention that in many cases I couldn't figure out **what** component of a DE was even responsible for a behavior that I didn't want. 

# What I'm loving about Linux

I've fallen in love with my tiling window manager. I haven't decided if i3 is ultimately the one for me, but the efficient use of screen real estate is great. It was always frustrated in Windows (and GNOME) by how difficult it seemed to be just to see all of the stuff I wanted to see at once. Being able to instantly move between workspaces with keyboard shortcuts is fantastic.

Along with that, I've been developing a very comprehensive keyboard-centric workflow using i3, Rofi, Tridactyl on Firefox, Ranger, and Neovim. It feels like the right way to use a computer.

Programming also just feels like less of a hassle, especially when it comes to the terminal. Even things as simple as using forward slashes rather than backslashes in file paths just makes sense to me, and now that I'm familiar with Bash, Powershell just seems gross. 

# What's not so great

A few years ago I considered myself a fan of Windows. That opinion has changed, but I've also matured enough that I can more objectively understand the pros and cons of every OS I've used. There are always trade-offs. 

It doesn't just work. You have to make it work. I'm dual-booting my machines because there are some tasks that I just don't have my Linux install set up for, and it will take a fair amount of time to get it set up for those things. Now to be fair, I'd have an easier time with some of these things if I were using a DE, but I've explained above why I'm not, and I understand that trade-off and I'm okay with it.

Hardware support is not as easy. This isn't the fault of Linux directly, it's mostly that hardware manufacturers don't care, and to be fair to them, that's probably a smart business move. But that doesn't change the fact that my audio interface is hamstrung on Linux because I have to use it in class-compliant mode. But in the future I will definitely be careful about what hardware I buy and check for compatibility. 

Software support is not as easy. If the group I'm meeting with wants to use Zoom, I can't change that. Zoom's Linux client is kinda janky. (Not that I love their Windows client.) But you'll have to get used to the fact that a lot of companies will treat you like a second-class citizen if you're on Linux.

There are some other weird problems that you might run into on Linux. I had a lot of issues with screen-tearing when I first got started, and it was frustrating at the time to solve. This is a known issue that's been around for a long time, but still hasn't been fixed across the board. 

# Conclusion

I'm very glad I made the switch. I was quite hesitant at first, but I've fallen in love with the practice of slowly honing in my system and my configuration for **my** computer. It's not the way for everyone(for now), but I hope for a future where we start to see more adoption of Linux and open-source software. 

If you have any questions or comments about this, or would like to tell me how you use your system and recommend me some tools, feel free to reach out! 
