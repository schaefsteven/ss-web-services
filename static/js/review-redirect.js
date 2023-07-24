const UA = navigator.userAgent

if (UA.includes("Firefox") & UA.includes("Mobile")) {
    //Google Reivew links don't work on Firefox mobile, so we send them to the 
    //google maps page instead.
    alert(`It looks like you're on Firefox Mobile. Unfortunately Google Maps doesn't fully support your browser. After you tap "OK", tap the three dots in the top right of your screen and then tap "Open in app," which will take you to the Google Maps app where you can leave a review. Thanks!.`)
    window.location.replace("https://www.google.com/maps?output=search&q=ss+web+services&entry=mc&sa=X&ved=2ahUKEwiHj5-y76aAAxXLN1kFHVohA6YQ0pQJegQIVRAB")
} 
else {
    window.location.replace("https://g.page/r/CZBDPkrt_IWyEBM/review")
}
