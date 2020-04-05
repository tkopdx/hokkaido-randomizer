var dataController = (function() {

    var data = {
        cities: ['Sapporo',
        'Ebetsu',
        'Chitose',
        'Eniwa',
        'Kitahiroshima',
        'Ishikari',
        'Tobetsu',
        'Yubari',
        'Bibai',
        'Takikawa',
        'Sunagawa',
        'Utashinai',
        'Fukagawa',
        'Nanporo',
        'Naie',
        'Yuni',
        'Naganuma',
        'Kuriyama',
        'Tsukigata',
        'Urausu',
        'Shintotsukawa',
        'Moseushi',
        'Chippubetsu',
        'Uryu',
        'Hokuryu',
        'Numata',
        'Horokanai',
        'Ashibetsu',
        'Hakodate',
        'Matsumae',
        'Fukushima',
        'Shiriuchi',
        'Kikonai',
        'Nanae',
        'Shikabe',
        'Mori',
        'Oshamanbe',
        'Esashi',
        'Kaminokuni',
        'Assabu',
        'Otobe',
        'Okushiri',
        'Imakane',
        'Otaru',
        'Shimamaki',
        'Suttsu',
        'Kuromatsunai',
        'Rankoshi',
        'Niseko',
        'Makkari',
        'Rusutsu',
        'Kimobetsu',
        'Kyogoku',
        'Kutchan',
        'Kyowa',
        'Tomari',
        'Kamoenai',
        'Shakotan',
        'Furubira',
        'Niki',
        'Yoichi',
        'Akaigawa',
        'Asahikawa',
        'Shibetsu',
        'Nayoro',
        'Furano',
        'Takasu',
        'Higashikagura',
        'Toma',
        'Pippu',
        'Aibetsu',
        'Kamikawa',
        'Higashikawa',
        'Biei',
        'Kamifurano',
        'Nakafurano',
        'Minamifurano',
        'Shimukappu',
        'Wassamu',
        'Kembuchi',
        'Shimokawa',
        'Bifuka',
        'Otoineppu',
        'Nakagawa',
        'Rumoi',
        'Mashike',
        'Obira',
        'Tomamae',
        'Haboro',
        'Shosanbetsu',
        'Enbetsu',
        'Teshio',
        'Horonobe',
        'Wakkanai',
        'Sarufutsu',
        'Hamatonbetsu',
        'Nakatonbetsu',
        'Toyotomi',
        'Rebun',
        'Rishiri',
        'Rishirifuji',
        'Kitami',
        'Abashiri',
        'Monbetsu',
        'Bihoro',
        'Tsubetsu',
        'Shari',
        'Kiyosato',
        'Koshimizu',
        'Kunneppu',
        'Oketo',
        'Saroma',
        'Engaru',
        'Yubetsu',
        'Takinoue',
        'Okoppe',
        'Omu',
        'Muroran',
        'Tomakomai',
        'Date',
        'Noboribetsu',
        'Toyoura',
        'Sobetsu',
        'Shiraoi',
        'Atsuma',
        'Biratori',
        'Niikappu',
        'Urakawa',
        'Samani',
        'Erimo',
        'Obihiro',
        'Otofuke',
        'Shihoro',
        'Kamishihoro',
        'Shikaoi',
        'Shintoku',
        'Shimizu',
        'Memuro',
        'Nakasatsunai',
        'Sarabetsu',
        'Taiki',
        'Hiroo',
        'Makubetsu',
        'Ikeda',
        'Toyokoro',
        'Honbetsu',
        'Ashoro',
        'Rikubetsu',
        'Urahoro',
        'Kushiro',
        'Akkeshi',
        'Hamanaka',
        'Shibecha',
        'Teshikaga',
        'Tsurui',
        'Shiranuka',
        'Nemuro',
        'Betsukai',
        'Nakashibetsu',
        'Shibetsu',
        'Rausu',
        'Setana',
        'Kushiro',
        'Hokuto',
        'Esashi',
        'Abira',
        'Hidaka',
        'Shinhidaka',
        'Toyako',
        'Mukawa',
        'Yakumo',
        'Ozora',
        'Iwanai',
        'Kamisunagawa',
        'Iwamizawa',
        'Mikasa',
        'Shinshinotsu',
        'Akabira',
        'Nishiokoppe']
    };

    var num = function() {
        var n = Math.floor(Math.random() * Math.floor(179));
        return n;
    };

    return {
        getNum: function() {
            return num();
        },
        getCity: function(num) {
            return data.cities[num];
        }
    };

    

})();


var UIController = (function() {

    
    var DOMstrings = {
        btn: 'button',
        img: 'img',
        cityName: 'h2',
        cityLabel: '#name_city',
        imageLabel: '#img_city'
    };

    var displayCityImage = function(num) {
        document.querySelector(DOMstrings.imageLabel).style.display = 'block';
        document.querySelector(DOMstrings.img).src = "img/" + num + ".gif";
    };

    var displayCityName = function (city) {
        document.querySelector(DOMstrings.cityLabel).style.display = 'block';
        document.querySelector(DOMstrings.cityName).textContent = city ;
    };

    return {
        getDOMstrings: function() {
            return DOMstrings;
        },
        getCity: function(city) {
            return displayCityName(city);
        },
        getImage: function(num) {
            return displayCityImage(num);
        }
    };


})();


var controller = (function(dataCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.btn).addEventListener('click', randomCity);

    };

    var randomCity = function() {
        var num, city;
        
        console.log('lookin good');
        
        //1. calculate and get random number
        num = dataCtrl.getNum();
        console.log(num);
        //2. put random number into img html
            city = dataCtrl.getCity(num);
        
            UICtrl.getCity(city);
            UICtrl.getImage(num);
    };

    return {
        init: function() {
            console.log('Started');
            setupEventListeners();
        }
            
    };


        
    

})(dataController, UIController);

controller.init();