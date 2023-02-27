const jobs = {
    "google": [
        " Sr. Software Engineer @google",
        "July 2018-Present",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste qui, quibusdam numquam ut ullam ex assumenda quod veritatis reiciendis minus."
    ],
    "microsoft": [
        "Jr. Software Engineer @microsoft",
        "July 2017-July 2018",
        " job 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste qui, quibusdam numquam ut ullam ex assumenda quod veritatis reiciendis minus."
    ],
    "fb": [
        " Software Engineer intern @facebook ",
        "July 2016-July 2017",
        " job 3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste qui, quibusdam numquam ut ullam ex assumenda quod veritatis reiciendis minus."
    ],
    "netflix": [
        " UI designer @netflix", //oth elemnt
        "July 2015-July 2016",//1st element
        " job 4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste qui, quibusdam numquam ut ullam ex assumenda quod veritatis reiciendis minus." //2nd element
    ],
}

function updateWork(id) {
    document.getElementById("role").innerHTML = jobs[id][0];
    document.getElementById("timeline").innerHTML = jobs[id][1];
    document.getElementById("desc").innerHTML = jobs[id][2];
    
}