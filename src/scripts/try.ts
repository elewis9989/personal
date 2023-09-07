const scrollW = document.getElementById("wrap-scroll") as HTMLElement;
const scrollUl = document.getElementById("ul-scroll") as HTMLUListElement;
let itemsScrolled: number,
  itemsMax: number,
  cloned = false;

interface ListOptions {
  itemCount: number | null;
  itemHeight: number | null;
  items: HTMLElement[];
}

const listOpts: ListOptions = {
  itemCount: null,
  itemHeight: null,
  items: [],
};

function scrollWrap(this: HTMLElement) {
  // The 'this' context is explicitly specified as HTMLElement.
  itemsScrolled = Math.ceil(
    (this.scrollTop + (listOpts.itemHeight as number) / 2) /
      (listOpts.itemHeight as number),
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
    let node: HTMLElement;
    for (let _x = 0; _x <= itemsMax - 1; _x++) {
      node = listOpts.items[_x];

      if (!cloned) {
        node = listOpts.items[_x].cloneNode(true) as HTMLElement;
      }

      scrollUl.appendChild(node);
    }

    initItems(cloned);
    cloned = true;
    itemsScrolled = 0;
  }
}

function initItems(scrollSmooth: boolean = false) {
  listOpts.items = [].slice.call(scrollUl.querySelectorAll("li"));
  listOpts.itemHeight = (listOpts.items[0] as HTMLElement).clientHeight;
  listOpts.itemCount = listOpts.items.length;

  if (!itemsMax) {
    itemsMax = listOpts.itemCount;
  }

  if (scrollSmooth) {
    const seamLessScrollPoint =
      (itemsMax - 3) * (listOpts.itemHeight as number);
    scrollW.scrollTop = seamLessScrollPoint;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initItems();
  scrollW.addEventListener("scroll", scrollWrap);
});
