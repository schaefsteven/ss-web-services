const UA = navigator.userAgent

if (UA.includes("Firefox") & UA.includes("Mobile")) {
    //Google Reivew links don't work on Firefox mobile, so we send them to the 
    //google maps page instead.
    window.location.replace("https://www.google.com/maps/place/SS+Web+Services/@36.9726673,-86.5600474,11z/data=!4m8!3m7!1s0x25cbf542c4ac53a7:0xb285fced4a3e4390!8m2!3d36.9727495!4d-86.4199629!9m1!1b1!16s%2Fg%2F11v03dq8wd?entry=ttu")
} 
else {
    window.location.replace("https://g.page/r/CZBDPkrt_IWyEBM/review")
}
