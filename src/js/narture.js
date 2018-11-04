let statusLeft = true;

$(document).ready(function () {
    $('.wallpaper').fadeToggle();
    $('.wallpaper').fadeToggle();
    $('.nav-left').animate({
        height: '100%'
    }, 1000);
    $('.line-shadow').animate({
        height: '100%',
        top: '50%',
    }, 1250);
    $('.description').animate({
        height: '100%',
    }, 1500);
    $('.nav-right').animate({
        height: '100%',
    }, 1750);
});

const leaf = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', 'green1.jpg', 'green2.jpg', 'green3.jpg', 'green4.jpg'];
const tint = ['8.jpeg', '9.jpeg', '10.jpeg', '11.jpeg', '12.jpeg', 'blue1.jpg', 'blue2.jpg', 'blue3.jpg', 'blue4.jpg'];
const fire = ['13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg', '17.jpeg', 'red1.jpg', 'red2.jpg', 'red3.jpg', 'red4.jpg'];
const snow = ['18.jpeg', '19.jpeg', '20.jpeg', '21.jpeg', '22.jpeg', 'white1.jpg', 'white2.jpg', 'white3.jpg', 'white4.jpg'];

function changNarture(value) {
    statusNarture = value;
    var pic = document.getElementById('list');
    let list = [];
    if (statusNarture == 'leaf') {
        list = leaf;
    } else if (statusNarture == 'fire') {
        list = fire;
    } else if (statusNarture == 'snow') {
        list = snow;
    } else if (statusNarture == 'tint') {
        list = tint;
    }

    while (pic.hasChildNodes()) {
        pic.removeChild(pic.lastChild);
    }

    list.forEach(element => {
        var div = document.createElement('div');
        var img = document.createElement('img');
        var title = document.createElement('h3');
        var rule = document.createElement('hr');
        var detail = document.createElement('p');

        // div element
        div.className = 'card';
        div.id = 'pic';
        
        // img element
        img.src = `../assets/image/${element}`;
        img.onclick = function () {
            localStorage.setItem('pictuer', element);
            location.href = '../views/home.html';
        }

        //title element
        title.append('Lorem, ipsum dolor sit amet');
        title.className = 'title';

        // detail element
        detail.append('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore facere veniam, quis aliquam magnam exdistinctio vel quas consequuntur delectus esse, ipsam, saepe amet incidunt ad! Dolor similique doloremque ea!')
        detail.className = 'detail';
        
        // rule element
        rule.className = 'rule';

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(rule);
        div.appendChild(detail);

        pic.appendChild(div);
    });
}
var a = document.getElementsByClassName('wallpaper');
a[0].src = `../assets/image/${localStorage.getItem('pictuer')}`;