// Mock data
let customers = [
    { id: 1, name: 'Ajay', purchases: 3, amount: 150 },
    { id: 2, name: 'Tushar', purchases: 5, amount: 250 }

  ];
  
  let selectedCustomer = null;
  
  const customerTableBody = document.getElementById('customerTableBody');
  const customerDetails = document.getElementById('customerDetails');
  const customerName = document.getElementById('customerName');
  const customerPurchases = document.getElementById('customerPurchases');
  const customerAmount = document.getElementById('customerAmount');
  const saveCustomerBtn = document.getElementById('saveCustomerBtn');
  const addCustomerBtn = document.getElementById('addCustomerBtn');
  
  // Render customer table
  function renderCustomerTable() {
    customerTableBody.innerHTML = '';
    customers.forEach(customer => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${customer.name}</td>
        <td>${customer.purchases}</td>
        <td>${customer.amount}</td>
        <td>
          <button onclick="editCustomer(${customer.id})">Edit</button>
          <button onclick="deleteCustomer(${customer.id})">Delete</button>
        </td>
      `;
      customerTableBody.appendChild(tr);
    });
  }
  
  // Edit customer
  function editCustomer(id) {
    selectedCustomer = customers.find(customer => customer.id === id);
    customerName.value = selectedCustomer.name;
    customerPurchases.value = selectedCustomer.purchases;
    customerAmount.value = selectedCustomer.amount;
    customerDetails.style.display = 'block';
  }
  
  // Delete customer
  function deleteCustomer(id) {
    if (confirm('Are you sure you want to delete this customer?')) {
      customers = customers.filter(customer => customer.id !== id);
      renderCustomerTable();
    }
  }
  
  // Save customer
  saveCustomerBtn.addEventListener('click', () => {
    const name = customerName.value;
    const purchases = parseInt(customerPurchases.value, 10);
    const amount = parseFloat(customerAmount.value);
    
  if (!name) {
    alert('Please enter a name for the customer.');
    return;
  }
  
  if (isNaN(purchases) || purchases <= 0) {
    alert('Please enter a valid number of purchases.');
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }
  
  if (selectedCustomer) {
      // Update customer
      selectedCustomer.name = name;
      selectedCustomer.purchases = purchases;
      selectedCustomer.amount = amount;
  } else {
      // Add new customer
      const newCustomer = {
        id: customers.length ? customers[customers.length - 1].id + 1 : 1,
        name,
        purchases: Number(purchases),
        amount: Number(amount)
    };
      customers.push(newCustomer);
  }
  
    selectedCustomer = null;
    customerDetails.style.display = 'none';
    renderCustomerTable();
  });
  
  // Add new customer
  addCustomerBtn.addEventListener('click', () => {
    selectedCustomer = null;
    customerName.value = '';
    customerPurchases.value = '';
    customerAmount.value = '';
    customerDetails.style.display = 'block';
  });
  
  // Initial render
  renderCustomerTable();
  customerDetails.style.display = 'none';
  





