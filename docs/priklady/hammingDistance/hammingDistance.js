

function hammingDistance(a = '', b = '') {
    if (a.length !== b.length) {
        return 0;
    }
    let dist = 0;
    for (let i = 0; i < a.length; i += 1) {
        if (a[i] !== b[i]) {
            dist += 1;
        };
    };
    return dist;
};


$(function () {
  $("#ina").on("keyup", () => {
    $("#out").val(hammingDistance(String($("#ina").val()), String($("#inb").val())));
  });
  $("#inb").on("keyup", () => {
    $("#out").val(hammingDistance(String($("#ina").val()), String($("#inb").val())));
  });
  $("#out").val(hammingDistance(String($("#ina").val()), String($("#inb").val())));
  // console.log("ready!");
  // console.log($("#in").val());
});
