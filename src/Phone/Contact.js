import React,{useState} from "react";
const listContact = [{
  "id": 1,
  "first_name": "Sirett",
  "phone": "+886 375 306 5750"
}, {
  "id": 2,
  "first_name": "Pedwell",
  "phone": "+380 235 984 7613"
}, {
  "id": 3,
  "first_name": "Whimper",
  "phone": "+86 689 322 9634"
}, {
  "id": 4,
  "first_name": "Seabon",
  "phone": "+86 110 913 0815"
}, {
  "id": 5,
  "first_name": "Revett",
  "phone": "+63 950 156 5947"
}, {
  "id": 6,
  "first_name": "Selbach",
  "phone": "+506 129 452 3234"
}, {
  "id": 7,
  "first_name": "Sumsion",
  "phone": "+86 999 730 1376"
}, {
  "id": 8,
  "first_name": "Banfield",
  "phone": "+66 883 829 8478"
}, {
  "id": 9,
  "first_name": "Witt",
  "phone": "+27 775 427 3492"
}, {
  "id": 10,
  "first_name": "Milverton",
  "phone": "+55 629 868 5756"
}, {
  "id": 11,
  "first_name": "Casoni",
  "phone": "+86 846 401 4808"
}, {
  "id": 12,
  "first_name": "Gunnell",
  "phone": "+51 359 381 1861"
}, {
  "id": 13,
  "first_name": "Danilovitch",
  "phone": "+86 225 314 1695"
}, {
  "id": 14,
  "first_name": "Cornau",
  "phone": "+46 869 963 2373"
}, {
  "id": 15,
  "first_name": "Killgus",
  "phone": "+63 323 222 3629"
}, {
  "id": 16,
  "first_name": "Elves",
  "phone": "+63 532 901 0616"
}, {
  "id": 17,
  "first_name": "McAdam",
  "phone": "+86 537 378 9747"
}, {
  "id": 18,
  "first_name": "Pogosian",
  "phone": "+375 997 217 7009"
}, {
  "id": 19,
  "first_name": "Weaver",
  "phone": "+86 978 593 2042"
}, {
  "id": 20,
  "first_name": "Courteney",
  "phone": "+92 718 802 8129"
}, {
  "id": 21,
  "first_name": "Hendrickx",
  "phone": "+998 734 496 2612"
}, {
  "id": 22,
  "first_name": "Crady",
  "phone": "+967 143 765 7598"
}, {
  "id": 23,
  "first_name": "Oates",
  "phone": "+46 629 126 9733"
}, {
  "id": 24,
  "first_name": "Brommage",
  "phone": "+46 397 747 2040"
}, {
  "id": 25,
  "first_name": "McCue",
  "phone": "+86 854 852 6896"
}, {
  "id": 26,
  "first_name": "McMyler",
  "phone": "+81 862 269 3228"
}, {
  "id": 27,
  "first_name": "Kermeen",
  "phone": "+62 620 573 8057"
}, {
  "id": 28,
  "first_name": "Farman",
  "phone": "+86 231 771 4743"
}, {
  "id": 29,
  "first_name": "Strodder",
  "phone": "+62 467 932 1933"
}, {
  "id": 30,
  "first_name": "Tsar",
  "phone": "+261 553 458 6047"
}, {
  "id": 31,
  "first_name": "Kemetz",
  "phone": "+62 926 326 6684"
}, {
  "id": 32,
  "first_name": "Thomen",
  "phone": "+351 661 915 9352"
}, {
  "id": 33,
  "first_name": "Mattacks",
  "phone": "+381 941 741 2370"
}, {
  "id": 34,
  "first_name": "Mauvin",
  "phone": "+966 902 538 7987"
}, {
  "id": 35,
  "first_name": "Meigh",
  "phone": "+351 495 210 5358"
}, {
  "id": 36,
  "first_name": "Cranham",
  "phone": "+58 331 535 5540"
}, {
  "id": 37,
  "first_name": "Storck",
  "phone": "+373 459 815 7638"
}, {
  "id": 38,
  "first_name": "Pearmine",
  "phone": "+48 644 621 6443"
}, {
  "id": 39,
  "first_name": "Groger",
  "phone": "+86 399 399 1931"
}, {
  "id": 40,
  "first_name": "Kinglesyd",
  "phone": "+380 373 667 8715"
}, {
  "id": 41,
  "first_name": "Theobold",
  "phone": "+86 762 935 4364"
}, {
  "id": 42,
  "first_name": "Baude",
  "phone": "+687 118 330 4878"
}, {
  "id": 43,
  "first_name": "Scargill",
  "phone": "+353 194 986 0695"
}, {
  "id": 44,
  "first_name": "Lethebridge",
  "phone": "+1 717 770 3743"
}, {
  "id": 45,
  "first_name": "Cleal",
  "phone": "+55 935 436 9652"
}, {
  "id": 46,
  "first_name": "Alvis",
  "phone": "+383 105 946 7014"
}, {
  "id": 47,
  "first_name": "Olivi",
  "phone": "+1 330 776 7360"
}, {
  "id": 48,
  "first_name": "Beaford",
  "phone": "+255 309 883 3670"
}, {
  "id": 49,
  "first_name": "Disbury",
  "phone": "+1 209 840 2487"
}, {
  "id": 50,
  "first_name": "Wasling",
  "phone": "+264 423 795 8020"
}];
const Contact = () =>{
  const [find,setFind] = useState();
  return(
       <center>
          {/* <h5>type Contact name : </h5> */}
          <input type='text' value={find} placeholder=" Find Name "
            onChange={(e)=>setFind(e.target.value)} 
            style={{outline:'none'}}/>
            <br/>
            <table>
              {
              listContact.filter(contact =>contact.first_name.toLowerCase().includes(find)).map((contact)=>(
                  <><br/>
                  <tr key ={contact.id}
                   style={{display:"flex",justifyContent:"space-evenly",gap:'1rem',whiteSpace:'nowrap'}}>
                   <td>{contact.first_name}</td>
                   <td>{contact.phone}</td>
                  </tr>
                  </>
              ))
              }
            </table>
       </center>

  )
}
export default Contact