// navbar.js — inject shared navbar into every page

(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return currentPage === page ? 'active' : '';
  }

  const navHTML = `
  <nav class="navbar">
    <a href="index.html" class="nav-logo">
      <span>🍔</span> Restaurant POS
    </a>

    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
      <li><a href="about.html" class="${isActive('about.html')}">About</a></li>

      <li class="nav-dropdown" id="staffDrop">
        <a href="staff.html" class="${isActive('staff.html')}">Staff</a>
        <div class="dropdown-menu">
          <a href="add_staff.html"><i class="fa-solid fa-user-plus"></i> Add Staff</a>
          <a href="display_staff.html"><i class="fa-solid fa-users"></i> Display Staff</a>
          <a href="update_staff.html"><i class="fa-solid fa-id-card"></i> Update Staff</a>
          <a href="delete_staff.html"><i class="fa-solid fa-user-minus"></i> Delete Staff</a>
        </div>
      </li>

      <li class="nav-dropdown" id="menuDrop">
        <a href="menu.html" class="${isActive('menu.html')}">Menu</a>
        <div class="dropdown-menu">
          <a href="add_menu.html"><i class="fa-solid fa-plus"></i> Add Item</a>
          <a href="display_menu.html"><i class="fa-solid fa-utensils"></i> Display Menu</a>
          <a href="update_menu.html"><i class="fa-solid fa-pen"></i> Update Menu</a>
          <a href="delete_menu.html"><i class="fa-solid fa-trash"></i> Delete Item</a>
          <a href="search_menu.html"><i class="fa-solid fa-magnifying-glass"></i> Search Menu</a>
        </div>
      </li>

      <li class="nav-dropdown" id="finDrop">
        <a href="financial.html" class="${isActive('financial.html')}">Finance</a>
        <div class="dropdown-menu">
          <a href="order.html"><i class="fa-solid fa-cart-shopping"></i> Take Orders</a>
          <a href="display_orders.html"><i class="fa-solid fa-receipt"></i> All Orders</a>
          <a href="search_orders.html"><i class="fa-solid fa-search"></i> Search Orders</a>
          <a href="invoice.html"><i class="fa-solid fa-file-invoice-dollar"></i> Invoices</a>
          <a href="sales.html"><i class="fa-solid fa-chart-line"></i> Sales Report</a>
          <a href="sales_by_date.html"><i class="fa-solid fa-calendar-days"></i> Sales By Date</a>
          <a href="pending.html"><i class="fa-solid fa-clock"></i> Pending Orders</a>
          <a href="search_orders_by_date.html"><i class="fa-solid fa-calendar-check"></i> Orders By Date</a>
        </div>
      </li>

      <li><a href="login.html" style="color:#ff6b6b;">Logout 🚪</a></li>
    </ul>

    <div class="hamburger" id="hamburger" onclick="toggleNav()">
      <span></span><span></span><span></span>
    </div>
  </nav>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Mobile nav toggle
  window.toggleNav = function () {
    document.getElementById('navLinks').classList.toggle('open');
  };

  // Mobile dropdown toggle
  document.querySelectorAll('.nav-dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });
})();