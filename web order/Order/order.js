// Description: Javascript file for Order page.
// Used by: Order/order.html
let totalPrice = 0;

function order(itemName, itemPrice) {
    const orderList = document.getElementById('order-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} - ${itemPrice.toLocaleString()} VNĐ`;
    orderList.appendChild(listItem);

    totalPrice += itemPrice;
    document.getElementById('total-price').textContent = `Tổng Giá: ${totalPrice.toLocaleString()} VNĐ`;
}