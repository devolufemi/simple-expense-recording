var  expenses = [];

function addExpense(){

    var productName = document.forms['addForm']["Product"].value;
    var quantity = document.forms['addForm']["QuantityBought"].value;
    var price =  document.forms['addForm']["Price"].value;

    var expense = {
        name : productName,
        quantity:quantity,
        price:price,
    };


    expenses.push(expense);
    alert("added successfuly.");

    document.getElementById("table-container").innerHTML 
    += "<tr><td>"+productName+"</td><td>"+quantity+"</td><td>"+price+"</td><tr>"; 


    //calculate total expense
    var totalExpense = 0;
    for (var o  =0;o< expenses.length;o++){
        
        totalExpense  += expenses[o].quantity * expenses[o].price
       
    }

    document.getElementById("total-expense").innerHTML = totalExpense;

;}

