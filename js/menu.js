// Sophia Vong - Menu Page
// PAGE ON LOAD
document.body.style.display = "none";
window.onload = pageLoad;

function pageLoad(){
  // Resume Display
  document.body.style.display = "block";

  // KEEP STUFF HIDDEN UNTIL SUBMIT
  $('#place_order').addClass("hidden");
  $('#confirmation').addClass("hidden");

  var pickOrderHandle = document.forms.pick_up_order;
  var placeOrderHandle = document.forms.place_order;

  // SETTING THE MENU ITEMS AND VALUES
  var menu = {
    breakfast_items: ["Bacond & Eggs", "Poached Eggs with Salmon", "Fancy French Toast", "Fruits & Waffle", "Dolled Up Pancakes"],
    breakfast_prices: [8.99, 13.99, 10.99, 12.99, 9.99],
    lunch_items: ["Club Sandwiches", "Hamburger & Fries", "Chicken & Waffles", "Chef's Specialty Sub", "Chicken Ceasar Salad"],
    lunch_prices: [11.99, 12.99, 13.99, 11.99, 12.99],
    dinner_items: ["Super Steak", "Rockin' Ribs", "Crispy Chicken", "Bombin' Burger", "Power Porkchops"],
    dinner_prices: [20.99, 18.99, 13.99, 11.99, 13.99],
    side_items: ["Sweet Potato Fries", "Regular Fries", "Mashed Potatoes", "Onion Rings", "Zesty Nachos" , "Chocolate Milkshake", "Old Fashion Strawberry Cake"],
    side_prices: [3.99, 2.49, 2.99, 3.49, 8.99, 5.49, 5.99]
  }

  // GENERATE MENU ITEMS WITH FUNCTION
  function displayMenu (id, title, item, price){
    $('#menu').append("<section id ='" + id + "' class='flex-item'><h3>" + title + "</h3><table class='newMenu'></table></section>");

    for (var i = 0; i < item.length; i++){
      $('#' + id).append("<tr><td><input type='checkbox' name='side' value='" + price[i] + "'></input><label>" + item[i] + "</label></td><td>$" + price[i] + "</td></tr>")
    }
  }

  displayMenu('breakfast',"Breakfast", menu.breakfast_items, menu.breakfast_prices);
  displayMenu('lunch', "Lunch", menu.lunch_items, menu.lunch_prices);
  displayMenu('dinner' ,"Dinner", menu.dinner_items, menu.dinner_prices);
  displayMenu('sides', "Drinks & Sides", menu.side_items, menu.side_prices);

  // FOR LATER USE WHEN CUSTOMERS ORDER FOR TAKE OUT
  var customer_order = {
    customer_fname: "",
    customer_lname: "",
    contact_email: "",
    order_item_names: [],
    order_item_prices: [],
    subtotal: 0,
    tax: 0,
    total: 0
  };

  // Validation
  var name_val = /[a-zA-Z]+/;
  var email_val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Function to validate each item
  function validation (type, object, id, title){
    if (type.test(object) === false){
      $(id).css("background", "red");
      $('#error-msg').append("<p><i>Please enter a correct " + title + " value.</i></p>");
      return false;
    }
    else{
      $(id).css("background", "white");
    }
  }

  // ON SUBMIT
  function take_order() {
    $('#error-msg').html("");
    // Get Customer Order Information
    customer_order.customer_fname = cust_fname.value;
    validation (name_val, customer_order.customer_fname, '#cust_fname', "first name");
    customer_order.customer_lname = cust_lname.value;
    validation (name_val, customer_order.customer_lname, '#cust_lname', "last name");
    customer_order.customer_email = cust_email.value;
    validation (email_val, customer_order.customer_email, '#cust_email', "email");

    // Grabbing The Order
    $(':checkbox:checked').each(function() {
      customer_order.order_item_prices.push(this.value);
      customer_order.order_item_names.push($(this).next('label').text());
    });

    // Calculating Order Subtotal
    for (var i = 0; i < customer_order.order_item_prices.length; i++)
    {
      customer_order.subtotal += parseFloat(customer_order.order_item_prices[i]);
    }

    // Calculating Order Tax
    customer_order.tax = (customer_order.subtotal * 0.13).toFixed(2);

    // Calculating Order total
    customer_order.total = (parseFloat(customer_order.subtotal) + parseFloat(customer_order.tax)).toFixed(2);

    if (customer_order.total < 1){
      $('#error-msg').append("<p><i>Please select items from our menu.</i></p>");
      return false;
    }
    else {
      // HIDE PLACE HOLDER AND UNHIDE ORDER_review
      $('#place_holder').addClass("hidden");
      $('#place_order').removeClass("hidden");
      output();
    }
    // REVIEWING THE ORDER
    function output(){
      // Display Customer Information
      $('#review_cust_name').html("Customer Name: " + customer_order.customer_fname + " " + customer_order.customer_lname);
      $('#review_cust_contact').html("E-Mail Provided: " + customer_order.customer_email);
      $('#review_order').html("");
      // Display Customer's Order
      for (var i = 0; i < customer_order.order_item_names.length; i++)
      {
        $('#review_order').append("<tr><td>" + customer_order.order_item_names[i] + "</td><td>$" + customer_order.order_item_prices[i] + "</td></tr>");
      }

      // Display Costs
      $('#review_order').append("<tr><td><strong>Subtotal:</strong></td><td>$" + customer_order.subtotal + "</td></tr><tr><td><strong>HST:</strong></td><td>$" + customer_order.tax + "</td></tr><tr><td><strong>Total:</strong></td><td>$" + customer_order.total + "</td></tr>");

        customer_order.customer_fname = "";
        customer_order.customer_lname = "";
        customer_order.contact_email = "";
        customer_order.order_item_names = [];
        customer_order.order_item_prices = [];
        customer_order.subtotal = 0;
        customer_order.tax = 0;
        customer_order.total = 0;

    }
    return false;
  } // End of take_order function

  // ORDER CONFIRMATION
  function order_confirmation(){
    // HIDE ORDER_REVIEW AND UNHIDE confirmation
    $('#place_order').addClass("hidden");
    $('#confirmation').removeClass("hidden");
    return false;
  }

  // Listeners
  pickOrderHandle.onsubmit = take_order;
  placeOrderHandle.onsubmit = order_confirmation;
} // END OF ON LOAD FUNCTION
