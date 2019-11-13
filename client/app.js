function getSessionList(success, error) {
  var soql = "SELECT Id,Name FROM Account";
  force.query(soql, success, error);
}

function showSessionList() {
  getSessionList(
    function (data) {
        console.log(JSON.stringify(data, null, 2));
    },
    function (error) {
        alert("Error: " + JSON.stringify(error));
    });

  return false;
}

router.addRoute('', showSessionList);
