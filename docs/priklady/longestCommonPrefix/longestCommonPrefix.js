
function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }

  return strs[0];
}

$(function () {
  $("#in").on("keyup", () => {
    $("#out").val(
      longestCommonPrefix(String($("#in").val()).trim().split(" "))
    );
  });
  $("#out").val(longestCommonPrefix(String($("#in").val()).trim().split(" ")));
  console.log("ready!");
  console.log($("#in").val());
});
