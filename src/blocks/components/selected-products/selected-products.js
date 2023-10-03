function modalSelectedProducts() {
  event.preventDefault();
  $.fancybox.open({
    src: "#selected-products",
    type: "inline",
  });
}