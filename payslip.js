let calclu = () => {
    let bp = parseInt(document.getElementById("bsicid").value);
    let hra = document.getElementById("hraid").value = bp * (20 / 100);
    let da = document.getElementById("daid").value = bp * (10/ 100);
    let travel = document.getElementById("travelid").value = bp * (25 / 100);
    let pf = document.getElementById("pfid").value = bp * (30 / 100)
    hra = parseInt(hra);
    da = parseInt(da);
    travel = parseInt(travel);
    pf = parseInt(pf);
    let gross = document.getElementById("grossid").value = bp + hra + da + travel + pf;
    gross = parseInt(gross);
    let net = document.getElementById("netid").value = gross - pf;
    net = parseInt(net);
    document.getElementById("one").innerHTML = `<tr><td>${bp}</td>
<td>${hra}</td>
<td>${da}</td>
<td>${travel}</td>
<td>${pf}</td>
<td>${gross}</td>
<td>${net}</td>
</tr>`
}