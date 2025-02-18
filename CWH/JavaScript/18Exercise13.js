function createCard (title, cName, views, months, duration, thumbnail)
{   
    if(views > 999 && views < 1000000)
    {
        views = views / 1000;
        views = `${views}` + "k";
    }
    let html = `
            <div class="thumbnail">
                <img class="image" src="${thumbnail}" alt="thumbnail" >
                <div class="duration"><label>${duration}</label></div>
            </div>

            <div class="info">
                <label><h2>${title}</h2></label>
                <label><p class="main-info">${cName} . ${views} . ${months} months ago</p></label>
            </div>
            `

        var newCard = document.createElement("div");
        newCard.setAttribute("class","container");
        newCard.innerHTML = html;

        document.querySelector(".container").after(newCard);
    
}

createCard("Tutorial #1","CodeWithHarry","1000","2","31:20","https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/jujutsu-kaisen-satoru-gojo.jpg");

createCard("Tutorial #2","CodeWithHarry","500","2","31:20","https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/jujutsu-kaisen-satoru-gojo.jpg");

createCard("Tutorial #3","CodeWithHarry","100000","2","31:20","https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/jujutsu-kaisen-satoru-gojo.jpg");
createCard("Tutorial #3","CodeWithHarry","100000","2","31:20","://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/jujutsu-kaisen-satoru-gojo.jpg");
