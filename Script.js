const output = document.getElementById("output");
const input = document.getElementById("commandInput");

const files = {
  "about.txt": `I'm Moorthi , I did my Bachelor's Degree in Bacholor of Science in Chemistry at Bharathiyar University (Tiruppur ,Tamilnadu , INDIA )

I'm currently pursuing my master degree in Master of Computer Applications at SRM Institute of Science and Technology ( Chennai , Tamilnadu , INDIA )

Network Engineer with 5 years of experience in routing protocols, switching, and LAN technologies,
dedicated to designing and optimizing secure, scalable networks to drive operational efficiency and support business goals.

Here's my Resume, if you wanna Hire me.`,

  "contact.txt": `Feel free to reach me at mmoorthi304@gmail.com

My other social media handles include
# Linkedin
# Twitter
# Facebook
# Instagram`
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    print(`root@MoorthiSakthi:~$ ${command}`);

    handleCommand(command);
    input.value = "";
  }
});

function print(text) {
  const div = document.createElement("div");
  div.textContent = text;
  output.appendChild(div);
  window.scrollTo(0, document.body.scrollHeight);
}

function handleCommand(cmd) {
  if (cmd === "ls") {
    print("about.txt contact.txt");
  } 
  else if (cmd.startsWith("cat")) {
    const file = cmd.split(" ")[1];
    if (files[file]) {
      print(files[file]);
    } else {
      print("File not found");
    }
  } 
  else if (cmd === "clear") {
    output.innerHTML = "";
  } 
  else if (cmd === "exit") {
    print("logout");
  }
  else {
    print("Command not found");
  }
}
