

document.getElementById('allbutton').addEventListener('click',()=>
{
    let rowdiv=document.getElementsByClassName('row')[0];
    rowdiv.innerHTML=""
     members.forEach((member)=>
     {
         let childdiv=document.createElement('div');
         childdiv.className="col-md-4";
         childdiv.innerHTML=`  

         <div class="profile-card-2"><img src="./static/${member.username}.png" class="img img-responsive">
             <div class="profile-name">
                 ${member.username}
             </div>
             <div class="profile-username">
                 ${member.year}
             </div>

             <div class="profile-icons"><a href="#"><i class="fa-brands fa-instagram"></i></i></a><a
                     href="#"><i class="fa-brands fa-linkedin"></i></a><a href="#"><i
                         class="fa-brands fa-twitter"></i></a></div>
         </div>`;
         rowdiv.appendChild(childdiv);
     })

})
document.getElementById('4yearbutton').addEventListener('click',()=>
{
    let rowdiv=document.getElementsByClassName('row')[0];
    rowdiv.innerHTML=""
     members.forEach((member)=>
     {    
         if(member.year=='4')
         {

         
         let childdiv=document.createElement('div');
         childdiv.className="col-md-4";
         childdiv.innerHTML=`  

         <div class="profile-card-2"><img src="./static/${member.username}.png" class="img img-responsive">
             <div class="profile-name">
                 ${member.username}
             </div>
             <div class="profile-username">
                 ${member.year}
             </div>

             <div class="profile-icons"><a href="#"><i class="fa-brands fa-instagram"></i></i></a><a
                     href="#"><i class="fa-brands fa-linkedin"></i></a><a href="#"><i
                         class="fa-brands fa-twitter"></i></a></div>
         </div>`;
         rowdiv.appendChild(childdiv);
         }
     })

})
document.getElementById('3yearbutton').addEventListener('click',()=>
{
    let rowdiv=document.getElementsByClassName('row')[0];
    rowdiv.innerHTML=""
     members.forEach((member)=>
     {
         if(member.year=='3')
         {

         
         let childdiv=document.createElement('div');
         childdiv.className="col-md-4";
         childdiv.innerHTML=`  

         <div class="profile-card-2"><img src="./static/${member.username}.png" class="img img-responsive">
             <div class="profile-name">
                 ${member.username}
             </div>
             <div class="profile-username">
                 ${member.year}
             </div>

             <div class="profile-icons"><a href="#"><i class="fa-brands fa-instagram"></i></i></a><a
                     href="#"><i class="fa-brands fa-linkedin"></i></a><a href="#"><i
                         class="fa-brands fa-twitter"></i></a></div>
         </div>`;
         rowdiv.appendChild(childdiv);
         }
     })

})
document.getElementById('2yearbutton').addEventListener('click',()=>
{
    let rowdiv=document.getElementsByClassName('row')[0];
    rowdiv.innerHTML=""
     members.forEach((member)=>
     {
         if(member.year=='2')
         {

         
         let childdiv=document.createElement('div');
         childdiv.className="col-md-4";
         childdiv.innerHTML=`  

         <div class="profile-card-2"><img src="./static/${member.username}.png" class="img img-responsive">
             <div class="profile-name">
                 ${member.username}
             </div>
             <div class="profile-username">
                 ${member.year}
             </div>

             <div class="profile-icons"><a href="#"><i class="fa-brands fa-instagram"></i></i></a><a
                     href="#"><i class="fa-brands fa-linkedin"></i></a><a href="#"><i
                         class="fa-brands fa-twitter"></i></a></div>
         </div>`;
         rowdiv.appendChild(childdiv);
         }
     })

})