window.onload = function (e) {
  liff.init(function (data) {
    initializeApp(data);
  });
};

function initializeApp(data) {
  liff.getProfile().then(function (profile) {
    var name = profile.displayName;
    document.getElementById('name').textContent = name;
  }).catch(function (error) {
    window.alert("Error getting profile: " + error);
  })

  document.getElementById('omakase').addEventListener('click', function () {
    var foods = ["302", "303", "304", "305", "306", "307"];
    var food = foods[Math.floor(Math.random() * foods.length)];

    // Send message to the talk screen where the LIFF application is opne.
    liff.sendMessages([{
      type: "sticker",
      packageId: "4",
      stickerId: food
    }]).then(function () {
      window.alert("Message sent");
    }).catch(function (error) {
      window.alert("Error sending message: " + error);
    })

    // Close this window
    liff.closeWindow()
  })
}
