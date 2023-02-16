const mode = "JAVA";
let BASE_URL = "";
let BASE_URL2 = ""
if (mode === "JAVA") {
  BASE_URL = "http://192.168.1.91:8080";
  BASE_URL2 = "http://192.168.1.91:8081";
} else if (mode === "RUBY") {
  BASE_URL = "http://192.168.1.121";
  BASE_URL2 = "http://192.168.1.121";
}

export default BASE_URL;
export { BASE_URL2 };