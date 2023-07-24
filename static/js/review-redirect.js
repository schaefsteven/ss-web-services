const UA = navigator.userAgent

if (UA.includes("Firefox") & UA.includes("Mobile")) {
    //Google Reivew links don't work on Firefox mobile, so we send them to the 
    //google maps page instead.
    window.location.replace("https://www.google.com/maps?output=search&q=ss+web+services&entry=mc&sa=X&ved=2ahUKEwi8rp2G6KaAAxXfGFkFHZOaBsAQ0pQJegQIYBAB")
} 
else {
    window.location.replace("https://g.page/r/CZBDPkrt_IWyEBM/review")
}
