---
title: "Vaporwave It"
date: 2023-04-17T15:53:47-05:00
draft: false
github: https://github.com/audio-mixer/mixer-web
---
This project was the winning entry for a code jam hosted by [Python Simplified](https://www.youtube.com/c/pythonsimplified) and sponsored by [Apify](https://apify.com/).

I created the audio_processing Python module for this project which applies real-time DSP to an audio stream. The idea was to give the user the ability to apply filters to their audio stream and hear the results immediately.

The module uses Numpy for some of the complex mathematics needed for the DSP processing, and everything else is created from scratch in Python. Although Python is not the optimal language for this sort of task, I was able to create a lot of functionality in the module. Using Numpy was very important because it is implemented with C, which allows it to do convolution calculations fast enough for real-time DSP. 

In order to create this project I relied heavily on info from The Scientist and Engineer's Guide to Digital Signal Processing, which you can read for free [here](https://www.dspguide.com/), and I highly recommend it if you are interested in this topic. 

Apify wrote an article about our team and the project, which you can read [here](https://blog.apify.com/apify-python-simplified-code-jam/).
