log("Welcome to my resume!");
log("Type 'help' for help" )




register_cmd("help", function(cmd) {
    block_log("Bellow there is a list of command that you can use.");
   
    block_log("ls - List of information about the files and folder.");
    block_log("cat - Read files content and print it.");
    block_log("clear - Clear the terminal screen.");
    block_log("help - print this menu.");
    block_log("date - Print the system's date and time");
});


register_cmd("clear", function(cmd) {
    window.location.reload(true);
});

register_cmd("date", function(cmd) {
    var objToday = new Date(),
        weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
        dayOfWeek = weekday[objToday.getDay()],
        domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
        dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
        curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

  //  document.getElementsByTagName('h1')[0].textContent = today;
   block_log(today);
});


register_cmd("ls", function(cmd) {
    block_log(".");
    block_log("..");
    block_log("about_me.txt");
    block_log("contact.txt");
    block_log("skills.txt");
    block_log("education.txt");
    block_log("github.txt");
    block_log("interests.txt");
});

register_cmd("cat", function(cmd) {
    var parameters = cmd.split(" ").slice(1);
    if(parameters=="about_me.txt"){
        result="I am a MSc physicist with interest in programming and data analysis. A continuous learner that constantly trying to stay up-to-date with the latest technologies." 
        block_log(result);   
    }
    else if(parameters=="contact.txt"){
        result="You can find me by"  //"You can find me by e-mail: aelevthe@protonmail.com or LinkedIn: https://www.linkedin.com/in/alexandros-eleftheriadis."
        result2="e-mail: aelevthe@protonmail.com"
        result3="LinkedIn: https://www.linkedin.com/in/alexandros-eleftheriadis"
        block_log(result);
        block_log(result2);
        block_log(result3);
        block_log(" ");
    }
    else if (parameters=="skills.txt"){
        result4="My currently programming skills are on C/C++, Python and Javascript. Also i am familliar using relational and no-relationala Databases (MySQL, InfluxDB and MongoDb) and vizualisation platforms like Tableau and Grafana."
        block_log(result4);  
    }
    else if (parameters=="education.txt"){
        result5="I got my BSc of Physics in Aristotle University of Thessaloniki when i realised my passion on programming. After that i decided to develope my skills by taking MSc in Computational Physics, where i was able to learn new things and technologies. Also i got some great expierence contibuting to team projects."
        block_log(result5);  
    }
    else if (parameters=="github.txt"){
        result6="https://github.com/alexeleftheriadis"
        block_log(result6);  
    }
    else if (parameters=="interests.txt"){
        result7="On my free time i love cycling, reading books, gaming, dealing with arduino and raspberry projects. Also at this time i am doing some first steps on pen-testing."
        block_log(result7);  
    }   
});


register_cmd("age", function(cmd) {
	block_log("My age is 29");
});

update_user_title("guest@aelevthe:");
