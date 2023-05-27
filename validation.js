function validate()
{
    let mock= 193241310251;
    const username = document.getElementById("prn").value;
    if(username == mock)
    {
        window.location.href="index2.html";
        return;
    }
    else
    {
    alert("Invalid PRN");
    }
}