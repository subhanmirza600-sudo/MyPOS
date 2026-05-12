// function openModal() {
//     document.getElementById("menuModal").style.display = "flex";
// }

// function closeModal() {
//     document.getElementById("menuModal").style.display = "none";
// }

// function addItem() {
//     let name = document.getElementById("itemName").value;
//     let price = document.getElementById("itemPrice").value;

//     if (name === "" || price === "") {
//         alert("Please fill all fields");
//         return;
//     }

//     fetch("add_menu.php", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             name: name,
//             price: price
//         })
//     })
//         .then(res => res.text())
//         .then(data => {
//             alert(data);
//             closeModal();
//         });
// }


// function showMenu() {
//     fetch("get_menu.php")
//         .then(res => res.json())
//         .then(data => {
//             let output = "";

//             if (data.length === 0) {
//                 output = "<p>No items found</p>";
//             } else {
//                 data.forEach(item => {
//                     output += `
//                             <div style="border-bottom:1px solid #ccc; padding:10px;">
//                              <strong>ID:</strong> ${item.id} <br>
//                              <strong>Name:</strong> ${item.name} <br>
//                              <strong>Price:</strong> Rs. ${item.price}
//                             </div>
// `;
//                 });
//             }

//             document.getElementById("menuList").innerHTML = output;
//             document.getElementById("displayModal").style.display = "flex";
//         });
// }

// function closeDisplayModal() {
//     document.getElementById("displayModal").style.display = "none";
// }

// function openUpdateModal() {
//     document.getElementById("updateModal").style.display = "flex";
// }

// function closeUpdateModal() {
//     document.getElementById("updateModal").style.display = "none";
// }

// function updateItem() {
//     let id = document.getElementById("updateId").value;
//     let name = document.getElementById("updateName").value;
//     let price = document.getElementById("updatePrice").value;

//     if (id === "" || name === "" || price === "") {
//         alert("Please fill all fields");
//         return;
//     }

//     fetch("update_menu.php", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             id: id,
//             name: name,
//             price: price
//         })
//     })
//         .then(res => res.text())
//         .then(data => {
//             alert(data);
//             closeUpdateModal();
//         });
// }



// function openSearchModal() {
//     document.getElementById("searchModal").style.display = "flex";
// }

// function closeSearchModal() {
//     document.getElementById("searchModal").style.display = "none";
// }

// function searchItem() {
//     let name = document.getElementById("searchName").value;

//     if (name === "") {
//         alert("Enter item name");
//         return;
//     }

//     fetch("search_menu.php", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ name: name })
//     })
//         .then(res => res.json())
//         .then(data => {
//             let output = "";

//             if (data.length === 0) {
//                 output = "<p>No item found</p>";
//             } else {
//                 data.forEach(item => {
//                     output += `
//                     <div style="border-bottom:1px solid #ccc; padding:10px;">
//                         <strong>ID:</strong> ${item.id} <br>
//                         <strong>Name:</strong> ${item.name} <br>
//                         <strong>Price:</strong> Rs. ${item.price}
//                     </div>
//                 `;
//                 });
//             }

//             document.getElementById("searchResult").innerHTML = output;
//         });
// }


// function openDeleteModal() {
//     document.getElementById("deleteModal").style.display = "flex";
// }

// function closeDeleteModal() {
//     document.getElementById("deleteModal").style.display = "none";
// }

// function deleteItem() {
//     let id = document.getElementById("deleteId").value;

//     if (id === "") {
//         alert("Enter ID");
//         return;
//     }

//     fetch("delete_menu.php", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ id: id })
//     })
//         .then(res => res.text())
//         .then(data => {
//             alert(data);
//             closeDeleteModal();
//         });
// }



function openOrderModal() {
    fetch("get_next_order_id.php")
        .then(res => res.json())
        .then(data => {
            document.getElementById("orderNo").innerText =
                "Next Order # " + data.next_order_id;

            document.getElementById("orderModal").style.display = "flex";
        });
}
function closeOrderModal() {
    document.getElementById("orderModal").style.display = "none";
}

function openOrderDetailsModal() {
    document.getElementById("orderDetailsModal").style.display = "flex";
}
function closeOrderDetailsModal() {
    document.getElementById("orderDetailsModal").style.display = "none";
}

function closeInvoice() {
    document.getElementById("invoiceModal").style.display = "none";
}




function addOrder() {
    let name = document.getElementById("customerName").value;

    fetch("add_order.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer_name: name })
    })
        .then(res => res.text())
        .then(data => {
            alert("Order Created for: " + name);
            closeOrderModal();
        });
}




function addOrderDetails() {
    let item_id = document.getElementById("itemId").value;
    let qty = document.getElementById("qty").value;

    if (item_id == 0) {
        closeOrderDetailsModal();
        return;
    }

    fetch("add_order_details.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            item_id,
            quantity: qty
        })
    })
        .then(res => res.text())
        .then(data => {
            alert(data);

            // Reset fields
            document.getElementById("itemId").value = "";
            document.getElementById("qty").value = "";

            // Keep asking
            let nextItem = prompt("Enter next Item ID (0 to stop):");

            if (nextItem == 0) {
                closeOrderDetailsModal();
            } else {
                document.getElementById("itemId").value = nextItem;
            }
        });
}


function generateInvoice() {
    let orderId = prompt("Enter Order ID");

    if (!orderId) return;

    fetch("get_invoice.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order_id: orderId })
    })
        .then(res => res.json())
        .then(data => {

            // 🚨 HANDLE ERROR
            if (data.status === "error") {
                alert("❌ " + data.message);
                return;
            }

            let output = `
        <center><h1 style="color: green;">My Restaurant</h1>
            <h2>SALES INVOICE</h2>
        </center>
        
        <p>Order ID: ${data.order_id}</p>
        <p>Customer: ${data.customer_name}</p>
        <p>Date: ${data.date} Time: ${data.time}</p>
        <hr>

        <table border="1" width="100%">
        <tr>
            <th>Item</th><th>Qty</th><th>Price</th><th>Total</th>
        </tr>
        `;

            data.items.forEach(item => {
                output += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.total}</td>
            </tr>
            `;
            });

            output += `
        </table>
        <h3>GRAND TOTAL: ${data.grand_total}</h3>
        <p>Thank you for your visit ❤️</p>
        `;

            document.getElementById("invoiceContent").innerHTML = output;
            document.getElementById("invoiceModal").style.display = "flex";
        });
}
function getTotalSales() {
    fetch("total_sales.php")
        .then(res => res.json())
        .then(data => {
            alert("Total Sales: Rs. " + data.total);
        });
}


// function openStaffModal() {
//     document.getElementById("staffModal").style.display = "flex";
// }

// function closeStaffModal() {
//     document.getElementById("staffModal").style.display = "none";
// }

// function addStaff() {
//     let username = document.getElementById("staffUsername").value;
//     let password = document.getElementById("staffPassword").value;

//     if (username === "" || password === "") {
//         alert("Fill all fields");
//         return;
//     }

//     fetch("add_staff.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password })
//     })
//         .then(res => res.text())
//         .then(data => {
//             alert(data);
//             closeStaffModal();
//         });
// }