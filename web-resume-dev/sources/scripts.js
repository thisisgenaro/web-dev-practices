var dataJson = "sources/main-data.json"

function importJsonData()
{

    fetch(dataJson)
    .then(response => {
        return response.json();
    })
    .then(data => logJsonData(data)
    );

}

function logJsonData(data)
{   
    /*
    console.log(data.Experience);
    console.log(Object.keys(data.Experience[0]));
    */
   
    data.Experience.forEach(writeExperience);
    data.Education.forEach(writeEducation);
    data.Skills.forEach(writeSkills);
    data.Personality.forEach(writeTreats);
    data.Social.forEach(writeSocial);

}

function writeExperience(experience)
{

    /* -----    Expected Output - Example v2

            <li class="experience item">
                <div class="content">
                    <h2>LEAD IT INFRASTRUCTURE ENGINEER</h2><br>
                    <em>DPWorld Caucedo</em><span class="timespan">2021 - Current</span><br>
                    Responsible for planning, managing and implementing IT Infrastructure resources and their usage through all the port and logistics solutions offered in the terminal, including networks, servers, high availability, site redundancy, UPS, cloud, and more.
                </div>
            </li>
    
   */

    /* -----    Expected Output - Example v3

            <li class="experience item">
                <div class="content">
                    <h2>DPWorld Caucedo</h2><br>
                        <ul>
                            <li>
                                <em>LEAD IT INFRASTRUCTURE ENGINEER</em><span class="timespan">2021 - Current</span><br>
                                <p>Responsible for planning, managing and implementing IT Infrastructure resources and their usage through all the port and logistics solutions offered in the terminal, including networks, servers, high availability, site redundancy, UPS, cloud, and more.<p>
                            </li>
                            <li>
                            <em>LEAD IT INFRASTRUCTURE ENGINEER</em><span class="timespan">2021 - Current</span><br>
                            <p>Responsible for planning, managing and implementing IT Infrastructure resources and their usage through all the port and logistics solutions offered in the terminal, including networks, servers, high availability, site redundancy, UPS, cloud, and more.<p>
                            </li>
                        </ul>
                </div>
            </li>
    
   */

    /*console.log(experience);*/
    var companies = Object.keys(experience);
    /*console.log(companies);*/

    var HTMLOutput = document.createElement('li');
    HTMLOutput.classList.add('experience','item');

    function displayData(company)
    {
        var companyExperience = experience[company];
        /*
        console.log(company);
        console.log(companyExperience);
        */

        var content = document.createElement('div');
        content.setAttribute('class','content');

        var companyHTML = document.createElement('h2');
        companyHTML.innerText = (company);
        content.appendChild(companyHTML);
        content.appendChild(document.createElement('br'));
        var list = content.appendChild(document.createElement('ul'));

        companyExperience.forEach(addExperience);

        content.appendChild(list);

        console.log(content);

        HTMLOutput.appendChild(content);

        function addExperience(exp)
        {
            var startdate = exp.startdate;
            var enddate = exp.enddate;
            var timespan = startdate + " - " + enddate
            var role = exp.role;
            var description = exp.description;
    
            var companyListElement = document.createElement('li');
    
            var roleHTML = document.createElement('em');
            roleHTML.innerText = role;
            companyListElement.appendChild(roleHTML);
    
            var timespanHTML = document.createElement('span');
            timespanHTML.innerText = timespan;
            companyListElement.appendChild(timespanHTML);
            companyListElement.appendChild(document.createElement('br'));
            companyListElement.innerHTML += description;
            companyListElement.appendChild(document.createElement('br'));
    
            list.appendChild(companyListElement);
    
        }

    }

    companies.forEach(displayData);

    /*

    var startdate = experience.startdate;
    var enddate = experience.enddate;
    var timespan = startdate + " - " + enddate
    var role = experience.role;
    var company = experience.company;
    var description = experience.description;

    */
    document.getElementById("work-experience").appendChild(HTMLOutput);

}

function writeEducation(education)
{
    /*
        <li class="education item">
            <div class="content">
                <h2>ELECTRONICS ENGINEERING</h2><br>
                <em>Mention Communications</em><span class="year">2014</span><br>
                UNAPEC
            </div>
        </li>
    */

        var year = education.year;
        var degree = education.degree;
        var school = education.school;
        var mention = education.specialty;
    
        var HTMLOutput = document.createElement('li');
        HTMLOutput.classList.add('education','item');
    
        var content = document.createElement('div');
        content.setAttribute('class','content');
    
        var degreeHTML = document.createElement('h2');
        degreeHTML.innerText = degree;
        content.appendChild(degreeHTML);
        content.appendChild(document.createElement('br'));
    
        var mentionHTML = document.createElement('em');

        if(mention){
            mentionHTML.innerText = ("Mention: " + mention);
            content.appendChild(mentionHTML);
            content.appendChild(document.createElement('br'));
        }

    
        var yearHTML = document.createElement('span');
        yearHTML.innerText = 'Finished: ' + year;
        content.appendChild(yearHTML);
        content.appendChild(document.createElement('br'));
        content.innerHTML += school;
    
        HTMLOutput.appendChild(content);
        document.getElementById("education").appendChild(HTMLOutput);

}

function writeSkills(skill)
{

    /*
    <li class="skill item">
        <div class="skillBar">
            <div id="skillName">
            skillName
            </div>
        </div>
    </li>
    */

    var skillName = skill.skill;
    var skillRate = skill.rate;

    var HTMLOutput = document.createElement('li');
    HTMLOutput.classList.add('skill','item');

    var skillBar = document.createElement('div');
    skillBar.setAttribute('class','skillBar');

    var skillID = document.createElement('div');
    skillID.setAttribute('id',skillName);

    skillID.innerText = skillName;
    skillID.style.width = skillRate + "%";

    HTMLOutput.appendChild(skillBar);
    HTMLOutput.appendChild(skillID);

    document.getElementById("skills").appendChild(HTMLOutput);
}

function writeTreats(treat)
{
    /*
        <li class="treat item">
            <div class="personality">treat</div>
        </li>
    */

    var personalTreat = treat.treat;
    var HTMLOutput = document.createElement('li');
    HTMLOutput.classList.add('treat','item');

    var treatHTML = document.createElement('div');
    treatHTML.innerText = personalTreat;

    HTMLOutput.appendChild(treatHTML);
    document.getElementById('personality-treats').appendChild(HTMLOutput);
}

function writeSocial(social)
{
    var socialName = social.site;
    var socialURL = social.url;

    var HTMLOutput = document.createElement('li');
    var socialHtml = document.createElement('div');
    var socialLink = document.createElement('a');

    HTMLOutput.classList.add('social','item','link');
    socialLink.innerText = socialName;
    socialLink.setAttribute('href', socialURL);
    socialHtml.appendChild(socialLink);
    HTMLOutput.append(socialHtml);

    document.getElementById('social-links').appendChild(HTMLOutput); 
}