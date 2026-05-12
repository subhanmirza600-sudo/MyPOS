<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Search Orders</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-dark text-white">

    <div class="container mt-5">

        <h2 class="text-center mb-4">Search Orders by Customer Name</h2>

        <!-- SEARCH BOX -->
        <input type="text" id="searchName" class="form-control mb-3" placeholder="Enter Customer Name">

        <button class="btn btn-primary w-100 mb-4" onclick="searchOrders()">
            Search
        </button>

        <!-- RESULTS TABLE -->
        <table class="table table-dark table-bordered text-center">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody id="resultTable">
                <!-- Results appear here -->
            </tbody>
        </table>

        <button class="btn btn-secondary w-100" onclick="window.history.back()">
            Back
        </button>

    </div>

    <script>
        function searchOrders() {
            let name = document.getElementById("searchName").value;

            // 👇 PASTE HERE (replace old condition)
            if (name.trim() === "") {
                alert("Please enter name");
                return;
            }

            fetch("search_orders.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ customer_name: name })
            })
                .then(res => res.json())
                .then(data => {

                    let table = document.getElementById("resultTable");
                    table.innerHTML = "";

                    if (data.length === 0) {
                        table.innerHTML = "<tr><td colspan='5'>No Orders Found</td></tr>";
                        return;
                    }

                    data.forEach(order => {

                        let row = `
                <tr>
                    <td>${order.order_id}</td>
                    <td>${order.customer_name}</td>
                    <td>${order.order_date}</td>
                    <td>${order.order_time}</td>
                    <td>${order.total_amount}</td>
                    <td>${order.status}</td>
                </tr>
            `;

                        table.innerHTML += row;
                    });

                })
                .catch(err => {
                    console.log(err);
                    alert("Server error");
                });
        }
    </script>

</body>

</html>