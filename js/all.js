let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];
// 套票名稱input o
const ticketName = document.querySelector('#ticketName');
// 圖片網址input o
const ticketImgUrl = document.querySelector('#ticketImgUrl');
// 景點地區select o
const ticketRegion = document.querySelector('#ticketRegion');
// 套票金額input o
const ticketPrice = document.querySelector('#ticketPrice');
// 套票組數input o
const ticketNum = document.querySelector('#ticketNum');
// 套票星級input o
const ticketRate = document.querySelector('#ticketRate');
// 套票描述input o
const ticketDescription = document.querySelector('#ticketDescription');
// 新增套票button
const addTicketBtn = document.querySelector('.addTicket-btn');
// 地區篩選功能
const regionSearch = document.querySelector('.regionSearch');
// 顯示搜尋幾筆函式
const searchResultText = document.querySelector('#searchResult-text');
// 動態渲染資料功能
const ticketCardArea = document.querySelector('.ticketCard-area');
let str = '';
// 初始化資料函式
function init(data) {
  str = '';
  data.forEach(function(element){
    let li = `<li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img src="${element.imgUrl}"
                alt="">
            </a>
            <div class="ticketCard-region">${element.area}</div>
            <div class="ticketCard-rank">${element.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${element.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${element.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${element.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">$${element.price}</span>
              </p>
            </div>
          </div>
        </li>`;
    str += li;
  });
  ticketCardArea.innerHTML = str;
  searchResultText.textContent = `本次搜尋共 ${data.length} 筆資料`;
};
init(data);
// 新增套票功能
addTicketBtn.addEventListener('click', addTicket);
// 新增套票函式
function addTicket() {
  // 1. 防呆 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // 套票名稱alert
  const ticketNameMessage = document.querySelector('#ticketName-message[data-message="套票名稱"]');
  // 圖片網址alert
  const ticketImgUrlMessage = document.querySelector('#ticketImgUrl-message[data-message="圖片網址"]');
  // 景點地區alert
  const ticketRegionMessage = document.querySelector('#ticketRegion-message[data-message="景點地區"]');
  // 套票金額alert
  const ticketPriceMessage = document.querySelector('#ticketPrice-message[data-message="套票金額"]');
  // 套票組數alert
  const ticketNumMessage = document.querySelector('#ticketNum-message[data-message="套票組數"]');
  // 套票星級alert
  const ticketRateMessage = document.querySelector('#ticketRate-message[data-message="套票星級"]');
  // 套票描述alert
  const ticketDescriptionMessage = document.querySelector('#ticketDescription-message[data-message="套票描述"]');
  // 套票名稱防呆
  if (ticketName.value === '') {
    ticketNameMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;
  } else {
    ticketNameMessage.innerHTML = '';
  };
  // 圖片網址防呆
  if (ticketImgUrl.value === '') {
    ticketImgUrlMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;
  } else {
    ticketImgUrlMessage.innerHTML = '';
  };
  // 景點地區防呆
  if (ticketRegion.value === '') {
    ticketRegionMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;
  } else {
    ticketRegionMessage.innerHTML = '';
  };
  // 套票金額防呆
  if (ticketPrice.value === '') {
    ticketPriceMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;
  } else if (ticketPrice.value < 0) {
    ticketPriceMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>金額最小為0</span>`;
  } else {
    ticketPriceMessage.innerHTML = '';
  };
  // 套票組數防呆
  if (ticketNum.value === '') {
    ticketNumMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;
  } else if (ticketNum.value <= 0) {
    ticketNumMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>組數必須大於1</span>`;
  } else {
    ticketNumMessage.innerHTML = '';
  };
  // 套票星級防呆
  if (ticketRate.value === '') {
    ticketRateMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;
  } else if (ticketRate.value <= 0 || ticketRate.value > 10) {
    ticketRateMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>套票星級限定在1到10之間</span>`;
  } else {
    ticketRateMessage.innerHTML = '';
  };
  // 套票描述防呆
  if (ticketDescription.value === '') {
    ticketDescriptionMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;
  } else {
    ticketDescriptionMessage.innerHTML = '';
  };
  // 2. 資料建立 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  if(ticketName.value && ticketImgUrl.value && ticketRegion.value && ticketDescription.value && ticketNum.value && ticketPrice.value && ticketRate.value) {
    let obj = {};
    obj.id = Math.max(0,...data.map((x) => x.id)) + 1;
    obj.name = ticketName.value;
    obj.imgUrl = ticketImgUrl.value;
    obj.area = ticketRegion.value;
    obj.description = ticketDescription.value;
    obj.group = Number(ticketNum.value);
    obj.price = Number(ticketPrice.value);
    obj.rate = Number(ticketRate.value);
    data.push(obj);
    // 初始化函式，在畫面上重新渲染將新資料新增上去
    init(data);
    // 新增資料後可直接用 reset() 方法來清除表單內容
    document.querySelector('.addTicket-form').reset();
    // 新增完套票後篩選回復預設值
    regionSearch.value = '';
  };
};
// 篩選套票功能
regionSearch.addEventListener('change', selectRegion);
// 篩選套票函式
function selectRegion() {
  let filterData = [];
  data.forEach(function(element){
    if(regionSearch.value === element.area){
      filterData.push(element);
      init(filterData);
    }else if(regionSearch.value === ''){
      init(data);
    };
  });
};
