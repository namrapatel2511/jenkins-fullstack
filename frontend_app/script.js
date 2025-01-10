document.getElementById("fetchData").addEventListener("click", async () => {
  const response = await fetch("http://<YOUR_BACKEND_EC2_PUBLIC_IP>:5000/data");
  const data = await response.json();
  document.getElementById("output").innerText = data.message;
});
