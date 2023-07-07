var submit = document.getElementById('submit');
var registeredData=[];
var clear=document.getElementById('clear');

// Adding eventlister for clear
clear.addEventListener('click',()=>{
    registeredData=[];
    let string = JSON.stringify(registeredData);
    localStorage.setItem("registeredData",string);
    location.reload();
})

// Adding eventlister for submit
submit.addEventListener('click',()=>{
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var imageLink = document.getElementById('imglink').value;
    var radios = document.getElementsByName('gender');
    var checkboxes = document.getElementsByName('skills');
    var skills = '';
    var gender = '';

    for(var radio of radios){
        if(radio.checked){
            gender = radio.value;
        }
    }
    for(var index = 0;index<checkboxes.length;index++){
        if(checkboxes[index].checked){
            skills = skills + checkboxes[index].value + ' ';
        }
    }

    // Regular Expressions
    var nameRegularExpression =/[a-zA-Z]+/;
    var emailRegularExpression = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

    // Validation of the entered data
    // Name validation
    if(name.length==0){
        alert("Enter your name ");
        return false;
    }else{
        if(!nameRegularExpression.test(name)){
            alert("Does not match regular expression");
            return false;
        }
    }

    // Email ID validation 
    if(email.length==0)    {
        alert("Enter your Email Address ");
        return false;
    }else{
        if(!emailRegularExpression.test(email)){
            alert("Email does not exist ");
            return false;
        }
    }

    // URL validation 
    if(urlPattern.length==0)
    {
        alert("Enter a website url.");
        return false;
    }
    else{
        if(!(/(?:https?):\/\//.test(website)))
        {
            alert("Please enter HTTP or HTTPS with url.");
            return false;
        }
        if(!urlPattern.test(website))
        {
            alert("Invalid URL.");
            return false;
        } 
    }

    // Gender validation 
    if(gender.length==0){
        alert("Set your gender ");
        return false;
    }

    // Skill validation 
    if(skills.length==0){
        alert("Set your skills from below");
        return false;
    }

    // Storing data in registered_data assosciative array
    registeredData.push({
        name:name,
        gender:gender,
        email:email,
        website:website,
        skills:skills,
        img_link:imageLink,
    });
    console.log(registeredData);

    // Creating new Elements and Tags and Appending them to display
    var tr = document.createElement('tr');
    var tdDescription = document.createElement('td');
    var tdImage = document.createElement('td');
    var name_p = document.createElement('p');
    var gender_p = document.createElement('p');
    var email_p = document.createElement('p');
    var web_p = document.createElement('a');
    var image_p = document.createElement('img'); 
    var skills_p = document.createElement('p');
    var wlink = document.getElementById('website').value;

    name_p.innerText  = name;
    gender_p.innerText=gender;
    email_p.innerText=email;
    web_p.innerText=website;
    web_p.href=wlink;
    web_p.target="_blank";
    skills_p.innerText=skills;
    web_p.id='weblink';
    image_p.src=imageLink;

    // Fade in Effect 
    name_p.style.animation="fadeInEffect ease 3s";
    name_p.style.animationFillMode="forwards";
    name_p.style.animationIterationCount="1";

    gender_p.style.animation="fadeInEffect ease 3s";
    gender_p.style.animationFillMode="forwards";
    gender_p.style.animationIterationCount="1";

    email_p.style.animation="fadeInEffect ease 3s";
    email_p.style.animationFillMode="forwards";
    email_p.style.animationIterationCount="1";

    web_p.style.animation="fadeInEffect ease 3s";
    web_p.style.animationFillMode="forwards";
    web_p.style.animationIterationCount="1";

    skills_p.style.animation="fadeInEffect ease 3s";
    skills_p.style.animationFillMode="forwards";
    skills_p.style.animationIterationCount="1";

    image_p.style.animation="fadeInEffect ease 3s";
    image_p.style.animationFillMode="forwards";
    image_p.style.animationIterationCount="1";

    // Styling of Name,Image,Gender,Email and Weblink
    image_p.style.width = "100%";
    image_p.style.height = "auto";
    image_p.style.float = "right";
    name_p.style.margin="0";
    gender_p.style.margin="0";
    email_p.style.margin="0";

    var table = document.getElementById("tableBordered");
    table.appendChild(tr);
    tr.appendChild(tdDescription);
    tdDescription.appendChild(name_p);
    tdDescription.appendChild(gender_p);
    tdDescription.appendChild(email_p);
    tdDescription.appendChild(web_p);
    tdDescription.appendChild(skills_p);
    tdImage.appendChild(image_p);
    tr.appendChild(tdImage);

    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('website').value="";
    document.getElementsByName('gender').value="";
    document.getElementsByName('skills').value="";
    document.getElementById('imglink').value="";

    var unCheckRadios=document.querySelector('input[type=radio][name=gender]:checked');
    unCheckRadios.checked=false;

    var unCheckCheckBoxes=document.getElementsByName("skills");
    for(var index=0; index<unCheckCheckBoxes.length;index++){
        if(unCheckCheckBoxes[index].checked){
            unCheckCheckBoxes[index].checked=false;
        }
    }
})