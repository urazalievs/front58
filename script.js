function code(){
    let form = document.getElementById("form")
    let country = document.getElementById("country")
    let telCode = document.getElementById("telCode")
    let codeCountry ={
        "99": "+99",
        "78": "+78",
        "77": "+77"
    }
    telCode.value = codeCountry[country.value]
}