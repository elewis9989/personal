var scrollW = document.getElementById("wrap-scroll");
var scrollUl = document.getElementById("ul-scroll");
var itemsScrolled,
  itemsMax,
  cloned = false;

var listOpts = {
  itemCount: null,
  itemHeight: null,
  items: [],
};

function scrollWrap() {
  itemsScrolled = Math.ceil(
    (this.scrollTop + listOpts.itemHeight / 2) / listOpts.itemHeight,
  );

  if (this.scrollTop < 1) {
    itemsScrolled = 0;
  }

  listOpts.items.forEach(function (ele) {
    ele.classList.remove("active");
  });

  if (itemsScrolled < listOpts.items.length) {
    listOpts.items[itemsScrolled].classList.add("active");
  }

  if (itemsScrolled > listOpts.items.length - 3) {
    var node;
    for (let i = 0; i <= itemsMax - 1; i++) {
      node = listOpts.items[i];

      if (!cloned) {
        node = listOpts.items[i].cloneNode(true);
      }

      scrollUl.appendChild(node);
    }

    initItems(cloned);
    cloned = true;
    itemsScrolled = 0;
  }
}

function initItems(scrollSmooth) {
  listOpts.items = [].slice.call(scrollUl.querySelectorAll("li"));
  listOpts.itemHeight = listOpts.items[0].clientHeight;
  listOpts.itemCount = listOpts.items.length;

  if (!itemsMax) {
    itemsMax = listOpts.itemCount;
  }

  if (scrollSmooth) {
    var seamLessScrollPoint = (itemsMax - 3) * listOpts.itemHeight;
    scrollW.scrollTop = seamLessScrollPoint;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initItems();
  scrollW.onscroll = scrollWrap;
});
