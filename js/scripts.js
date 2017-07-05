function BankAccount(name, balance){
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(depositTotal){
  this.balance += depositTotal;
    $('#currentBalance').text(this.balance);
};

BankAccount.prototype.withdraw = function(withdrawTotal){
  this.balance -= withdrawTotal;
      $('#currentBalance').text(this.balance);
};

var newAccount;
$(function(){

  $('form#register').submit(function(e){
    e.preventDefault();
    var userName = $('#name').val();
    var userBalance = parseInt($('#initialDeposit').val());
    newAccount = new BankAccount(userName,userBalance);
    $('#welcome').show();
    $('#userNameHeader').text(userName)
    $('#currentBalance').text(userBalance);
  })

    $('form#transactions').submit(function(e){
        e.preventDefault();
        if (newAccount!=null){
          if ($('#deposit').val()){
              newAccount.deposit(parseInt($('#deposit').val()));
          }
          if ($('#withdraw').val()){
              newAccount.withdraw(parseInt($('#withdraw').val()));
          }

        }
        else{
          alert('Please create an account');
        }

    });


});
