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
    var foods = { rice: "302", sushi: "303", pizza: "304", noodle: "305", chicken: "306", cake: "307" };
    var keys = Object.keys(foods);
    var foodName = keys[Math.floor(Math.random() * keys.length)];
    var text = "Today is " + foodName;

    // Send text message to the talk screen where the LIFF application is opne.
    liff.sendMessages([{
      type: "text",
      text: text
    }]).then(function () {
      window.alert("Message sent");
    }).catch(function (error) {
      window.alert("Error sending message: " + error);
    })

    // Send sticler
    liff.sendMessages([{
      type: "sticker",
      packageId: "4",
      stickerId: foods[foodName]
    }]).then(function () {
      window.alert("Message sent");
    }).catch(function (error) {
      window.alert("Error sending message: " + error);
    })

    // Close this window
    liff.closeWindow()
  })
}
