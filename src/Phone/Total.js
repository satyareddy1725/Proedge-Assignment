import React from "react";
import './Total.css';
const listTotal = [{
  "id": 1,
  "first_name": "Petran",
  "phone": "+385 356 682 3006",
  "time": "10:37 AM",
  "date": "7/16/2022"
}, {
  "id": 2,
  "first_name": "de Mullett",
  "phone": "+62 931 667 2653",
  "time": "7:15 PM",
  "date": "8/10/2022"
}, {
  "id": 3,
  "first_name": "Vanichkin",
  "phone": "+1 702 862 7272",
  "time": "9:51 AM",
  "date": "5/16/2023"
}, {
  "id": 4,
  "first_name": "McCourt",
  "phone": "+63 803 580 7641",
  "time": "7:09 AM",
  "date": "8/3/2022"
}, {
  "id": 5,
  "first_name": "Cromarty",
  "phone": "+46 943 968 0102",
  "time": "6:46 PM",
  "date": "4/8/2023"
}, {
  "id": 6,
  "first_name": "Cordingly",
  "phone": "+234 897 575 8560",
  "time": "12:44 PM",
  "date": "2/11/2023"
}, {
  "id": 7,
  "first_name": "Holsey",
  "phone": "+30 738 941 3259",
  "time": "9:36 AM",
  "date": "7/21/2022"
}, {
  "id": 8,
  "first_name": "Hayth",
  "phone": "+1 821 327 0492",
  "time": "3:12 PM",
  "date": "9/20/2022"
}, {
  "id": 9,
  "first_name": "Mc Gorley",
  "phone": "+86 107 475 3155",
  "time": "5:10 PM",
  "date": "6/9/2022"
}, {
  "id": 10,
  "first_name": "Burgot",
  "phone": "+351 612 629 4001",
  "time": "12:22 AM",
  "date": "4/15/2023"
}, {
  "id": 11,
  "first_name": "Godsafe",
  "phone": "+351 203 718 1862",
  "time": "3:09 PM",
  "date": "10/25/2022"
}, {
  "id": 12,
  "first_name": "Robberts",
  "phone": "+55 964 642 2129",
  "time": "2:34 AM",
  "date": "9/2/2022"
}, {
  "id": 13,
  "first_name": "Mertel",
  "phone": "+994 964 519 2906",
  "time": "5:18 AM",
  "date": "4/23/2023"
}, {
  "id": 14,
  "first_name": "Alessandone",
  "phone": "+66 701 732 6540",
  "time": "11:35 AM",
  "date": "10/13/2022"
}, {
  "id": 15,
  "first_name": "Ebbett",
  "phone": "+52 497 997 7614",
  "time": "5:15 AM",
  "date": "3/28/2023"
}, {
  "id": 16,
  "first_name": "Burles",
  "phone": "+63 386 505 0606",
  "time": "2:06 AM",
  "date": "1/30/2023"
}, {
  "id": 17,
  "first_name": "Hebburn",
  "phone": "+1 801 958 8554",
  "time": "12:51 AM",
  "date": "4/2/2023"
}, {
  "id": 18,
  "first_name": "Picton",
  "phone": "+61 348 655 7155",
  "time": "8:22 AM",
  "date": "12/19/2022"
}, {
  "id": 19,
  "first_name": "Asprey",
  "phone": "+48 503 596 5248",
  "time": "5:42 PM",
  "date": "12/15/2022"
}, {
  "id": 20,
  "first_name": "Strettle",
  "phone": "+86 351 517 6074",
  "time": "3:37 PM",
  "date": "12/23/2022"
}, {
  "id": 21,
  "first_name": "Waskett",
  "phone": "+48 213 337 6353",
  "time": "3:16 AM",
  "date": "3/26/2023"
}, {
  "id": 22,
  "first_name": "Bart",
  "phone": "+249 266 108 0352",
  "time": "3:09 PM",
  "date": "3/13/2023"
}, {
  "id": 23,
  "first_name": "O'Heneghan",
  "phone": "+86 346 189 2307",
  "time": "2:43 AM",
  "date": "10/26/2022"
}, {
  "id": 24,
  "first_name": "Dmitrichenko",
  "phone": "+55 269 620 7550",
  "time": "12:07 AM",
  "date": "5/8/2023"
}, {
  "id": 25,
  "first_name": "McGarry",
  "phone": "+86 842 392 0780",
  "time": "7:50 AM",
  "date": "7/9/2022"
}, {
  "id": 26,
  "first_name": "Nevins",
  "phone": "+86 755 831 8421",
  "time": "10:06 AM",
  "date": "7/12/2022"
}, {
  "id": 27,
  "first_name": "Walkden",
  "phone": "+86 220 262 1189",
  "time": "2:22 AM",
  "date": "4/9/2023"
}, {
  "id": 28,
  "first_name": "Blacklidge",
  "phone": "+380 702 457 3287",
  "time": "12:34 PM",
  "date": "5/4/2023"
}, {
  "id": 29,
  "first_name": "Cowmeadow",
  "phone": "+62 975 913 9479",
  "time": "8:29 PM",
  "date": "11/26/2022"
}, {
  "id": 30,
  "first_name": "Southerns",
  "phone": "+55 493 584 6536",
  "time": "6:19 PM",
  "date": "5/31/2023"
}, {
  "id": 31,
  "first_name": "Gouthier",
  "phone": "+62 132 461 2359",
  "time": "4:25 PM",
  "date": "11/23/2022"
}, {
  "id": 32,
  "first_name": "Rottery",
  "phone": "+230 768 992 0768",
  "time": "3:54 AM",
  "date": "4/11/2023"
}, {
  "id": 33,
  "first_name": "Mussington",
  "phone": "+420 484 587 2959",
  "time": "11:32 PM",
  "date": "8/17/2022"
}, {
  "id": 34,
  "first_name": "O'Hare",
  "phone": "+976 292 738 0990",
  "time": "5:46 AM",
  "date": "9/26/2022"
}, {
  "id": 35,
  "first_name": "Balaisot",
  "phone": "+47 142 574 4568",
  "time": "9:21 AM",
  "date": "10/14/2022"
}, {
  "id": 36,
  "first_name": "Moffatt",
  "phone": "+380 695 377 3033",
  "time": "11:03 AM",
  "date": "10/30/2022"
}, {
  "id": 37,
  "first_name": "Kasbye",
  "phone": "+86 497 406 0424",
  "time": "12:32 PM",
  "date": "2/12/2023"
}, {
  "id": 38,
  "first_name": "Brede",
  "phone": "+48 986 860 7345",
  "time": "9:05 PM",
  "date": "2/24/2023"
}, {
  "id": 39,
  "first_name": "Luscott",
  "phone": "+62 325 760 2331",
  "time": "1:58 PM",
  "date": "9/21/2022"
}, {
  "id": 40,
  "first_name": "Skocroft",
  "phone": "+66 888 115 4501",
  "time": "5:11 AM",
  "date": "7/28/2022"
}];
const TotalCalls = () =>{
    return(
          <center>
            <table>
              {
                listTotal.map((total)=>(
                <tr key={total.id} className="totals">
                 <div id='totalA'>
                    <td>{total.first_name}</td>
                    <td>{total.phone}</td>
                 </div>
                 <div id="totalB">
                    <td>{total.date}</td>
                    <td>{total.time}</td>
                 </div>
                </tr>
              ))}
            </table>
          </center>
    )
}
export default TotalCalls