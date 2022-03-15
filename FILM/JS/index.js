for (var i = 0; i < cartList.length; i++) {
    for (var j = 0; j < tipus.length; j++) {
        if (cartList[i].type == tipus[j]) {
            var total2 = subtotal[tipus[j]].value + cartList[i].price;
            subtotal[tipus[j]].value = parseFloat(total2.tofixed(2));

            }]
        }
    }
}