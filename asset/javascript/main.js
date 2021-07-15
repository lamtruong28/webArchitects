
var header = document.getElementById('header');
var headerHeight = header.clientHeight;

var menuMobile = document.getElementById('menu-mobile');

//Đóng mở menu:
menuMobile.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    }else {
        header.style.height = null;
    }
}

//Tự động đóng khi chọn menu:
var menuItems = document.querySelectorAll('#header .nav-lists a[href *= "#"]');

for (var i = 0 ; i< menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function() {
        header.style.height = null;
}
}




