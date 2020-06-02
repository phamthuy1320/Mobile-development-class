$(document).ready(function () {
  addWord = new AddWord();
});

class AddWord {
  constructor() {
    this.initEvents();
  }
  initEvents() {
    $(document).on("click", ".body-page .previous", this.previous);
    $(document).on("click", ".body-page .next", this.next);
  }

  previous() {
    var value = $(".img").css("left");

    value = Number(value.substring(0, value.length - 2));
    if (value > -20) {
      value = Number(value) + 20;
    } else {
      value = 0;
    }

    $(".img").css("left", value + "px");
  }

  next() {
    debugger;
    var value = $(".img").css("left");

    value = Number(value.substring(0, value.length - 2));
    if (value) {
      value = Number(value) - 20;
    } else {
      value = 0;
    }

    $(".img").css("left", value + "px");
  }
}
