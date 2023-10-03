function OpenModalSelectedProducts() {
  event.preventDefault();
  $.fancybox.open({
    src: "#selected-products",
    type: "inline",
  });
}
function CloseModalSelectedProducts() {
  event.preventDefault();
  $.fancybox.close({
    src: "#selected-products",
    type: "inline",
  });
}