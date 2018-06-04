
var serverId;
var infoLink;

var data;



function getServerInfo() {
 

  var widgetRequest = new XMLHttpRequest;
  serverId = document.getElementById("server-id-input").value;
  infoLink = `https://discordapp.com/api/guilds/${serverId}/widget.json`;
  
  widgetRequest.open('GET',infoLink);
  widgetRequest.onload = function(){
    data = JSON.parse(widgetRequest.responseText);
    console.log(data);
    var list = document.getElementById("members");
    var serverName = document.getElementById("server-name");
 
    
    if(list.hasChildNodes()){
        list.removeChild(list.childNodes[0]);
    }

    /*if(data.code == 10004) {
      serverName.appendChild(document.createTextNode("No Server Found."));
    }*/ else {

      membersOnline = data.members.length;
      for(let i = 0; i < data.members.length; i++){
        
        let currentMember = data.members[i];
        
        let userName          = currentMember.username;
        let userId            = currentMember.id;
        let userAvatar        = currentMember.avatar_url;
        let userDiscriminator = currentMember.discriminator;
        let userStatus        = currentMember.status;




        let listItem = document.createElement('li');
        
        let innerList = document.createElement('ul');

        let name          = document.createElement('li');
        let discriminator = document.createElement('li');
        let id            = document.createElement('li');
        let status        = document.createElement('li');
        let avatar        = document.createElement('img');
        


        name.appendChild(document.createTextNode("User: "+userName));
        discriminator.appendChild(document.createTextNode("Discriminator: #"+userDiscriminator))
        id.appendChild(document.createTextNode("ID: "+userId));
        status.appendChild(document.createTextNode("Status: "+userStatus));
        //avatar.setAttribute('src','http://via.placeholder.com/128x128');
        avatar.setAttribute('src',userAvatar);

        innerList.appendChild(name);
        innerList.appendChild(discriminator);
        innerList.appendChild(id);
        innerList.appendChild(status);
        listItem.appendChild(avatar);
        listItem.appendChild(innerList);
        
        list.appendChild(listItem);        
      }
      console.log(membersOnline);  
    }
    return list;
  }
  widgetRequest.send();
  


}