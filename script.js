var dataController = (function() {

    var data = {
        "en": [ "Sapporo", "Ebetsu", "Chitose", "Eniwa", "Kitahiroshima", "Ishikari", "Tobetsu", "Yubari", "Bibai", "Takikawa", "Sunagawa", "Utashinai", "Fukagawa", "Nanporo", "Naie", "Yuni", "Naganuma", "Kuriyama", "Tsukigata", "Urausu", "Shintotsukawa", "Moseushi", "Chippubetsu", "Uryu", "Hokuryu", "Numata", "Horokanai", "Ashibetsu", "Hakodate", "Matsumae", "Fukushima", "Shiriuchi", "Kikonai", "Nanae", "Shikabe", "Mori", "Oshamanbe", "Esashi", "Kaminokuni", "Assabu", "Otobe", "Okushiri", "Imakane", "Otaru", "Shimamaki", "Suttsu", "Kuromatsunai", "Rankoshi", "Niseko", "Makkari", "Rusutsu", "Kimobetsu", "Kyogoku", "Kutchan", "Kyowa", "Tomari", "Kamoenai", "Shakotan", "Furubira", "Niki", "Yoichi", "Akaigawa", "Asahikawa", "Shibetsu", "Nayoro", "Furano", "Takasu", "Higashikagura", "Toma", "Pippu", "Aibetsu", "Kamikawa", "Higashikawa", "Biei", "Kamifurano", "Nakafurano", "Minamifurano", "Shimukappu", "Wassamu", "Kembuchi", "Shimokawa", "Bifuka", "Otoineppu", "Nakagawa", "Rumoi", "Mashike", "Obira", "Tomamae", "Haboro", "Shosanbetsu", "Enbetsu", "Teshio", "Horonobe", "Wakkanai", "Sarufutsu", "Hamatonbetsu", "Nakatonbetsu", "Toyotomi", "Rebun", "Rishiri", "Rishirifuji", "Kitami", "Abashiri", "Monbetsu", "Bihoro", "Tsubetsu", "Shari", "Kiyosato", "Koshimizu", "Kunneppu", "Oketo", "Saroma", "Engaru", "Yubetsu", "Takinoue", "Okoppe", "Omu", "Muroran", "Tomakomai", "Date", "Noboribetsu", "Toyoura", "Sobetsu", "Shiraoi", "Atsuma", "Biratori", "Niikappu", "Urakawa", "Samani", "Erimo", "Obihiro", "Otofuke", "Shihoro", "Kamishihoro", "Shikaoi", "Shintoku", "Shimizu", "Memuro", "Nakasatsunai", "Sarabetsu", "Taiki", "Hiroo", "Makubetsu", "Ikeda", "Toyokoro", "Honbetsu", "Ashoro", "Rikubetsu", "Urahoro", "Kushiro", "Akkeshi", "Hamanaka", "Shibecha", "Teshikaga", "Tsurui", "Shiranuka", "Nemuro", "Betsukai", "Nakashibetsu", "Shibetsu", "Rausu", "Setana", "Kushiro", "Hokuto", "Esashi", "Abira", "Hidaka", "Shinhidaka", "Toyako", "Mukawa", "Yakumo", "Ozora", "Iwanai", "Kamisunagawa", "Iwamizawa", "Mikasa", "Shinshinotsu", "Akabira", "Nishiokoppe"],
        "jp": [ "札幌市", "江別市", "千歳市", "恵庭市", "北広島市", "石狩市", "当別町", "夕張市", "美唄市", "滝川市", "砂川市", "歌志内市", "深川市", "南幌町", "奈井江町", "由仁町", "長沼町", "栗山町", "月形町", "浦臼町", "新十津川町", "妹背牛町", "秩父別町", "雨竜町", "北竜町", "沼田町", "幌加内町", "芦別市", "函館市", "松前町", "福島町", "知内町", "木古内町", "七飯町", "鹿部町", "森町", "長万部町", "江差町", "上ノ国町", "厚沢部町", "乙部町", "奥尻町", "今金町", "小樽市", "島牧村", "寿都町", "黒松内町", "蘭越町", "ニセコ町", "真狩村", "留寿都村", "喜茂別町", "京極町", "倶知安町", "共和町", "泊村", "神恵内村", "積丹町", "古平町", "仁木町", "余市町", "赤井川村", "旭川市", "士別市", "名寄市", "富良野市", "鷹栖町", "東神楽町", "当麻町", "比布町", "愛別町", "上川町", "東川町", "美瑛町", "上富良野町", "中富良野町", "南富良野町", "占冠村", "和寒町", "剣淵町", "下川町", "美深町", "音威子府村", "中川町", "留萌市", "増毛町", "小平町", "苫前町", "羽幌町", "初山別村", "遠別町", "天塩町", "幌延町", "稚内市", "猿払村", "浜頓別町", "中頓別町", "豊富町", "礼文町", "利尻町", "利尻富士町", "北見市", "網走市", "紋別市", "美幌町", "津別町", "斜里町", "清里町", "小清水町", "訓子府町", "置戸町", "佐呂間町", "遠軽町", "湧別町", "滝上町", "興部町", "雄武町", "室蘭市", "苫小牧市", "伊達市", "登別市", "豊浦町", "壮瞥町", "白老町", "厚真町", "平取町", "新冠町", "浦河町", "様似町", "えりも町", "帯広市", "音更町", "士幌町", "上士幌町", "鹿追町", "新得町", "清水町", "芽室町", "中札内村", "更別村", "大樹町", "広尾町", "幕別町", "池田町", "豊頃町", "本別町", "足寄町", "陸別町", "浦幌町", "釧路町", "厚岸町", "浜中町", "標茶町", "弟子屈町", "鶴居村", "白糠町", "根室市", "別海町", "中標津町", "標津町", "羅臼町", "せたな町", "釧路市", "北斗市", "枝幸町", "安平町", "日高町", "新ひだか町", "洞爺湖町", "むかわ町", "八雲町", "大空町", "岩内町", "上砂川町", "岩見沢市", "三笠市", "新篠津村", "赤平市", "西興部村"]
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
            return data.en[num]; // data.en returns the city names in English, data.jp in Japanese
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
        
        document.querySelector(DOM.btn).addEventListener('click', cityRoulette);

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

    var timer = async function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var getTimeout = function(totalTime, index, iterations) {
        return totalTime / iterations * 4 * ((index + 1) / iterations) ** 3;
    }

    var cityRoulette = async function() {
        const iterations = 20 + Math.floor(Math.random() * 30);
        const totalTime = 500 + Math.floor(Math.random() * 1000);
        randomCity();
        for (let i = 0; i < iterations; i++) {
            await timer(getTimeout(totalTime, i, iterations));
            randomCity();
        }
    }

    return {
        init: function() {
            console.log('Started');
            setupEventListeners();
        }
    };
})(dataController, UIController);

window.addEventListener('load', controller.init);
