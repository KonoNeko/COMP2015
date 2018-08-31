window.onload = function () {
  /*********************** Assignment 1 Solution ****************************************/
  assignment1();

  function assignment1() {
    // PART 2 - add new user when Add User is clicked
    var adduser = document.getElementById('adduser');
    adduser.onclick = function () {
      var username = prompt('Please enter a username');
      if (username != '') {
        addUserFunction(username);
      }
    }

    // PART 3 - use javascript to change all links to white, unless they have class 'offline'
    var links = document.links;
    for (let i = 0; i < links.length; i++) {
      if (!links[i].classList.contains('offline')) {
        links[i].style.color = 'white';
      }
    }

    // PART 4 - use jQuery to make links hover dark blue, unless they have class 'offline'
    $('a').not('.offline').hover(function () {
      $(this).css('color', 'navy');
    }, function () {
      $(this).css('color', 'white');
    });


    // PART 5 - use jQuery or javascript to disable any links that contain the class 'offline'
    $('.offline').click(function (event) {
      event.preventDefault();
    });

    /* PART 6
    a)
    - use javascript to attach an onclick event to the menu toggle link (the <a> tag with class '.toggle'). when the link is clicked, check the class of the nav menu (div with class '.header-nav' – if the nav menu has class 'show', change it to 'hide'. If the nav menu has class 'hide', change it back to 'show'. This will hide or show the mobile menu)
    b) use javascript to change the toggle icon. When the nav menu is open, the toggle icon should be an x (x.svg). when closed, the toggle icon should be the 'hamburger' (menu.svg)
    */
    var _toggle = document.querySelector('.toggle img');
    var _nav = document.getElementsByClassName('header-nav')[0];

    _toggle.onclick = function () {
      if (_nav.classList.contains('hide')) {
        _nav.classList.remove('hide');
        _nav.classList.add('show');
        _toggle.src = 'x.svg'
      }
      else {
        _nav.classList.remove('show');
        _nav.classList.add('hide');
        _toggle.src = 'menu.svg';
      }
    }
  }

  /*********************** Assignment 2 ****************************************/

  // ---------------- Part 1

  /*
  In part 1 you will be implementing your own addUserFunction() function

  Instructions:

  1. Create an array of three user objects – each user object must have a 'name' and 'status' property. For consistency with the list of users that is hard-coded in the HTML, populate your array with the following
  three users:
    Chris, with status online
    Jason, with status online
    Bill, with status offline

  2. Create a function called addUserFunction, with a parameter named 'username'

  3. Inside the addUserFunction(), begin by creating a new user using the username parameter to set the name.
  Set the status of this new user to offline and then add them to the array you created in step 2

  4. Next, get a reference to the list of users in the header, using document.getElementsByClassName('userlist')[0];

  Every time a new user is added, we want to empty out the existing list and rebuild it from scratch with our
  array of users. This can be accomplished by setting the .innerHTML property of the element you just grabbed (document.getElementsByClassName('userlist')[0]) to an empty string

  5. Now loop through your array of user objects. For each user object:
    a) Create an <li> element using .createElement
    b) Create an <a> element using .createElement
    c) Create a text node using .createTextNode and set it to the current user's (e.g. users[i]) name
    d) Set the class name of your <a> to the current user's status
    e) Set the .href property of your <a> to '#'
    f) Append the text node from step c) inside your <a> element
    g) Append the <a> inside your <li> element
    h) Append the <li> inside the <ul> you got a reference to in part 4

  6. Call the resetLinks() function provided for you below

  */


  function resetLinks() {
    $('a').not('.offline').css('color', 'white');

    $('a').not('.offline').hover(function () {
      $(this).css('color', 'navy');
    }, function () {
      $(this).css('color', 'white');
    });

    $('.offline').click(function (event) {
      event.preventDefault();
    });
  }

  // Add your array of users and addUserFunction HERE!
  var users = [
    { name: "Chris", status: "online", },
    { name: "Jason", status: "online", },
    { name: "Bill", status: "offline", },
  ];

  function addUserFunction(username) {
    var newUser = { name: username, status: "offline", };
    users.push(newUser);
    var userLists = document.getElementsByClassName('userlist');
    for (let i = 0; i < userLists.length; i++) {
      userLists[i].innerHTML = '';
    }
    for (let i = 0; i < users.length; i++) {
      var newList = document.createElement("li");
      var newAttr = document.createElement("a");
      var textNode = document.createTextNode(users[i].name);
      newAttr.className = users[i].status;
      newAttr.setAttribute("href", "#");
      newAttr.appendChild(textNode);
      console.log(newAttr);
      newList.appendChild(newAttr);
      for (let j = 0; j < userLists.length; j++) {
        userLists[j].appendChild(newList);
      }
    }
    resetLinks();
  }




  // ---------------- Part 2

  /*
  Below is an example of how the HTML markup for each message should look.

  <div class="message chris">
    <div class="author"></div>
    <div class="message-content">
      <p>{data goes here}</p>
    </div>
  </div>

  For this portion of the assignment, you will create the structure above for EACH message and use the
  data returned by fetch to populate a) the user name and b) the message content

  Instructions:

  1. Create a function called assignment2(), with a parameter named 'response'. All of the code for this
  part of the assignment MUST go inside the assignment2() function

  2. Inside the assignment2 function, begin by getting a reference to the div with class 'messages' that is already 
  provided in the assignment2.html file (using document.getElementsByClassName('messages')[0]). Then, create a for 
  loop to loop through the data in the 'response' parameter. Steps 3 - 7 can be added inside this for loop*/



  /*3. Create a div and two classes to it, 'message' and the name of the user that the message belongs to.
  The username you add must be taken from the data returned by the fetch() function*/
  /*4. Append this div inside the div with class 'messages' that you retrieved in step 2*/

  /*5. Next, create a div with class 'author' and append it to the div you created in step 3

  6. Create a div with class 'message-content' and append it to the div you created in step 3. Then, create
  a paragraph and append it inside the .message-content div you just created.

  7. Assign the message content from the data to the .innerHTML property of the paragraph. The message content can be accessed (assuming you have named your loop variable 'data') with data.message.body
    i.e.   for (data of response) {
              // data is an object inside the response array
              console.log(data.message.body)
           }
  */

  let responseData;

  fetch('http://comp2015.herokuapp.com/messages')
    .then(response => response.json())
    .then(response => {
      responseData = response;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      assignment2(responseData);
    })


  // Add your assignment2() function HERE!
  function assignment2(response) {

    var myMsg = document.getElementsByClassName("messages")[0]; // in this assignment, only 1 element.
    //for (let i = 0; i < myMsg.length; i++) {
    for (var data of response) {
      d = document.createElement('div');
      d.classList.add("message");
      d.classList.add(data.username);

      myMsg.appendChild(d);

      divofAuthor = document.createElement('div');
      divofAuthor.classList.add('author');
      d.appendChild(divofAuthor);

      divofMsg = document.createElement('div');
      divofMsg.classList.add('message-content');
      d.appendChild(divofMsg);

      p = document.createElement('p');
      divofMsg.appendChild(p);

      //for (data of response) {
        // data is an object inside the response array
        p.innerHTML = data.message.body;
      //}
    }
    //}
  }

}
