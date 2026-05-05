self.addEventListener("install", (e) => {
  console.log("Service Worker ativo");
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
});