// handle change language
const TRANSLATE = {
  vn: {
    title: "Nhận dạng & Chăm sóc thực vật",
    description:
      "Nhận biết ngay các loại cây xung quanh bạn và học cách chăm sóc chúng.",
    contentTitle1: "LeafSnap with a snap",
    contentDescription1:
      "Chỉ cần chụp hoặc tải lên một bức ảnh của bất kỳ loài thực vật nào, nhận được kết quả ID thực vật ngay lập tức và chính xác với công nghệ trí tuệ nhân tạo mang tính cách mạng của chúng tôi.",
    contentButton1: "Tôi cần cái này",
    contentTitle2: "Tự động chẩn đoán sự cố",
    contentDescription2:
      "Chụp ảnh bộ phận bị bệnh của cây, tìm nguyên nhân và đề xuất điều trị.",
    contentButton2: "Bắt đầu chẩn đoán",
    contentTitle3: "Hướng dẫn chăm sóc cây chi tiết",
    contentDescription3: "Trồng cây dễ dàng với dịch vụ chăm sóc cây cao cấp",
    contentButton3: "Nhận kế hoạch chăm sóc",
    contentTitle4: "Xác định thực vật độc hại",
    contentDescription4: "Nhận biết và bảo vệ vật nuôi khỏi cây độc hại",
    contentButton4: "Bảo vệ vật nuôi của tôi",
    contentTitle5: "Tư vấn độc quyền",
    contentDescription5:
      "Nhận lời khuyên làm vườn và gỡ rối các vấn đề về vườn của bạn với các chuyên gia thực vật của chúng tôi.",
    contentButton5: "Tham khảo ý kiến ​​chuyên gia",
    contentTitle6: "Cơ sở dữ liệu siêu phong phú",
    contentDescription6:
      "Truy cập vào cơ sở dữ liệu khổng lồ về thực vật đang phát triển và nhận mọi thứ bạn muốn biết về cây, từ tần suất tưới nước đến kiểm soát sâu bệnh, từ tài liệu đến thông tin thú vị.",
    contentButton6: "Tìm kiếm cây trồng",
    contentTitle7: "Nhận LeafSnap ngay bây giờ",
    contentDescription7:
      "Hãy dùng thử Ứng dụng LeafSnap trên điện thoại của bạn và xác định hơn 30000 loài thực vật!",
    contentDescription8:
      "Xem thêm thông tin về thực vật, tham gia cộng đồng tuyệt vời của chúng tôi và khám phá những điều thú vị trên khắp thế giới trong Ứng dụng.",
    term: "Điều khoản",
    privacy: "Chính sách",
    contact: "Liên hệ",
    auth: "Tất cả các quyền...",
  },
  en: {
    title: "Plant Identification & Care",
    description:
      "Instantly identify plants around you and learn how to care for them.",
    contentTitle1: "LeafSnap with a snap",
    contentDescription1:
      "Simply take or upload a photo of any plant, get instantaneous and accurate plant ID results with our revolutionary artificial intelligence technology.",
    contentButton1: "I Need This",
    contentTitle2: "Auto problem diagnosis",
    contentDescription2:
      "Take picture of sick part of plants, get problem causes and treatment suggestions.",
    contentButton2: "Start diagnose",
    contentTitle3: "Detailed plant care guides",
    contentDescription3: "Grow plants effortlessly with Premium plant care",
    contentButton3: "Get care plan",
    contentTitle4: "Toxic plant identification",
    contentDescription4: "Identify and protect pets from toxic plants",
    contentButton4: "Protect my pets",
    contentTitle5: "Exclusive consultation",
    contentDescription5:
      "Get gardening advice and troubleshoot your garden problems with our plant experts.",
    contentButton5: "Consult expert",
    contentTitle6: "Super rich database",
    contentDescription6:
      "Get access to a huge growing database of plant and get everything you want to know about the plant, from watering frequency to pest and disease control, from literature to fun fact.",
    contentButton6: "Search plants",
    contentTitle7: "Get LeafSnap now",
    contentDescription7:
      "Try out LeafSnap App on your phone and Identify more than 30000+ plant species!",
    contentDescription8:
      "See more info about plants, join our amazing community and explore snaps around the world in the App.",
    term: "Term of Use",
    privacy: "Privacy Policy",
    contact: "Contact Us",
    auth: "All right reserved",
  },
};

let selectLanguage = document.querySelector("#language");
let title = document.querySelector(".banner-content__title span");
let description = document.querySelector(".banner-content__description");
let contentTitle = document.querySelectorAll(".content-plant__title");
let contentDescription = document.querySelectorAll(
  ".content-plant__description"
);
let contentDescription2 = document.querySelector(
  ".content-plant__description2"
);

let contentButton = document.querySelectorAll(".btn-primary");
let footerContent = document.querySelectorAll(".footer-content__item");
let bottomFooterContent = document.querySelector(".footer-copy-right");

selectLanguage.addEventListener("change", (event) => {
  var language = event.target.value;
  let ctx = "";
  if (language === "vietnamese") {
    ctx = "vn";
  } else {
    ctx = "en";
  }
  title.textContent = TRANSLATE[ctx].title;
  description.textContent = TRANSLATE[ctx].description;
  for (let i = 0; i < contentTitle.length; i++) {
    let content = `contentTitle${i + 1}`;
    let des = `contentDescription${i + 1}`;
    contentTitle[i].textContent = TRANSLATE[ctx][content];
    contentDescription[i].textContent = TRANSLATE[ctx][des];
  }
  for (let i = 0; i < contentTitle.length - 1; i++) {
    let btnText = `contentButton${i + 1}`;
    contentButton[i].textContent = TRANSLATE[ctx][btnText];
  }
  for (let i = 0; i < footerContent.length; i++) {
    footerContent[0].textContent = TRANSLATE[ctx].term;
    footerContent[1].textContent = TRANSLATE[ctx].privacy;
    footerContent[2].textContent = TRANSLATE[ctx].contact;
  }
  contentDescription2.textContent = TRANSLATE[ctx].contentDescription8;
  bottomFooterContent.textContent = TRANSLATE[ctx].auth;
});

var logoAndroid = document.querySelectorAll(".logo-android");
var logoIos = document.querySelectorAll(".logo-ios");

// handle button link to download app
var userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/android/i.test(userAgent)) {
  for (let i = 0; i < 2; i++) {
    logoIos[i].style.display = "none";
  }
}

// iOS detection from: http://stackoverflow.com/a/9039885/177710
if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  for (let i = 0; i < 2; i++) {
    logoAndroid[i].style.display = "none";
  }
}

//handle scroll

window.onscroll = function () {
  scrollHeader();
};

var headerContainer = document.querySelector(".main-container");


function scrollHeader() {
  if(window.pageYOffset > 50) {
    headerContainer.classList.add("sticky")
  }else {
    headerContainer.classList.remove("sticky")
  }
}

