function insert(num) {
  var el = document.getElementById("input").value;

  if (num == "") {
    document.getElementById("input").value = "";
  }
  if (num == "back") {
    document.getElementById("input").value = el.substring(0, el.length - 1);
    num = "";
  }
  if (num == "=" && el) {
    try {
      document.getElementById("input").value = eval(
        document.getElementById("input").value
      );
      console.log("worked");
      num = "";
    } catch (SyntaxError) {
      document.getElementById("input").value = "Это невозможно!";
      console.log("worked");
      num = "";
    }
  }

  document.getElementById("input").value =
    document.getElementById("input").value + num;
}
