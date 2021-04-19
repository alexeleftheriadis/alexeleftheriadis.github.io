log("Welcome to my resume!");
log("Type 'help' for help" )

// Example Command - Hey

register_cmd("hey", function(cmd) {
    var parameters = cmd.split(" ").slice(1);
    for (var i = 0; i < parameters.length; i++) {
        block_log("Hello " + parameters[i]);
    }
});

// Example Command - Sum


register_cmd("age", function(cmd) {
	block_log("My age is 29");
});

register_cmd("interests", function(cmd) {
	block_log("brb");
});


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
    const parameters = cmd.split(" ").slice(1);
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
    }
    /*else if (parameters="skills.txt"){


    }

*/
  //   block_log(result);
     
});




update_user_title("guest@aelevthe:");
