
function isValid(s) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[\(\{\[\]\}\)]/)) {
      // console.log(s[i]);
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        arr.push(s[i]);
      } else {
        if (arr[arr.length - 1] === map[s[i]]) {
          arr.pop();
        } else return false;
      }
    }
  }
  return arr.length === 0 ? true : false;
}

$(function () {
  $("#in").on("keyup", () => {
    $("#out").val(isValid(String($("#in").val())));
  });
  $("#out").val(isValid(String($("#in").val())));
  console.log("ready!");
  console.log($("#in").val());
});
